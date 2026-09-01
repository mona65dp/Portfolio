import { useState } from "react";

const baseAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const feelItImage = baseAsset("Photo_web/Feel_it.png");
const PioneerImage = baseAsset("Photo_games/Pioneer_of_the_Stars.png");
const RobloxImage = baseAsset("Photo_games/Roblox.png");
const LeatherCraftImage = baseAsset("Photo_web/The_Leather_Craft.png");
const GalaxyAttackImage = baseAsset("Photo_games/Galaxy_Attack.png");
//const CvPdf = baseAsset("CV/CV_Mr.Witthaya_Audomrat.pdf");

const skills = {
  "Languages & Web": ["C#", "HTML", "JavaScript", "React", "Tailwind CSS"],
  "Dev Tools & Engines": ["Unity", "Roblox Studio", "VS Code", "GitHub"],
  "Design & Tools": ["Microsoft Word","Figma", "Canva", "OBS Studio", "TikTok Studio"],
};

const experiences = [
  {
    role: "Game Designer Intern",
    company: "LUMAS CORP | Bangkok",
    date: "Jan-May 2026",
    tone: "primary",
    points: [
      {
        label: "Game & Economy Design",
        text: "Designed core game mechanics, rules, and balanced in-game economies.",
      },
      {
        label: "Project & QA Leadership",
        text: "Led task allocation and enforced QA to hit deadlines, saving THB 72K/year by reducing headcount.",
      },
      {
        label: "Client Relations",
        text: "Presented deliverables and iterated game designs based on client feedback.",
      },
    ],
  },
  {
    role: "Product Consultant / Sales",
    company: "ORIENTAL AROMA | Bangkok",
    date: "Jan-Aug 2025",
    tone: "secondary",
    points: [
      {
        label: "Customer Service & Sales",
        text: "Served Thai and international customers, actively promoting products to hit sales targets.",
      },
      {
        label: "Checkout Assistance",
        text: "Guided customers through checkout process to ensure smooth payment transactions.",
      },
      {
        label: "Inventory Management",
        text: "Tracked and recorded inventory levels to maintain accurate stock control.",
      },
    ],
  },
];
const projects = {
  game: [
    {
      title: "Pioneer of the Stars",
      url: "https://moonun.itch.io/pioneer-of-the-stars",
      type: "Unity",
      date: "Jan-Aug 26",
      role: "Game Designer, Developer & Project Manager",
      image:
        PioneerImage,
      tags: ["C#", "Microsoft Word", "Figma", "Survival"],
      points: [
        {
          label: "Systems Design",
          text: "Designed a sci-fi survival game, balancing resource management and base-building.",
        },
        {
          label: "GDD & UX/UI",
          text: "Authored GDDs, managed balance spreadsheets, created UI/UX frameworks in Figma.",
        },
        {
          label: "Unity Development",
          text: "Developed core gameplay code, managed backups/version control.",
        },
        {
          label: "Leadership",
          text: "Led team, enforced QA, successfully defended project to academic committees.",
        },
      ],
    },
    {
      title: "Blade of Legends!",
      url: "https://www.roblox.com/games/102984869133963/Blade-of-Legends",
      type: "Roblox Studio",
      date: "Jan-May 26",
      role: "Game Designer Intern",
      image:
        RobloxImage,
      tags: ["Microsoft Word", "Figma", "Google Sheet", "Multiplayer"],
      points: [
        {
          label: "3D Gameplay Design",
          text: "Designed a 3D multiplayer Roblox Deathmatch for up to 26 players, featuring an unlimited respawn mechanic.",
        },
        {
          label: "Gacha & Economy",
          text: "Developed in-game economy and Gacha systems with outfit and weapon skins to drive player engagement.",
        },
        {
          label: "Reward Balancing",
          text: "Balanced progression using placement-based currency rewards to foster competitive gameplay.",
        },
      ],
    },
    {
      title: "Galaxy Attack",
      url: "https://mona65dp.github.io/Galaxy_Attack/",
      type: "HTML",
      date: "Aug 25",
      role: "Game Designer & Developer",
      image:
        GalaxyAttackImage,
      tags: ["HTML", "Canva", "GitHub", "Shooter"],
      points: [
        {
          label: "2D Pixel Game Development",
          text: "Designed and developed a 2D pixel shooter game, Galaxy Attack, using HTML",
        },
        {
          label: "Core Mechanics & Systems",
          text: "Implemented core shooting mechanics, player controls, dynamic enemy spawning, and collision detection.",
        },
        {
          label: "Performance Optimization",
          text: "Optimized game logic and rendering performance for smooth browser-based execution across multiple devices.",
        },
      ],
    },
  ],
  web: [
    {
      title: "The Leather Craft",
      url: "https://mona65dp.github.io/The-Leather-Craft_Prototype/",
      type: "HTML (Prototype)",
      date: "Oct 25",
      role: "UX/UI Designer & Developer",
      image: LeatherCraftImage,
      tags: ["HTML", "Figma", "GitHub", "Website"],
      points: [
        {
          label: "AI-Assisted Development",
          text: "Generated initial code using AI and refactored it to align with design specifications.",
        },
        {
          label: "UX/UI & Layout Design",
          text: "Designed a luxury layout using Grid Systems and Whitespace for a seamless shopping experience.",
        },
        {
          label: "Brand Identity & Styling",
          text: "Selected a monochrome palette and paired Playfair Display SC with Kanit typography for a premium look.",
        },
      ],
    },
    {
      title: "Feel it",
      url: "https://mona65dp.github.io/Feel-if/",
      type: "React",
      date: "Aug-Nov 25",
      role: "App Designer & Developer",
      image: feelItImage,
      tags: ["PWA", "Figma", "GitHub", "Mobile App"],
      points: [
        {
          label: "App & UX/UI Design",
          text: "Designed a mood-tracking app with photo attachments, passcode lock, and PDF export functionality.",
        },
        {
          label: "Rapid Feature Development",
          text: "Developed core codebase using AI-assisted programming to speed up feature delivery.",
        },
        {
          label: "Mood Analytics",
          text: "Built in-app data analytics to track and evaluate emotional trends over time.",
        },
      ],
    },
  ],
};

function SectionTitle({ children }) {
  const icons = {
    Education: "fa-graduation-cap",
    "Technical Skills": "fa-screwdriver-wrench",
    "Work Experience": "fa-briefcase",
    Projects: "/",
  };
  return (
    <h2 className="section-title">
      <i
        className={`fas ${icons[children] || "fa-sparkles"} mr-3 text-indigo-600`}
      />
      {children}
    </h2>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="liquid-card project-card group">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <span className="project-type">
          <i className="fas fa-code mr-1" />
          {project.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          </h3>
          <span className="date-pill">{project.date}</span>
        </div>
        <p className="mb-4 mt-2 text-sm font-medium text-indigo-600">
          {project.role}
        </p>
        <ul className="mb-6 flex-1 space-y-3 text-sm leading-relaxed text-slate-600">
          {project.points.map((point) => (
            <li key={point.label} className="flex gap-2">
              <i className="fas fa-check check mt-1 text-xs" />
              <span>
                <strong>{point.label}:</strong> {point.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Home() {
  const [projectType, setProjectType] = useState("game");

  return (
    <main>
      <section
        id="about"
        className="section-spacing relative z-10 px-4 pt-36 md:pt-44"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="display-title">
            Hello, I&apos;m
            <br />
            <span>Witthaya Audomrat</span>
          </h1>
          <p className="mx-auto mt-5 mb-5 max-w-3xl text-xl font-light leading-relaxed text-slate-600 md:text-2xl">
            Junior Game Designer & Developer
          </p>
          <div className="location-pill">
            <i className="fas fa-map-marker-alt mr-2 text-emerald-500" />
            Nonthaburi, Thailand
          </div>
          <div className="liquid-card mx-auto mt-4 max-w-3xl p-7 text-left md:p-10">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              <i className="fas fa-user-circle mr-2 text-indigo-600" />
              About Me
            </h2>
            <p className="leading-relaxed text-slate-600">
              Fresh grad with hands-on <strong>Unity, Roblox & Figma</strong>{" "}
              experience. Leverages <strong>AI-assisted</strong> for fast
              gameplay prototyping, economy balancing, and QA testing. Winner of
              the <strong>Outstanding CWIE Innovation Award</strong>. Adaptable,
              hardworking, and ready to learn.
            </p>
            <div className="mt-6 flex flex-col gap-3 border-t border-slate-200/70 pt-6 text-sm font-medium text-slate-700 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <a href="tel:+66611822035" className="contact-link">
                <i className="fas fa-phone mr-2 text-slate-400" />
                +66 61 182 2035
              </a>
              <a
                href="mailto:witthaya.audomrat@gmail.com"
                className="contact-link"
              >
                <i className="fas fa-envelope mr-2 text-slate-400" />
                witthaya.audomrat@gmail.com
              </a>
              <div className="flex gap-3">
                <a
                  className="social-link"
                  href="https://canva.link/5i3s57280gtqrp8"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="CV"
                >
                  <i className="fas fa-file-lines" />
                </a>
                <a
                  className="social-link"
                  href="https://url.in.th/AsLhl"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="social-link"
                  href="https://github.com/mona65dp"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  className="social-link"
                  href="https://moonun.itch.io"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Itch.io"
                >
                  <i className="fab fa-itch-io" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-spacing relative z-10 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-8 ">
              <div className="liquid-card p-6 md:p-8 ">
                <SectionTitle>Education</SectionTitle>
                <h3 className="text-xl font-bold text-slate-900">
                  Dhurakij Pundit University
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  College of Creative Design and Entertainment Technology
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Interactive Design and Game Development
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-5">
                  <span className="tag tag-accent">GPAX: 3.38</span>
                  <span className="date-pill">2022-2026</span>
                </div>
              </div>
              <div className="liquid-card p-6 md:p-8">
                <SectionTitle>Technical Skills</SectionTitle>
                <div className="space-y-5">
                  {Object.entries(skills).map(([group, items]) => (
                    <div key={group}>
                      <h3 className="skill-heading">{group}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span className="tag" key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="liquid-card p-6 md:p-8">
              <SectionTitle>Work Experience</SectionTitle>
              <div className="space-y-8">
                {experiences.map((experience) => (
                  <article
                    className={`timeline-item ${experience.tone}`}
                    key={experience.role}
                  >
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {experience.role}
                        </h3>
                        <p className="mt-1 font-medium text-indigo-600">
                          {experience.company}
                        </p>
                      </div>
                      <span className="date-pill self-start">
                        {experience.date}
                      </span>
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                      {experience.points.map((point) => (
                        <li key={point.label}>
                          <strong>{point.label}:</strong> {point.text}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="liquid-card mt-8 flex flex-col gap-4 p-6 md:flex-row md:items-center md:p-8">
            <div className="award-mark">
              <i className="fas fa-trophy" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900">
                Achievement <span className="award-label">Highlight</span>
              </h3>
              <p className="font-semibold text-slate-800">
                Nara Fight (Roblox Game) | Outstanding CWIE Innovative Project
                Award
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Game Designer (Co-op Internship at LUMAS CORP)
              </p>
            </div>
            <p className="border-t border-slate-200/70 pt-4 text-sm italic text-slate-600 md:w-1/3 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              Awarded at DPU CWIE Day for innovation and practical
              implementation in the gaming industry.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section-spacing relative z-10 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <SectionTitle>Projects</SectionTitle>
          </div>
          <div className="mb-10 flex justify-center">
            <div className="liquid-glass flex gap-1 rounded-2xl p-1.5">
              <button
                className={`tab-button ${projectType === "game" ? "selected" : ""}`}
                onClick={() => setProjectType("game")}
                type="button"
              >
                <i className="fas fa-gamepad mr-2" />
                Game
              </button>
              <button
                className={`tab-button ${projectType === "web" ? "selected" : ""}`}
                onClick={() => setProjectType("web")}
                type="button"
              >
                <i className="fas fa-laptop-code mr-2" />
                Web & App
              </button>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects[projectType].map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
