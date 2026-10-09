export interface EducationEntry {
  degree: string;
  dateRange: string;
  institution: string;
  location: string;
  advisors?: string;
  details: string[];
}

export interface Award {
  year: number;
  title: string;
  organization: string;
  amount?: string;
}

export interface Activity {
  title: string;
  date: string | number;
  description: string;
  link?: string;
}

export interface Development {
  title: string;
  institution: string;
  date: string;
  description: string;
  link: string;
}

export interface SkillGroup {
  category: string;
  skills: string;
}

export interface ResearchEntry {
  title: string;
  dateRange: string;
  institution: string;
  location: string;
  details: string[];
}

export interface Membership {
  name: string;
}

// Education
export const education: EducationEntry[] = [
  {
    degree: "PhD in Physics",
    dateRange: "September 2023 - present",
    institution: "University of Washington",
    location: "Seattle, WA",
    advisors: "Advisors: Quentin Buat, Xiangyang Ju (LBNL)",
    details: [
      "Courses taken: Deep Learning, Computer Systems, Quantum Field Theory, Theory of Solids",
      "Candidacy achieved December 2025",
      "Research interests: Physics analysis, GPU acceleration, scientific machine learning",
    ],
  },
  {
    degree: "Master of Science in Physics",
    dateRange: "September 2023 - June 2025",
    institution: "University of Washington",
    location: "Seattle, WA",
    details: [
      "Select courses taken: Quantum Mechanics, Electricity and Magnetism, Statistical Physics, Mechanics",
    ],
  },
  {
    degree: "Bachelor of Arts in Physics, Summa Cum Laude",
    dateRange: "September 2019 - June 2023",
    institution: "Lawrence University",
    location: "Appleton, WI",
    advisors: "Advisors: Megan Pickett, Alexander Heaton",
    details: [
      "Independent research in scientific machine learning and physics-informed neural networks",
      "Developed physics-informed neural network to solve Einstein's field equations to numerically obtain the Schwarzschild metric",
    ],
  },
];

// Technical Skills
export const skills: SkillGroup[] = [
  { category: "Languages", skills: "C++, Python, Julia, Bash" },
  {
    category: "Machine learning",
    skills: "PyTorch, ONNX, NVIDIA Triton Inference Server, multi-node distributed training on HPC",
  },
  {
    category: "Infrastructure",
    skills: "Kubernetes, Docker, Dask, GPU throughput/latency profiling, Prometheus & Grafana monitoring",
  },
  {
    category: "Scientific tools",
    skills: "ROOT, ATLAS Athena, NumPy/SciPy, statistical fitting and systematics, Git/GitLab CI",
  },
];

// Research Experience
export const research: ResearchEntry[] = [
  {
    title: "Development of Transformer-based tau reconstruction AI model",
    dateRange: "Jan. 2026 - present",
    institution: "University of Washington and Lawrence Berkeley National Lab",
    location: "Seattle, WA and Berkeley, CA",
    details: [
      "Developed and tested novel model architecture for tau reconstruction.",
      "Implemented custom plotting analysis suite for benchmarking and performance evaluation.",
    ],
  },
  {
    title: "Deployment of GPU tracking as-a-Service for the ATLAS detector",
    dateRange: "Jun. 2024 - present",
    institution: "University of Washington and Lawrence Berkeley National Lab",
    location: "Seattle, WA and Berkeley, CA",
    details: [
      "Implemented custom C++ backend to run inference at scale for online data-taking.",
      "Developed deployment system on Kubernetes clusters for data-taking systems.",
      "Extensively tested throughput and latency of pipeline through custom metrics and dashboards.",
    ],
  },
  {
    title: "Analysis of CP violation in Z → ττ events",
    dateRange: "Sep. 2023 - present",
    institution: "University of Washington and CERN",
    location: "Seattle, WA and Geneva, CH",
    details: [
      "Novel analysis of di-tau final states using ATLAS data.",
      "Developed understanding of the novel observable, analysis framework, and statistical fitting framework.",
    ],
  },
  {
    title: "Analysis Grand-Challenge Developer",
    dateRange: "Jun. 2026 - present",
    institution: "University of Washington",
    location: "Seattle, WA",
    details: [
      "Developed and tested DASK-based tools to accelerate particle-physics analysis.",
      "Implemented inference as-a-Service infrastructure and statistical analysis tools.",
    ],
  },
];

// Awards & Fellowships
export const awards: Award[] = [
  {
    year: 2026,
    title: "Office of Science Graduate Student Research (SCGSR) Fellowship",
    organization: "U.S. Department of Energy",
    amount: "$21,600",
  },
  {
    year: 2026,
    title: "Analysis Fellowship",
    organization: "IRIS-HEP",
    amount: "$10,000",
  },
  {
    year: 2025,
    title: "Graduate Research Fellowship Program, Honorable Mention",
    organization: "National Science Foundation",
  },
  {
    year: 2024,
    title: "Western Advanced Training for Computational High-Energy Physics (WATCHEP) Fellowship",
    organization: "Department of Energy (DOE)",
    amount: "$65,000 / year",
  },
  {
    year: 2023,
    title: "Provost Award",
    organization: "University of Washington",
    amount: "$10,000",
  },
  {
    year: 2023,
    title: "Physics Department Fellowship",
    organization: "University of Washington",
    amount: "$5,000",
  },
  {
    year: 2022,
    title: "J. Bruce Brackenridge Prize for excellence in physics",
    organization: "Lawrence University",
  },
  {
    year: 2022,
    title: "Maurice Cunningham Phi Beta Kappa Prize for highest GPA in junior class",
    organization: "Lawrence University",
  },
  {
    year: 2021,
    title: "Sir Isaac Newton (SIN) award for creativity in computational physics problem-solving",
    organization: "Lawrence University",
  },
  {
    year: 2021,
    title: "Ralph White Prize in Mathematics",
    organization: "Lawrence University",
  },
];

// Outreach & Service
export const serviceActivities: Activity[] = [
  {
    title: "AI Future Lab Lecturer and Lab Leader",
    date: 2026,
    description:
        "Prepared lab exercises on introductory AI coding concepts for 30 high-school students from Taiwan, and gave a lecture on AI ethics.",
  },
  {
    title: "U.W. A3D3 Machine Learning Hackathon",
    date: 2025,
    description:
      "Organized an ML hackathon at University of Washington for more than 30 students on AI prediction tasks using scientific data.",
    link: "https://indico.cern.ch/event/1604685/overview",
  },
  {
    title: "U.S. LHC Users Association D.C. Trip",
    date: 2025,
    description:
      "High-Energy Physics funding ambassador, advocating for funding in Congress directly with House and Senate members.",
  },
  {
    title: "Exploring the Quantum Universe with Artificial Intelligence",
    date: 2024,
    description: "Undergraduate Symposium Moderator and Mentor.",
  },
  {
    title: "IMOD outreach with Rainier Prep. Middle School",
    date: 2024,
    description:
      "Introduced experimental science to 90 fifth grade students through engaging interactive activities.",
  },
];

// Professional Development
export const development: Development[] = [
  {
    title: "WATCHEP Summer School",
    institution: "Lawrence Berkeley National Lab",
    date: "Summer 2025",
    description:
      "This joint summer school with other computing physics groups in cosmology and particle physics focused on the breadth of physics and computing currently being explored in science and industry.",
    link: "https://indico.cern.ch/event/1531818/",
  },
  {
    title: "Deep Learning at Scale Training",
    institution: "NERSC facility at Lawrence Berkeley National Lab",
    date: "2025",
    description:
      "This training focused on distributed training and data parallelization techniques for training models on high-performance computing systems.",
    link: "https://github.com/NERSC/dl-at-scale-training",
  },
  {
    title: "Machine Learning for Fundamental Physics School",
    institution: "Lawrence Berkeley National Lab",
    date: "Summer 2024",
    description:
      "This workshop focused on tools to deploy machine learning models for a variety of computing needs. Most relevant topics included deployment of models on FPGAs, Differential Programming, Transformers, and Unfolding using machine learning.",
    link: "https://indico.physics.lbl.gov/event/2850/timetable/#20240814",
  },
];

// Memberships
export const memberships: Membership[] = [
  { name: "Accelerated AI Algorithms for Data-Driven Discovery (A3D3)" },
  { name: "Phi Beta Kappa (National Honors Society)" },
  { name: "Sigma Pi Sigma (Physics Honors Society)" },
];

// Mentoring text
export const mentoringText =
  "As a PhD student I have mentored four undergraduates in research techniques by introducing the ATLAS experiment to them, as well as instilling an excitement for physics research and discovery. In this role I organize weekly meetings and check-ins, as well as field questions and provide academic guidance.";
