/* Section components for the portfolio */

const PROJECTS = [
{
  n: "01",
  title: "CalPad",
  sub: "A calculator that remembers",
  year: "2025",
  role: "Design + Engineering",
  blurb: "A Next.js PWA calculator that saves every calculation with notes and full edit history. Built for people who think in numbers and need to come back to them.",
  tags: ["Next.js", "PWA", "TypeScript"],
  art: "stack"
},
{
  n: "02",
  title: "Project Two",
  sub: "Coming soon",
  year: "2025",
  role: "—",
  blurb: "Placeholder — swap in your second case study.",
  tags: ["—"],
  art: "orbit"
},
{
  n: "03",
  title: "Project Three",
  sub: "Coming soon",
  year: "2025",
  role: "—",
  blurb: "Placeholder — swap in your third case study.",
  tags: ["—"],
  art: "wave"
}];


/* ---------- NAV ---------- */

function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? "14px 24px" : "22px 24px",
      transition: "padding 0.3s ease, backdrop-filter 0.3s ease",
      backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      background: scrolled ? "color-mix(in oklab, var(--bg) 75%, transparent)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent"
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 24
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            width: 28, height: 28, borderRadius: 8,
            background: "var(--ink)", color: "var(--bg)",
            display: "grid", placeItems: "center",
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: 18, lineHeight: 1
          }}>e</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em" }}>
            EMMANUEL MAURICE
          </span>
        </a>

        <div className="nav-links" style={{
          display: "flex", gap: 28,
          fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em",
          textTransform: "uppercase"
        }}>
          <a href="#work" style={navLink}>Work</a>
          <a href="#skills" style={navLink}>Skills</a>
          <a href="#about" style={navLink}>About</a>
          <a href="#contact" style={navLink}>Contact</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="nav-status" style={{
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em",
            color: "var(--ink-soft)"
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "oklch(0.72 0.18 145)",
              boxShadow: "0 0 0 4px oklch(0.72 0.18 145 / 0.18)",
              animation: "pulse 2.4s ease-in-out infinite"
            }} />
            Available
          </span>
          <button onClick={onToggleTheme} aria-label="Toggle theme" style={{
            width: 34, height: 34, borderRadius: "50%",
            border: "1px solid var(--line-strong)",
            display: "grid", placeItems: "center",
            transition: "transform 0.3s ease, background 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-elev)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
            
            {theme === "dark" ?
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" /></svg> :

            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            }
          </button>
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.55} }
        @media (max-width: 720px) {
          .nav-links { display: none !important; }
          .nav-status { display: none !important; }
        }
      `}</style>
    </nav>);

}
const navLink = {
  position: "relative",
  color: "var(--ink-soft)",
  transition: "color 0.2s ease"
};

/* ---------- HERO ---------- */

function Hero() {
  const wrapRef = useRef(null);
  const [time, setTime] = useState(() => fmtTime());
  useEffect(() => {
    const id = setInterval(() => setTime(fmtTime()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const arrow =
  <svg width="0.7em" height="0.7em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ display: "inline-block", verticalAlign: "0.05em" }}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>;


  return (
    <header id="top" ref={wrapRef} style={{
      position: "relative",
      minHeight: "100svh",
      padding: "120px 24px 80px",
      maxWidth: 1280, margin: "0 auto",
      display: "flex", flexDirection: "column", justifyContent: "space-between"
    }}>
      {/* top meta strip */}
      <Reveal>
        <div className="hero-meta" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: 16, paddingBottom: 32,
          borderBottom: "1px solid var(--line)",
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: "var(--ink-soft)"
        }}>
          <div>
            <div style={{ color: "var(--ink-mute)", marginBottom: 4 }}>
</div>
            <div style={{ color: "var(--ink)" }}>
</div>
          </div>
          <div>
            <div style={{ color: "var(--ink-mute)", marginBottom: 4 }}>Local time</div>
            <div style={{ color: "var(--ink)" }}>{time}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "var(--ink-mute)", marginBottom: 4 }}>
</div>
            <div style={{ color: "var(--ink)" }}>'26 / Edition 04</div>
          </div>
        </div>
      </Reveal>

      {/* main type */}
      <div style={{ padding: "clamp(48px, 10vw, 120px) 0 clamp(40px, 8vw, 80px)" }}>
        <Reveal delay={120}>
          <h1 className="hero-title" style={{ fontFamily: "var(--font-sans)", fontWeight: 400,
            fontSize: "clamp(56px, 11vw, 168px)",
            lineHeight: 0.94,
            letterSpacing: "-0.045em",
            margin: 0,
            color: "var(--ink)"
          }}>
            <span style={{ display: "block" }}>Front-end</span>
            <span style={{ display: "block" }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400, color: "rgb(0, 164, 255)"

              }}>designer</span>
              <span style={{ color: "var(--ink-soft)" }}>,</span>
            </span>
            <span style={{ display: "block" }}>
              AI <span style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400
              }}>architect.</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={280}>
          <p className="hero-sub" style={{
            marginTop: "clamp(28px, 4vw, 48px)",
            maxWidth: 560,
            fontSize: "clamp(15px, 1.4vw, 18px)",
            lineHeight: 1.55,
            color: "var(--ink-soft)",
            fontWeight: 400
          }}>
            I'm <span style={{ color: "var(--ink)" }}>Emmanuel Maurice</span> — I design and build quiet, considered interfaces, and architect the AI systems that live behind them.
          </p>
        </Reveal>
      </div>

      {/* bottom row: cta + scroll cue */}
      <Reveal delay={420}>
        <div className="hero-foot" style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: 24, paddingTop: 32,
          borderTop: "1px solid var(--line)"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="#work" className="cta-primary" style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              padding: "16px 28px",
              background: "var(--ink)", color: "var(--bg)",
              borderRadius: 999,
              fontFamily: "var(--font-mono)", fontSize: 12,
              letterSpacing: "0.08em", textTransform: "uppercase",
              transition: "transform 0.3s ease, background 0.3s ease",
              alignSelf: "flex-start"
            }}>
              View selected work {arrow}
            </a>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "var(--ink-mute)"
            }}>
              or <a href="#contact" style={{ color: "var(--ink-soft)", textDecoration: "underline", textDecorationThickness: 1, textUnderlineOffset: 4 }}>get in touch</a>
            </div>
          </div>

          <div className="hero-scroll" style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            letterSpacing: "0.06em", textTransform: "uppercase",
            color: "var(--ink-mute)",
            display: "flex", alignItems: "center", gap: 10
          }}>
            Scroll
            <span style={{
              width: 1, height: 36, background: "var(--line-strong)",
              position: "relative", overflow: "hidden"
            }}>
              <span style={{
                position: "absolute", left: 0, right: 0, top: 0, height: "40%",
                background: "var(--accent-1)",
                animation: "scrollHint 2s ease-in-out infinite"
              }} />
            </span>
          </div>
        </div>
      </Reveal>

      <style>{`
        @keyframes scrollHint {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(250%); }
        }
        .cta-primary:hover { transform: translateY(-2px); background: var(--accent-2) !important; }
        @media (max-width: 720px) {
          .hero-meta { grid-template-columns: 1fr 1fr !important; }
          .hero-meta > div:nth-child(3) { display: none; }
          .hero-foot { flex-direction: column; align-items: flex-start; }
          .hero-scroll { display: none !important; }
        }
      `}</style>
    </header>);

}

function fmtTime() {
  const d = new Date();
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Lagos" }) + " WAT";
}

/* ---------- WORK ---------- */

function Work({ layout = "list" }) {
  return (
    <section id="work" style={{ padding: "clamp(80px, 12vw, 160px) 24px", maxWidth: 1280, margin: "0 auto" }}>
      <Reveal>
        <SectionLabel num="01">Selected work</SectionLabel>
      </Reveal>
      <Reveal delay={120}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          gap: 24, marginBottom: 64, flexWrap: "wrap"
        }}>
          <h2 style={{
            margin: 0,
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 1, letterSpacing: "-0.035em",
            maxWidth: 800
          }}>
            Three projects that
            <br />
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgb(0, 164, 255)" }}>shipped</span> & taught me something.
          </h2>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--ink-mute)"
          }}>
            ({String(PROJECTS.length).padStart(2, "0")}) Case studies
          </div>
        </div>
      </Reveal>

      {layout === "list" && <ProjectList />}
      {layout === "grid" && <ProjectGrid />}
      {layout === "index" && <ProjectIndex />}
    </section>);

}

function ProjectList() {
  return (
    <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--line-strong)" }}>
      {PROJECTS.map((p, i) => <ProjectRow key={p.n} p={p} i={i} />)}
    </div>);

}

function ProjectRow({ p, i }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  return (
    <Reveal delay={i * 80}>
      <a
        ref={ref}
        href="#"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="project-row"
        style={{
          display: "grid",
          gridTemplateColumns: "60px 1.6fr 1fr 80px",
          gap: 24,
          alignItems: "center",
          padding: "32px 0",
          borderBottom: "1px solid var(--line-strong)",
          position: "relative",
          cursor: "pointer",
          transition: "padding 0.4s ease"
        }}>
        
        {/* number */}
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 12,
          letterSpacing: "0.06em", color: "var(--ink-mute)"
        }}>{p.n}</span>

        {/* title + sub */}
        <div>
          <h3 className="project-title" style={{
            margin: 0,
            fontFamily: "var(--font-sans)", fontWeight: 400,
            fontSize: "clamp(32px, 4.5vw, 56px)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            color: "var(--ink)",
            transition: "transform 0.5s cubic-bezier(.2,.7,.2,1)",
            transform: hover ? "translateX(8px)" : "translateX(0)",
            display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap"
          }}>
            {p.title}
            <span style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              fontSize: "0.55em", color: "var(--ink-soft)",
              fontWeight: 400
            }}>— {p.sub}</span>
          </h3>
        </div>

        {/* tags (desktop) */}
        <div className="project-tags" style={{
          display: "flex", gap: 8, flexWrap: "wrap",
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.04em", color: "var(--ink-soft)"
        }}>
          {p.tags.slice(0, 3).map((t) =>
          <span key={t} style={{
            padding: "4px 10px",
            border: "1px solid var(--line-strong)",
            borderRadius: 999
          }}>{t}</span>
          )}
        </div>

        {/* year + arrow */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12,
          fontFamily: "var(--font-mono)", fontSize: 12,
          color: "var(--ink-soft)"
        }}>
          <span>{p.year}</span>
          <span style={{
            width: 28, height: 28, borderRadius: "50%",
            border: "1px solid var(--line-strong)",
            display: "grid", placeItems: "center",
            background: hover ? "var(--accent-1)" : "transparent",
            color: hover ? "var(--ink)" : "var(--ink-soft)",
            transition: "all 0.4s cubic-bezier(.2,.7,.2,1)",
            transform: hover ? "rotate(-45deg)" : "rotate(0)"
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </span>
        </div>

      </a>
      <style>{`
        .project-row:hover .project-title { color: var(--ink); }
        @media (max-width: 820px) {
          .project-row { grid-template-columns: 32px 1fr 60px !important; }
          .project-tags { display: none !important; }
        }
      `}</style>
    </Reveal>);

}

function ProjectGrid() {
  return (
    <div className="project-grid" style={{
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 16
    }}>
      {PROJECTS.map((p, i) => {
        const span = i === 0 ? { col: "span 4", aspect: "4 / 3" } :
        i === 1 ? { col: "span 2", aspect: "3 / 4" } :
        { col: "span 6", aspect: "16 / 9" };
        return (
          <Reveal key={p.n} delay={i * 100} style={{ gridColumn: span.col }}>
            <ProjectCard p={p} aspect={span.aspect} />
          </Reveal>);

      })}
      <style>{`@media (max-width: 820px) { .project-grid > * { grid-column: span 6 !important; } }`}</style>
    </div>);

}

function ProjectCard({ p, aspect }) {
  const [hover, setHover] = useState(false);
  return (
    <a href="#" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    style={{ display: "block" }}>
      <div style={{
        position: "relative",
        aspectRatio: aspect, width: "100%",
        overflow: "hidden", borderRadius: 8,
        transition: "transform 0.6s cubic-bezier(.2,.7,.2,1)",
        transform: hover ? "scale(0.985)" : "scale(1)"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          transition: "transform 1.2s cubic-bezier(.2,.7,.2,1)",
          transform: hover ? "scale(1.06)" : "scale(1)"
        }}>
          <ProjectArt variant={p.art} />
        </div>
        <div style={{
          position: "absolute", left: 16, top: 16,
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: "var(--bg)", mixBlendMode: "difference"
        }}>{p.n} / {p.year}</div>
      </div>
      <div style={{ padding: "16px 4px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
        <h3 style={{
          margin: 0, fontFamily: "var(--font-sans)", fontWeight: 400,
          fontSize: 22, letterSpacing: "-0.02em"
        }}>{p.title} <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ink-soft)", fontWeight: 400 }}>— {p.sub}</span></h3>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.04em" }}>{p.role}</span>
      </div>
    </a>);

}

function ProjectIndex() {
  const [active, setActive] = useState(null);
  return (
    <div style={{ position: "relative" }}>
      {PROJECTS.map((p, i) =>
      <Reveal key={p.n} delay={i * 60}>
          <a href="#" onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
        style={{
          display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 24, alignItems: "center",
          padding: "28px 0", borderBottom: "1px solid var(--line)"
        }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)" }}>{p.n}</span>
            <h3 style={{
            margin: 0, fontFamily: "var(--font-sans)", fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.025em",
            color: active === i ? "var(--accent-1)" : "var(--ink)",
            transition: "color 0.3s ease"
          }}>{p.title}</h3>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-soft)" }}>{p.year}</span>
          </a>
        </Reveal>
      )}
    </div>);

}

/* ---------- SKILLS ---------- */

const SKILL_GROUPS = [
{ label: "Front-end", items: ["React", "TypeScript", "Tailwind", "Next.js"] },
{ label: "AI", items: ["Agent architecture", "AI-assisted development", "Generative AI"] },
{ label: "Design", items: ["Figma", "Photoshop", "Canva"] }];


function Skills() {
  return (
    <section id="skills" style={{ padding: "clamp(80px, 12vw, 160px) 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <Reveal><SectionLabel num="02">Capabilities</SectionLabel></Reveal>
        <Reveal delay={100}>
          <h2 style={{
            margin: "0 0 64px", maxWidth: 900,
            fontFamily: "var(--font-sans)", fontWeight: 400,
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 1.05, letterSpacing: "-0.03em"
          }}>
            I work across the seam where{" "}
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-1)" }}>interfaces</span>
            {" "}meet{" "}
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgb(0, 164, 255)" }}>intelligence.</span>
          </h2>
        </Reveal>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="skill-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 48
        }}>
          {SKILL_GROUPS.map((g, gi) =>
          <Reveal key={g.label} delay={gi * 100}>
              <div style={{ borderTop: "1px solid var(--line-strong)", paddingTop: 20 }}>
                <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                marginBottom: 16
              }}>
                  <h3 style={{
                  margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500,
                  fontSize: 14, letterSpacing: "0.02em"
                }}>{g.label}</h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)" }}>
                    0{gi + 1}
                  </span>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {g.items.map((s) =>
                <li key={s} style={{
                  fontFamily: "var(--font-sans)", fontSize: 15,
                  color: "var(--ink-soft)",
                  display: "flex", alignItems: "center", gap: 10
                }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent-1)" }} />
                      {s}
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
        <style>{`
          @media (max-width: 820px) { .skill-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </div>
    </section>);

}

/* ---------- ABOUT ---------- */

const TIMELINE = [
{ y: "2025", w: "AI architect", at: "Independent" },
{ y: "2023", w: "Senior front-end", at: "Vault Labs" },
{ y: "2021", w: "Product designer", at: "Northrun" },
{ y: "2019", w: "First commit", at: "—" }];


function About() {
  return (
    <section id="about" style={{ padding: "clamp(80px, 12vw, 160px) 24px", maxWidth: 1280, margin: "0 auto" }}>
      <Reveal><SectionLabel num="03">About</SectionLabel></Reveal>

      <div className="about-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: 64,
        alignItems: "start"
      }}>
        <Reveal delay={100}>
          <div style={{
            position: "sticky", top: 100,
            aspectRatio: "4 / 5", width: "100%",
            background: "linear-gradient(160deg, oklch(0.86 0.04 70), oklch(0.78 0.06 60))",
            borderRadius: 8,
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "repeating-linear-gradient(45deg, rgba(20,19,15,0.06) 0 1px, transparent 1px 14px)"
            }} />
            <div style={{
              position: "absolute", left: 16, top: 16,
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "var(--ink)"
            }}>Portrait — drop yours here</div>
            <div style={{
              position: "absolute", right: 16, bottom: 16,
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.06em",
              color: "var(--ink-soft)"
            }}>EM / 2026</div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={140}>
            <p style={{
              margin: "0 0 32px",
              fontFamily: "var(--font-sans)", fontWeight: 400,
              fontSize: "clamp(22px, 2.5vw, 30px)",
              lineHeight: 1.4, letterSpacing: "-0.015em",
              color: "var(--ink)",
              textWrap: "pretty"
            }}>
              A character floating on the <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-1)" }}>wings of life,</span><br />transitioning from reading scripts to writing syntax, and surfing the world of AI to learn how it makes work easier and faster.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p style={{
              margin: "0 0 48px",
              fontSize: 16, lineHeight: 1.6,
              color: "var(--ink-soft)",
              maxWidth: 620
            }}>
              I ship scalable products at the place where creativity meets logic — building front-ends with React and Next, and architecting AI systems that turn ideas into working software.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="timeline" style={{ borderTop: "1px solid var(--line-strong)" }}>
              {TIMELINE.map((t) =>
              <div key={t.y + t.w} style={{
                display: "grid", gridTemplateColumns: "80px 1fr auto",
                alignItems: "center", gap: 16,
                padding: "16px 0",
                borderBottom: "1px solid var(--line)",
                fontFamily: "var(--font-mono)", fontSize: 12,
                letterSpacing: "0.04em"
              }}>
                  <span style={{ color: "var(--ink-mute)" }}>{t.y}</span>
                  <span style={{ color: "var(--ink)", fontFamily: "var(--font-sans)", fontSize: 16, letterSpacing: 0 }}>{t.w}</span>
                  <span style={{ color: "var(--ink-soft)" }}>{t.at}</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .about-grid > div:first-child { position: relative !important; top: auto !important; }
        }
      `}</style>
    </section>);

}

/* ---------- CONTACT ---------- */

const SOCIALS = [
{ label: "Email", value: "hello@emmanuelmaurice.dev", href: "mailto:hello@emmanuelmaurice.dev" },
{ label: "GitHub", value: "github.com/emmanuelmaurice", href: "https://github.com" },
{ label: "LinkedIn", value: "linkedin.com/in/emmanuelmaurice", href: "https://linkedin.com" },
{ label: "X / Twitter", value: "x.com/emmanuelmaurice", href: "https://x.com" }];


function Contact() {
  const wrapRef = useRef(null);
  const mouse = useMousePosition(wrapRef);
  const [year] = useState(() => new Date().getFullYear());

  return (
    <section id="contact" ref={wrapRef} style={{
      position: "relative",
      padding: "clamp(100px, 14vw, 200px) 24px clamp(40px, 6vw, 64px)",
      maxWidth: 1280, margin: "0 auto"
    }}>
      <Reveal><SectionLabel num="04">Contact</SectionLabel></Reveal>

      <Reveal delay={120}>
        <a href="mailto:hello@emmanuelmaurice.dev" className="big-cta" style={{
          display: "block",
          fontFamily: "var(--font-sans)", fontWeight: 400,
          fontSize: "clamp(56px, 12vw, 200px)",
          lineHeight: 0.94, letterSpacing: "-0.045em",
          color: "var(--ink)",
          margin: "0 0 64px",
          position: "relative"
        }}>
          <span style={{ display: "block" }}>Let's make</span>
          <span style={{ display: "block" }}>
            something{" "}
            <span style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              color: "var(--accent-1)"
            }}>good.</span>
          </span>

          {/* magnetic dot */}
          <span style={{
            position: "absolute",
            left: Math.max(0, Math.min(mouse.x - 60, (wrapRef.current?.clientWidth || 800) - 120)),
            top: Math.max(0, Math.min(mouse.y - 60, 240)),
            width: 120, height: 120, borderRadius: "50%",
            background: "var(--accent-2)", color: "var(--bg)",
            display: mouse.inside ? "grid" : "none",
            placeItems: "center",
            fontFamily: "var(--font-mono)", fontSize: 11,
            letterSpacing: "0.08em", textTransform: "uppercase",
            pointerEvents: "none",
            transform: "translate3d(0,0,0)",
            transition: "background 0.3s ease",
            mixBlendMode: "normal"
          }}>
            <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              Say hi
            </span>
          </span>
        </a>
      </Reveal>

      {/* contact grid */}
      <div className="contact-grid" style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: 48,
        paddingTop: 48,
        borderTop: "1px solid var(--line-strong)"
      }}>
        <Reveal delay={200}>
          <div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--ink-mute)", marginBottom: 20
            }}>Currently</div>
            <p style={{
              margin: 0, fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.5, color: "var(--ink)", maxWidth: 520
            }}>
              Booking late-summer 2026. Best fit: AI products with editorial sensibility, design systems for series-A teams, or a focused 4–8 week sprint.
            </p>

            <div style={{ marginTop: 40 }}>
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--ink-mute)", marginBottom: 20
            }}>Elsewhere</div>
            {SOCIALS.map((s) =>
            <a key={s.label} href={s.href} className="social-row" style={{
              display: "grid", gridTemplateColumns: "100px 1fr auto",
              alignItems: "center", gap: 16,
              padding: "18px 0",
              borderBottom: "1px solid var(--line)",
              fontFamily: "var(--font-mono)", fontSize: 13,
              color: "var(--ink-soft)",
              transition: "color 0.2s ease, padding 0.4s ease"
            }}>
                <span style={{ color: "var(--ink-mute)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</span>
                <span style={{ color: "var(--ink)" }}>{s.value}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            )}
          </div>
        </Reveal>
      </div>

      {/* footer */}
      <Reveal delay={400}>
        <div className="footer" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 16, marginTop: 80, paddingTop: 32,
          borderTop: "1px solid var(--line)",
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: "var(--ink-mute)"
        }}>
          <span>© {year} Emmanuel Maurice</span>
          <span>
</span>
        </div>
      </Reveal>

      <style>{`
        .social-row:hover { color: var(--ink) !important; padding-left: 12px !important; }
        .social-row:hover span { color: var(--accent-1) !important; }
        @media (max-width: 820px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer { flex-direction: column; align-items: flex-start; gap: 8px !important; }
        }
      `}</style>
    </section>);
}

function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!state.email || !state.msg) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setState({ name: "", email: "", msg: "" });
  };

  const fieldStyle = (key) => ({
    width: "100%", padding: "14px 0",
    border: "0", borderBottom: "1px solid " + (focus === key ? "var(--accent-1)" : "var(--line-strong)"),
    background: "transparent", color: "var(--ink)",
    fontFamily: "var(--font-sans)", fontSize: 15,
    outline: "none",
    transition: "border-color 0.3s ease"
  });

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <input
        placeholder="Your name"
        value={state.name}
        onFocus={() => setFocus("name")} onBlur={() => setFocus(null)}
        onChange={(e) => setState({ ...state, name: e.target.value })}
        style={fieldStyle("name")} />
      
      <input
        placeholder="Email *"
        type="email"
        value={state.email}
        onFocus={() => setFocus("email")} onBlur={() => setFocus(null)}
        onChange={(e) => setState({ ...state, email: e.target.value })}
        style={fieldStyle("email")} />
      
      <textarea
        placeholder="Tell me about the project *"
        rows={3}
        value={state.msg}
        onFocus={() => setFocus("msg")} onBlur={() => setFocus(null)}
        onChange={(e) => setState({ ...state, msg: e.target.value })}
        style={{ ...fieldStyle("msg"), resize: "none", paddingTop: 14 }} />
      
      <button type="submit" style={{
        marginTop: 16, alignSelf: "flex-start",
        padding: "14px 24px", borderRadius: 999,
        background: sent ? "oklch(0.72 0.18 145)" : "var(--ink)",
        color: "var(--bg)",
        fontFamily: "var(--font-mono)", fontSize: 12,
        letterSpacing: "0.08em", textTransform: "uppercase",
        transition: "background 0.3s ease, transform 0.3s ease",
        display: "inline-flex", alignItems: "center", gap: 12
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
        
        {sent ? "Sent ✓" : "Send message"}
        {!sent && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>}
      </button>
    </form>);

}

Object.assign(window, { Nav, Hero, Work, Skills, About, Contact });