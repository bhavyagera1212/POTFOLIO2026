export const profile = {
  name: "Bhavya Gera",
  shortName: "Bhavya",
  initials: "BG",
  role: "AI/ML Engineer · Frontend",
  tagline: "Frontend · React · Transformers · RAG · Evals",
  intro:
    "Final-year CS student at Thapar Institute (CGPA 10.0/10.0) currently building agentic AI evaluation frameworks at Nutanix. I love taking ideas from a research paper to a deployed product — across LLMs, RAG, computer vision, and full-stack systems.",
  location: "Patiala, India",
  email: "bhavyagera1212@gmail.com",
  phone: "+91-8283802964",
  links: {
    github: "https://github.com/bhavyagera1212",
    linkedin: "https://linkedin.com/in/bhavya-gera-635166258",
    portfolio: "https://bhavyagera1212.github.io/portfolio",
  },
};

export const stats = [
  { label: "CGPA", value: "10.0", sub: "/ 10.0" },
  { label: "Currently", value: "@ Nutanix", sub: "MTS Intern ·AI-ML Team" },
  // { label: "Best Model Accuracy", value: "99.5%", sub: "Lung CT classifier" },
  { label: "Selected", value: "Amazon ML", sub: "Summer School 2025" },
];

export const education = [
  {
    school: "Thapar Institute of Engineering and Technology",
    degree: "B.E. Computer Science",
    location: "Patiala, Punjab",
    period: "Sept 2022 – May 2026",
    score: "CGPA 10.0 / 10.0",
    notes:
      "Relevant Coursework: Conversational AI, NLP, Accelerated Data Science, Speech Processing.",
  },
  {
    school: "DAV Public School",
    degree: "Class XII (PCM with CS) — CBSE",
    location: "Amritsar, Punjab",
    period: "May 2021 – May 2022",
    score: "97.80%",
    notes: "Class X CBSE: 93.20%.",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  tags: string[];
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Nutanix Technologies India Pvt Ltd",
    role: "Member of Technical Staff (MTS) Intern",
    period: "Jan 2026 – Present",
    location: "India",
    tags: ["Agentic AI", "LLM Evaluation", "RAG"],
    bullets: [
      "Designed and shipped an end-to-end Agentic AI Evaluation Framework — a robust pipeline using Python and Langfuse for trace observability and assertion-based evaluation of agentic workflows.",
      "Worked on DataRobot, exploring its Enterprise AutoML and AI lifecycle platform that automates feature engineering, model training, deployment, monitoring, and governance at scale.",
      "Resolved LLM context-size timeouts in production, enhanced metadata preservation in summarization, and fixed reranking logic — measurably improving retrieval accuracy.",
    ],
    stack: [
      "FastAPI",
      "Pydantic",
      "PostgreSQL",
      "React 19",
      "TypeScript",
      "Docker",
      "OpenAI",
      "Langfuse",
      "Python",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  bullets: string[];
  stack: string[];
  link?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "Punjabi Sentiment & Multimodal Image Generation",
    blurb:
      "Multimodal AI app that translates Punjabi → English, crafts a cinematic prompt, and renders a high-quality image with Stable Diffusion XL.",
    highlight: "Multimodal · SDXL · Gradio",
    bullets: [
      "Translates Punjabi text to English, then generates a cinematic prompt and image via Stable Diffusion XL through the Hugging Face Inference API.",
      "Modern, interactive Gradio web interface for end-to-end demoing.",
      "Companion sentiment classifier for Punjabi text built on BERT and LSTM architectures.",
    ],
    stack: ["BERT", "LSTM", "TensorFlow", "Keras", "SDXL", "Hugging Face", "Gradio"],
    link: "https://github.com/bhavyagera1212",
  },
  {
    title: "Lung Cancer Classification via Deep Learning",
    blurb:
      "ResNet50-based CT scan classifier achieving 99.5% validation accuracy across Benign, Malignant, and Normal categories.",
    highlight: "90+% Val Accuracy",
    bullets: [
      "Transfer learning on ResNet50 with fine-tuning and hyperparameter optimisation.",
      "Comprehensive evaluation: confusion matrices, precision-recall curves, and training visualisation.",
      "Robust preprocessing pipeline for medical imaging with class balancing.",
    ],
    stack: ["ResNet50", "3D CNN", "TensorFlow", "Keras", "Python"],
    link: "https://github.com/bhavyagera1212",
  },
  {
    title: "Computer Vision Lip Reading System",
    blurb:
      "End-to-end 3D CNN that recognises spoken commands from silent video with 98.5% validation accuracy.",
    highlight: "90+% Val Accuracy",
    bullets: [
      "Built a custom dataset of 700+ labelled clips using OpenCV for lip-motion detection and automated preprocessing.",
      "Designed a 3D CNN that captures spatiotemporal features across 22-frame video sequences.",
      "Tooling stack: Python, OpenCV, TensorFlow, Streamlit for live demo.",
    ],
    stack: ["3D CNN", "OpenCV", "TensorFlow", "Streamlit", "Python"],
    link: "https://github.com/bhavyagera1212",
  },
];

export const publications = [
  {
    title: "Building a Novel Attention-Based Model for Pansharpening",
    status: "In Progress",
    summary:
      "PyTorch-based deep learning model with a custom attention mechanism aimed at enhancing the resolution of multispectral satellite imagery.",
    tags: ["PyTorch", "Attention", "Remote Sensing"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    category: "ML / DL",
    items: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Langfuse"],
  },
  {
    category: "Backend & Web",
    items: ["FastAPI", "ReactJS", "React 19", "Pydantic", "PostgreSQL"],
  },
  {
    category: "Tools & Infra",
    items: ["Docker", "Git", "Linux", "Jupyter", "Alembic", "VS Code"],
  },
];

export const achievements = [
  {
    title: "Adobe India Hackathon 2025 — Round 2 Selection",
    detail: "Top 4.6% among 87,000+ teams.",
  },
  {
    title: "Amazon ML Summer School 2025",
    detail: "Selected participant.",
  },
  {
    title: "Merit Scholarship — Thapar Institute",
    detail: "Maintained top academic performance throughout engineering (Merit Holder).",
  },
  {
    title: "Purple Fest Goa 2024 & CSSA at GIM",
    detail: "Appreciated participant for technical contributions.",
  },
];

export const volunteer = [
  {
    org: "IEEE Society — Thapar Institute",
    role: "Executive Board Member",
    period: "Sept 2024 – Dec 2025",
    detail: "Organise monthly technical workshops, seminars, and networking events.",
  },
  {
    org: "Pratigya Society — Thapar Institute",
    role: "Volunteer Teacher",
    period: "Jan 2023 – Dec 2024",
    detail: "Taught core academic subjects to underprivileged school students.",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];
