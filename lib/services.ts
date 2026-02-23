export type ServiceItem = {
  title: string;
  desc: string;
  href?: string; // optional: later link to a detail page
  tag?: string;  // optional label
};

export type ServiceGroup = {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "software-development",
    title: "Web Development",
    subtitle:
      "High-quality websites and software solutions built with performance, security, and scalability in mind.",
    items: [
      {
        title: "E-commerce Website",
        desc: "Conversion-focused storefronts with product, checkout, payment, and admin workflows.",
        tag: "Sales-ready",
        href: "/company/contact",
      },
      {
        title: "Portfolio Website",
        desc: "Fast, elegant personal or company portfolio sites with SEO and clean UI.",
        tag: "SEO-friendly",
        href: "/company/contact",
      },
      {
        title: "Education Website",
        desc: "Course platforms, student dashboards, content modules, and role-based access.",
        tag: "LMS-ready",
        href: "/company/contact",
      },
      {
        title: "Business / Corporate Website",
        desc: "Modern corporate sites with service pages, case studies, and lead-generation funnels.",
        tag: "Brand + Leads",
        href: "/company/contact",
      },
      {
        title: "News / Media Website",
        desc: "High-traffic publishing sites with categories, editors, ads, and performance tuning.",
        tag: "High traffic",
        href: "/company/contact",
      },
      {
        title: "Travel Website",
        desc: "Explore destinations, travel guides, itineraries, and booking features.",
        tag: "Content",
        href: "/company/contact",
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    subtitle:
      "Mobile and web applications designed for real users, built for long-term growth.",
    items: [
      {
        title: "Android App",
        desc: "Modern Android apps with clean UI, offline support, and performance best practices.",
        tag: "Android",
        href: "/company/contact",
      },
      {
        title: "iOS App",
        desc: "Smooth iOS experiences with scalable architecture and app-store readiness.",
        tag: "iOS",
        href: "/company/contact",
      },
      {
        title: "Mobile App",
        desc: "Cross-platform apps with consistent UI, fast iteration, and stable releases.",
        tag: "Cross-platform",
        href: "/company/contact",
      },
      {
        title: "Web App",
        desc: "Dashboards, SaaS platforms, admin panels, and internal tools with secure auth.",
        tag: "SaaS",
        href: "/company/contact",
      },
    ],
  },
  {
    id: "ml-ai-development",
    title: "ML & AI Development",
    subtitle:
      "Applied AI solutions that automate workflows, improve support, and unlock insights.",
    items: [
      {
        title: "Chatbot",
        desc: "Support and sales chatbots with knowledge base grounding and analytics.",
        tag: "Support",
        href: "/company/contact",
      },
      {
        title: "AI Agent",
        desc: "Task-oriented agents that integrate tools, workflows, and business rules safely.",
        tag: "Automation",
        href: "/company/contact",
      },
      {
        title: "LLM Solutions",
        desc: "LLM-powered features like summarization, classification, search, and copilots.",
        tag: "LLM",
        href: "/company/contact",
      },
      {
        title: "QA Testing & Automations",
        desc: "AI-assisted testing, regression automation, and quality pipelines for faster releases.",
        tag: "Reliability",
        href: "/company/contact",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    subtitle:
      "Design systems and user-first experiences that increase conversion and retention.",
    items: [
      {
        title: "Product UI Design",
        desc: "Modern UI for web apps, SaaS dashboards, and mobile experiences.",
        tag: "UI",
        href: "/company/contact",
      },
      {
        title: "UX Research & Flow Mapping",
        desc: "User journeys, pain points, wireframes, and structure that reduces friction.",
        tag: "UX",
        href: "/company/contact",
      },
      {
        title: "Design Systems",
        desc: "Reusable components, tokens, guidelines, and scalable brand consistency.",
        tag: "System",
        href: "/company/contact",
      },
      {
        title: "Landing Page Optimization",
        desc: "Conversion-focused landing pages with messaging, sections, and testing strategy.",
        tag: "CRO",
        href: "/company/contact",
      },
    ],
  },
  {
    id: "maintenance-support",
    title: "Marketing & SEO",
    subtitle:
      "Grow your brand visibility, traffic, and conversions with data-driven marketing strategies.",
    items: [
      {
        title: "SEO Optimization",
        desc: "Technical SEO, keyword research, on-page improvements, and ranking strategy.",
        tag: "Ongoing",
        href: "/company/contact",
      },
      {
        title: "Content & Blogging Strategy",
        desc: "Content planning, SEO writing, and authority building.",
        tag: "Performance",
        href: "/company/contact",
      },
      {
        title: "Digital Marketing",
        desc: "Multi-channel campaigns across social media, email, and search platforms.",
        tag: "Security",
        href: "/company/contact",
      },
      // {
      //   title: "Monitoring & Reliability",
      //   desc: "Uptime monitoring, error tracking, alerts, and incident response workflows.",
      //   tag: "SRE-lite",
      //   href: "/company/contact",
      // },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle:
      "Ship faster with reliable infrastructure, CI/CD, and observability built-in.",
    items: [
      {
        title: "CI/CD Pipelines",
        desc: "Automated build, test, deploy pipelines with safe rollbacks and environments.",
        tag: "Delivery",
        href: "/company/contact",
      },
      {
        title: "Cloud Deployment",
        desc: "Deploy to AWS/GCP/Azure with best practices for scalability and cost control.",
        tag: "Cloud",
        href: "/company/contact",
      },
      {
        title: "Containerization",
        desc: "Docker & Kubernetes setups for consistent environments and scalable services.",
        tag: "Containers",
        href: "/company/contact",
      },
      {
        title: "Observability",
        desc: "Logging, metrics, tracing, dashboards, and alerts that keep systems healthy.",
        tag: "Monitoring",
        href: "/company/contact",
      },
    ],
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
];
