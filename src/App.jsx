// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./App.css";

// /* ------------------------------------------------------------------ */
// /*  Content                                                            */
// /* ------------------------------------------------------------------ */

// // The path of a ride request through AsanCars, taken from the project
// // description: Flutter apps, PHP/MySQL on a self-managed AWS VPS, Redis for
// // ride matching, and a Laravel WebSocket layer for live driver offers.
// const ROUTE = [
//   { title: "Rider app", detail: "Flutter. The rider requests a ride." },
//   { title: "PHP API", detail: "PHP and MySQL on a self-managed AWS VPS." },
//   { title: "Redis", detail: "Ride matching." },
//   { title: "WebSocket", detail: "Live driver offers through a Laravel WebSocket layer." },
//   { title: "Driver app", detail: "Flutter. The driver receives the offer." },
// ];

// // A generic web stack, not tied to any one project.
// const LAYERS = [
//   { title: "React", detail: "Components, state and routing." },
//   { title: "ASP.NET Core", detail: "Controllers, services and business logic." },
//   { title: "Database", detail: "MySQL and PostgreSQL." },
// ];

// // Labels for the two connections between layers.
// const LINKS = [
//   { down: "HTTP request", up: "JSON response", idle: "HTTP and JSON" },
//   { down: "SQL query", up: "Result set", idle: "SQL" },
// ];

// const PROJECTS_CURRENT = [
//   {
//     name: "UlcerVista AI",
//     status: "In development",
//     desc: "A Flutter app using 2 CNN models for making prediction for user's uploaded foot images along with analysis of the scans made so far, to relfect the condition overtime. It has a chatbot for answering user queries & providing related info, built on a RAG architecture.",
//     stack: "Flutter, pytorch, python, Firestore, RAG, Cloudflare",
//   },
//   {
//     name: "asanCars",
//     status: "Completed",
//     main: true,
//     desc: "A ride-hailing platform for the Pakistan market. Flutter apps for riders and drivers, a PHP/MySQL backend on a self-managed AWS VPS, and a React admin panel. Ride matching runs through Redis and a Laravel WebSocket layer for live driver offers.",
//     stack: "Flutter, PHP, MySQL, Redis, React",
//   },
// ];

// const PROJECTS_PRACTICE = [
//   {
//     name: "Multiplayer Fleet Battle Game",
//     status: "Learning build - Ongoing",
//     desc: "A multiplayer, turn-based fleet battle game with a military theme, built to practise ASP.NET Core and React.",
//     stack: "ASP.NET Core, React, TailwindCSS, Vite, Git/GitHub, ClaudeAI",
//     gitHubRepo: "tobeaddedd......",
//   },
//   {
//     name: "RepairRestore",
//     status: "Learning build",
//     desc: "Suggest users whether to Repair or Replace the Phone/Laptop based on some inputs. It is an ASP.NET Core Web API using a layered architecture with MVC-style controllers and service-based business logic.",
//     stack: "ASP.NET Core, React, TailwindCSS, Vite, Git/GitHub, ClaudeAI",
//     gitHubRepo: "https://github.com/hadisafatima/Repair-VS-Replace",
//   },
// ];

// const ABOUT = [
//   {
//     lead: true,
//     text: "I'm an independent, self-taught developer. I work across the whole stack: backend APIs in PHP and ASP.NET Core, and web interfaces in React.",
//   },
//   {
//     text: "Most of my projects need one person to design the database, write the API, build the app and keep the application running, so I do all of that.",
//   },
//   {
//     text: "Right now I'm invested in learning ASP.NET Core properly by understanding its concepts & then applying them in my practice projects.",
//   },
// ];

// const STACK = [
//   { label: "Languages", items: ["JavaScript", "PHP", "C#", "python", "Dart"] },
//   { label: "Frontend", items: ["React", "Tailwind CSS", "Vite"] },
//   {
//     label: "Backend and infrastructure",
//     items: ["ASP.NET Core", "PHP APIs", "MySQL", "Redis", "AWS VPS", "Firebase"],
//   },
// ];

// const CONTACT = [
//   { label: "Email", text: "hadisaasyed@gmail.com", href: "hadisaasyed@gmail.com" },
//   { label: "GitHub", text: "github.com/hadisafatima", href: "https://github.com/hadisafatima" },
//   { label: "LinkedIn", text: "linkedin.com/in/hadisasyed", href: "https://linkedin.com/in/hadisasyed" },
// ];

// const NAV = [
//   { id: "work", label: "Projects" },
//   { id: "about", label: "About" },
//   { id: "stack", label: "Stack" },
//   { id: "contact", label: "Contact" },
// ];

// /* ------------------------------------------------------------------ */
// /*  Styles                                                             */
// /*  Self-contained on purpose: every colour, size and hover state is   */
// /*  defined here, so nothing depends on Tailwind having a matching     */
// /*  utility.                                                           */
// /* ------------------------------------------------------------------ */

// // function GlobalStyle() {
// //   return (
// //     <style>{`

// //     `}</style>
// //   );
// // }

// /* ------------------------------------------------------------------ */
// /*  Components                                                         */
// /* ------------------------------------------------------------------ */

// // The one moving part on the page: a request travelling down a typical web
// // stack (React, then ASP.NET Core, then the database) and the response coming
// // back up. With reduced motion enabled it shows a still diagram.
// function StackFlow() {
//   const [step, setStep] = useState(0);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       setStep(-1);
//       return;
//     }
//     const id = setInterval(() => setStep((s) => (s + 1) % 8), 850);
//     return () => clearInterval(id);
//   }, []);

//   // 0 React, 1 request to API, 2 API, 3 query to DB, 4 DB, 5 result to API, 6 API, 7 response to React
//   const layerOn = [step === 0, step === 2 || step === 6, step === 4];
//   const linkDir = [
//     step === 1 ? "down" : step === 7 ? "up" : null,
//     step === 3 ? "down" : step === 5 ? "up" : null,
//   ];

//   return (
//     <figure className="flow-fig">
//       <div
//         role="img"
//         aria-label="Diagram of a web request: the React front end calls an ASP.NET Core API, which queries a database, and the response returns the same way."
//       >
//         {LAYERS.map((layer, i) => (
//           <div key={layer.title}>
//             <div className={`layer ${layerOn[i] ? "on" : ""}`}>
//               <span className="layer-title">{layer.title}</span>
//               <span className="layer-detail">{layer.detail}</span>
//             </div>
//             {i < LAYERS.length - 1 && (
//               <div className={`link ${linkDir[i] ? "on" : ""}`}>
//                 {linkDir[i] && <span key={step} className={`packet ${linkDir[i]}`} />}
//                 <span className="link-label">{LINKS[i][linkDir[i] || "idle"]}</span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <figcaption>How a request moves through a typical web stack.</figcaption>
//     </figure>
//   );
// }

// function Project({ project }) {
//   return (
//     <article className={`proj ${project.main ? "proj--main" : ""}`}>
//       <div>
//         <h4>{project.name}</h4>
//         <p className="proj-status">{project.status}</p>
//       </div>
//       <div>
//         {project.desc && <p className="proj-desc">{project.desc}</p>}
//         <p className="proj-meta"><b>Built with</b> {project.stack}</p>
//         {project.gitHubRepo && (
//           <p className="proj-links">
//             <a className="u" href={project.gitHubRepo}>GitHub Repo</a>
//           </p>
//         )}
//       </div>
//     </article>
//   );
// }

// const RESUME_URL = "/Hadisa_Resume.pdf";

// export default function Portfolio() {
//   // const handleResumeClick = (e) => {
//   //   e.preventDefault(); // TODO: replace with a real résumé file link before publishing
//   // };

//   return (
//     <div className="pf">
//       {/* <GlobalStyle /> */}

//       <header className="bar dark">
//         <div className="wrap">
//           <a className="brand" href="#top">Hadisa<span className="brand-dot">.</span></a>
//           <nav aria-label="Main">
//             {NAV.map((n) => (
//               <a key={n.id} href={`#${n.id}`}>{n.label}</a>
//             ))}
//           </nav>
//           <a className="btn-outline" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
//             Résumé
//           </a>
//         </div>
//       </header>

//       <main id="top">
//         <section className="hero dark">
//           <div className="wrap">
//             <div>
//               <h1>I build the backend, the APIs they use, and the frontend they run for.</h1>
//               <p>I'm Hadisa, a full-stack developer working in React, TailwindCSS and ASP.NET Core.</p>
//               <p>
//                 Right now I'm building a <b>multi-player Fleet battle game</b>, a turn-based military theme game.
//               </p>
//               <div className="cta">
//                 <a className="btn-solid" href="#work">See projects</a>
//                 <a className="u" href="#contact">Email me</a>
//               </div>
//             </div>
//             <StackFlow />
//           </div>
//         </section>

//         <section className="sec" id="work">
//           <div className="wrap">
//             <div>
//               <h2>Projects</h2>
//               <p className="sec-note">Real-world work first, then projects I build to learn.</p>
//             </div>
//             <div>
//               <div className="group">
//                 <h3 className="group-title">Current work</h3>
//                 {PROJECTS_CURRENT.map((p) => (
//                   <Project project={p} key={p.name} />
//                 ))}
//               </div>
//               <div className="group">
//                 <h3 className="group-title">Practice builds</h3>
//                 {PROJECTS_PRACTICE.map((p) => (
//                   <Project project={p} key={p.name} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="sec" id="about">
//           <div className="wrap">
//             <div>
//               <h2>About</h2>
//             </div>
//             <div className="about">
//               {ABOUT.map((p) => (
//                 <p key={p.text} className={p.lead ? "lead" : undefined}>
//                   {p.text}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="sec" id="stack">
//           <div className="wrap">
//             <div>
//               <h2>Stack</h2>
//               <p className="sec-note">Grouped by where it sits in the stack, not rated out of 10.</p>
//             </div>
//             <div className="layers">
//               {STACK.map((layer) => (
//                 <div key={layer.label}>
//                   <h3>{layer.label}</h3>
//                   <ul>
//                     {layer.items.map((item) => (
//                       <li key={item}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="contact dark" id="contact">
//         <div className="wrap">
//           <div className="grid">
//             <div>
//               <h2>Open to full-stack, frontend and backend work.</h2>
//               <p className="lede">
//                 Freelance or full-time. If it involves a real production system rather than a mockup, I'm interested.
//               </p>
//             </div>
//             <ul className="contact-list">
//               {CONTACT.map((c) => (
//                 <li key={c.label}>
//                   <span className="k">{c.label}</span>
//                   <a href={c.href}>{c.text}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="foot">
//             <span>© 2026 Hadisa</span>
//             <a href="#top">Back to top</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const PROJECTS_CURRENT = [
  {
    name: "UlcerVista AI (FYP)",
    status: "In development",
    desc: "A Flutter app using 2 CNN models for making prediction for user's uploaded foot images along with analysis of the scans made so far, to relfect the condition overtime. It has a chatbot for answering user queries & providing related info, built on a RAG architecture.",
    stack: "Flutter, pytorch, python, Firestore, RAG, Cloudflare",
  },
  {
    name: "asancars",
    status: "Completed",
    desc: "A ride-hailing platform for the Pakistan market. Flutter apps for riders and drivers, a PHP/MySQL backend on a self-managed AWS VPS, and a React admin panel. Ride matching runs through Redis and a Laravel WebSocket layer for live driver offers.",
    stack: "Flutter, PHP, MySQL, Redis, React",
  },
];

const PROJECTS_PRACTICE = [
  {
    name: "Multiplayer Fleet Battle Game",
    status: "Learning build - Ongoing",
    desc: "A multiplayer, turn-based fleet battle game with a military theme, built to practise ASP.NET Core and React.",
    stack: "ASP.NET Core, React, TailwindCSS, Vite, Git/GitHub, ClaudeAI",
    gitHubRepo: "tobeaddedd......",
  },
  {
    name: "RepairRestore",
    status: "Learning build",
    desc: "Suggest users whether to Repair or Replace the Phone/Laptop based on some inputs. It is an ASP.NET Core Web API using a layered architecture with MVC-style controllers and service-based business logic.",
    stack: "ASP.NET Core, React, TailwindCSS, Vite, Git/GitHub, ClaudeAI",
    gitHubRepo: "https://github.com/hadisafatima/Repair-VS-Replace",
  },
];

const ABOUT = [
  {
    lead: true,
    text: "I'm an independent, self-taught developer. I work across the whole stack: backend APIs in PHP and ASP.NET Core, and web interfaces in React.",
  },
  {
    text: "Most of my projects need one person to design the database, write the API, build the app and keep the application running, so I do all of that.",
  },
  {
    text: "Right now I'm invested in learning ASP.NET Core properly by understanding its concepts & then applying them in my practice projects.",
  },
];

const STACK = [
  { label: "Languages", items: ["JavaScript", "PHP", "C#", "python", "Dart"] },
  { label: "Frontend", items: ["React", "Tailwind CSS", "Vite"] },
  {
    label: "Backend and infrastructure",
    items: ["ASP.NET Core", "PHP APIs", "MySQL", "Redis", "AWS VPS", "Firebase"],
  },
];

const CONTACT = [
  { label: "Email", text: "hadisaasyed@gmail.com", href: "hadisaasyed@gmail.com" },
  { label: "GitHub", text: "github.com/hadisafatima", href: "https://github.com/hadisafatima" },
  { label: "LinkedIn", text: "linkedin.com/in/hadisasyed", href: "https://linkedin.com/in/hadisasyed" },
];

const NAV = [
  { id: "work", label: "Projects" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  Request flow animation data                                        */
/*  Coordinates are in the SVG's 440 x 340 viewBox.                    */
/* ------------------------------------------------------------------ */

const NODES = {
  client: { x: 64, y: 170, title: "Client", tech: "React, Flutter" },
  api: { x: 220, y: 170, title: "API", tech: "ASP.NET Core, PHP" },
  cache: { x: 376, y: 64, title: "Cache", tech: "Redis" },
  db: { x: 376, y: 276, title: "Database", tech: "MySQL, PostgreSQL" },
};

const NODE_W = 116;
const NODE_H = 64;

const EDGES = [
  ["client", "api"],
  ["api", "cache"],
  ["api", "db"],
];

// One entry per step: where the request is, and which connection it just used.
const STEPS = [
  { at: "client", edge: null },
  { at: "api", edge: 0 },
  { at: "cache", edge: 1 },
  { at: "api", edge: 1 },
  { at: "db", edge: 2 },
  { at: "api", edge: 2 },
  { at: "client", edge: 0 },
];

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

// Ambient hero background: a request travelling through a typical full-stack
// app (client, API, cache, database) and the response coming back. It is
// decorative, so it is hidden from assistive tech. With reduced motion
// enabled it shows a still frame.
function RequestFlow() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(4);
      return;
    }
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), 1400);
    return () => clearInterval(id);
  }, []);

  const { at, edge } = STEPS[step];
  const packet = NODES[at];

  return (
    <figure className="flow-bg" aria-hidden="true">
      <svg viewBox="0 0 440 340" focusable="false">
        {/* Connections */}
        {EDGES.map(([from, to], i) => (
          <line
            key={`${from}-${to}`}
            className={`edge ${edge === i ? "on" : ""}`}
            x1={NODES[from].x}
            y1={NODES[from].y}
            x2={NODES[to].x}
            y2={NODES[to].y}
          />
        ))}

        {/* Layers */}
        {Object.entries(NODES).map(([id, n]) => (
          <g key={id} className={`node ${at === id ? "on" : ""}`}>
            <rect
              x={n.x - NODE_W / 2}
              y={n.y - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              rx="8"
            />
            <text className="node-title" x={n.x} y={n.y - 4} textAnchor="middle">
              {n.title}
            </text>
            <text className="node-tech" x={n.x} y={n.y + 16} textAnchor="middle">
              {n.tech}
            </text>
          </g>
        ))}

        {/* The request */}
        <g className="packet" style={{ transform: `translate(${packet.x}px, ${packet.y - NODE_H / 2 - 14}px)` }}>
          <circle className="packet-halo" r="14" />
          <circle className="packet-dot" r="6" />
        </g>
      </svg>
    </figure>
  );
}

// Status decides the pill's look: finished work is solid indigo, work in
// progress is yellow, learning builds are outlined.
function statusTone(status) {
  const s = status.toLowerCase();
  if (s.includes("completed")) return "done";
  if (s.includes("development") || s.includes("ongoing")) return "live";
  return "plain";
}

function Project({ project }) {
  const hasRepo = project.gitHubRepo && project.gitHubRepo.startsWith("http");
  return (
    <article className="proj">
      <div>
        <h4>{project.name}</h4>
        <p className={`proj-status ${statusTone(project.status)}`}>{project.status}</p>
      </div>
      <div>
        {project.desc && <p className="proj-desc">{project.desc}</p>}
        <ul className="chips" aria-label="Built with">
          {project.stack.split(", ").map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {hasRepo && (
          <p className="proj-links">
            <a className="u" href={project.gitHubRepo}>GitHub Repo</a>
          </p>
        )}
      </div>
    </article>
  );
}

const RESUME_URL = "/Hadisa_Resume.pdf";

export default function Portfolio() {
  return (
    <div className="pf">
      <header className="bar dark">
        <div className="wrap">
          <a className="brand" href="#top">Hadisa<span className="brand-dot">.</span></a>
          <nav aria-label="Main">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>{n.label}</a>
            ))}
          </nav>
          <a className="btn-outline" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero dark">
          <div className="wrap">
            <div>
              <h1>I build the backend, the APIs they use, and the frontend they run for.</h1>
              <p>I'm Hadisa, a full-stack developer working in React, TailwindCSS and ASP.NET Core.</p>
              <p>
                Right now I'm building a <b>multi-player Fleet battle game</b>, a turn-based military theme game.
              </p>
              <div className="cta">
                <a className="btn-solid" href="#work">See projects</a>
                <a className="u" href="#contact">Email me</a>
              </div>
            </div>
            <RequestFlow />
          </div>
        </section>

        <section className="sec" id="work">
          <div className="wrap">
            <div>
              <h2>Projects</h2>
              <p className="sec-note">Real-world work first, then projects I build to learn.</p>
            </div>
            <div>
              <div className="group">
                <h3 className="group-title">Current work</h3>
                {PROJECTS_CURRENT.map((p) => (
                  <Project project={p} key={p.name} />
                ))}
              </div>
              <div className="group">
                <h3 className="group-title">Practice builds</h3>
                {PROJECTS_PRACTICE.map((p) => (
                  <Project project={p} key={p.name} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sec alt" id="about">
          <div className="wrap">
            <div>
              <h2>About</h2>
            </div>
            <div className="about">
              {ABOUT.map((p) => (
                <p key={p.text} className={p.lead ? "lead" : undefined}>
                  {p.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="stack">
          <div className="wrap">
            <div>
              <h2>Stack</h2>
              <p className="sec-note">Grouped by where it sits in the stack, not rated out of 10.</p>
            </div>
            <div className="layers">
              {STACK.map((layer) => (
                <div key={layer.label}>
                  <h3>{layer.label}</h3>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="contact dark" id="contact">
        <div className="wrap">
          <div className="grid">
            <div>
              <h2>Open to full-stack, frontend and backend work.</h2>
              <p className="lede">
                Freelance or full-time. If it involves a real production system rather than a mockup, I'm interested.
              </p>
            </div>
            <ul className="contact-list">
              {CONTACT.map((c) => (
                <li key={c.label}>
                  <span className="k">{c.label}</span>
                  <a href={c.href}>{c.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot">
            <span>© 2026 Hadisa</span>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}