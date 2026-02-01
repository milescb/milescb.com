export interface BibTexEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
  selected: boolean;
}

export function parseBibTeX(bibtex: string): BibTexEntry[] {
  const entries: BibTexEntry[] = [];

  // Extract each entry block
  const entryRegex = /@([^{]+)\{([^,]+),([\s\S]+?)(?=\n\s*@|\s*$)/g;

  let entryMatch;
  while ((entryMatch = entryRegex.exec(bibtex))) {
    const type = entryMatch[1].trim().toLowerCase();
    const citationKey = entryMatch[2].trim();
    const fieldsText = entryMatch[3];

    const entry: BibTexEntry = {
      type: type,
      key: citationKey,
      fields: {},
      selected: false,
    };

    // Extract fields with better handling of nested braces
    const fieldPattern =
      /(\w+)\s*=\s*\{((?:[^{}]|(?:\{(?:[^{}]|(?:\{[^{}]*\}))*\}))*)\}/g;

    let fieldMatch;
    while ((fieldMatch = fieldPattern.exec(fieldsText))) {
      const fieldName = fieldMatch[1].trim().toLowerCase();
      const fieldValue = fieldMatch[2].trim();
      entry.fields[fieldName] = fieldValue;
    }

    // Check for selected flag
    if (
      fieldsText.match(/selected\s*=\s*\{true\}/i) ||
      fieldsText.match(/selected\s*=\s*true/i)
    ) {
      entry.selected = true;
    }

    // Check if we parsed essential fields
    if (!entry.fields.title) {
      const titleMatch = fieldsText.match(
        /title\s*=\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/
      );
      if (titleMatch) {
        entry.fields.title = titleMatch[1].trim();
      }
    }

    entries.push(entry);
  }

  // Sort by year descending (newest first)
  return entries.sort((a, b) => {
    const yearA = parseInt(a.fields.year || "0");
    const yearB = parseInt(b.fields.year || "0");
    return yearB - yearA;
  });
}

export function formatAuthors(authors: string, maxDisplay: number = 3): string {
  if (!authors) return "";

  const authorList = authors.split(/ and /);

  if (authorList.length > maxDisplay) {
    return authorList.slice(0, maxDisplay).join(", ") + ", et al.";
  }

  return authorList.join(", ");
}

export function processLatex(text: string): string {
  if (!text) return "";

  // Remove empty braces
  text = text.replace(/\{\}/g, "");

  return text;
}

export function getVenueInfo(pub: BibTexEntry): string {
  let venueInfo = "";

  if (pub.fields.journal) {
    // Regular journal article
    venueInfo = `<em>${processLatex(pub.fields.journal)}</em>`;
    if (pub.fields.volume) {
      venueInfo += ` <strong>${pub.fields.volume}</strong>`;
      if (pub.fields.number) {
        venueInfo += `(${pub.fields.number})`;
      }
    }
    if (pub.fields.pages) {
      venueInfo += `, ${pub.fields.pages}`;
    }
  } else if (pub.fields.booktitle) {
    // Conference paper
    venueInfo = `In: <em>${processLatex(pub.fields.booktitle)}</em>`;
    if (pub.fields.pages) {
      venueInfo += `, pp. ${pub.fields.pages}`;
    }
  } else if (pub.fields.eprint) {
    // arXiv paper
    venueInfo = `<em>arXiv</em>: ${pub.fields.eprint}`;
    if (pub.fields.primaryclass) {
      venueInfo += ` [${pub.fields.primaryclass}]`;
    }
  } else if (pub.type === "misc" || pub.type === "unpublished") {
    // Other publications
    venueInfo = pub.fields.howpublished || pub.fields.note || "Preprint";
  }

  // Add year if available
  if (pub.fields.year) {
    venueInfo += ` (${pub.fields.year})`;
  }

  return venueInfo;
}

export function getLinkUrl(pub: BibTexEntry): string {
  if (pub.fields.url) {
    return pub.fields.url;
  } else if (pub.fields.doi) {
    return `https://doi.org/${pub.fields.doi}`;
  } else if (pub.fields.eprint) {
    return `https://arxiv.org/abs/${pub.fields.eprint}`;
  }
  return "";
}
