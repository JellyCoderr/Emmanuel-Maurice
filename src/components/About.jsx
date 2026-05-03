import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const TIMELINE = [
  { y: "2025", w: "AI architect", at: "Independent" },
  { y: "2024", w: "Web Developer", at: "Emrickscents" },
  { y: "2023", w: "front-end lead", at: "Altschool" },
  { y: "2021", w: "Student", at: "Globaltech" },
  { y: "2020", w: "First commit", at: "—" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(80px, 12vw, 160px) 24px",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel num="03">About</SectionLabel>
      </Reveal>

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* Portrait */}
        <Reveal delay={100}>
          <div
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              width: "100%",
              background:
                "linear-gradient(160deg, oklch(0.86 0.04 70), oklch(0.78 0.06 60))",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(20,19,15,0.06) 0 1px, transparent 1px 14px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 16,
                top: 16,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--ink)",
              }}
            >
              <img src="/public/images/Emmanuel.jpeg" alt="" />
            </div>
            <div
              style={{
                position: "absolute",
                right: 16,
                bottom: 16,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
                color: "var(--ink-soft)",
              }}
            >
              EM / 2026
            </div>
          </div>
        </Reveal>

        {/* Bio + timeline */}
        <div>
          <Reveal delay={140}>
            <p
              style={{
                margin: "0 0 32px",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(22px, 2.5vw, 30px)",
                lineHeight: 1.4,
                letterSpacing: "-0.015em",
                color: "var(--ink)",
              }}
            >
              A character floating on the{" "}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--accent-1)",
                }}
              >
                wings of life,
              </span>
              <br />
              transitioning from reading scripts to writing syntax, and surfing
              the world of AI to learn how it makes work easier and faster.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p
              style={{
                margin: "0 0 48px",
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--ink-soft)",
                maxWidth: 620,
              }}
            >
              I ship scalable products at the place where creativity meets logic
              building front-ends with React and Next, and architecting AI
              systems that turn ideas into working software.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div style={{ borderTop: "1px solid var(--line-strong)" }}>
              {TIMELINE.map((t) => (
                <div
                  key={t.y + t.w}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 0",
                    borderBottom: "1px solid var(--line)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: "0.04em",
                  }}
                >
                  <span style={{ color: "var(--ink-mute)" }}>{t.y}</span>
                  <span
                    style={{
                      color: "var(--ink)",
                      fontFamily: "var(--font-sans)",
                      fontSize: 16,
                      letterSpacing: 0,
                    }}
                  >
                    {t.w}
                  </span>
                  <span style={{ color: "var(--ink-soft)" }}>{t.at}</span>
                </div>
              ))}
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
    </section>
  );
}
