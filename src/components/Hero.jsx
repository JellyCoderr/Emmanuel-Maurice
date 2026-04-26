import { useEffect, useState } from "react";
import Reveal from "./Reveal";

function fmtTime() {
  return (
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Lagos",
    }) + " WAT"
  );
}

const Arrow = () => (
  <svg
    width="0.7em"
    height="0.7em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    style={{ display: "inline-block", verticalAlign: "0.05em" }}
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Hero() {
  const [time, setTime] = useState(() => fmtTime());

  useEffect(() => {
    const id = setInterval(() => setTime(fmtTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        padding: "120px 24px 80px",
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top meta strip */}
      <Reveal>
        <div
          className="hero-meta"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            paddingBottom: 32,
            borderBottom: "1px solid var(--line)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--ink-soft)",
          }}
        >
          <div>
            <div style={{ color: "var(--ink-mute)", marginBottom: 4 }}>
              Local time
            </div>
            <div style={{ color: "var(--ink)" }}>{time}</div>
          </div>
        </div>
      </Reveal>

      {/* Main type */}
      <div
        style={{ padding: "clamp(48px, 10vw, 120px) 0 clamp(40px, 8vw, 80px)" }}
      >
        <Reveal delay={120}>
          <h1
            className="hero-title"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(56px, 11vw, 168px)",
              lineHeight: 0.94,
              letterSpacing: "-0.045em",
              margin: 0,
              color: "var(--ink)",
            }}
          >
            <span style={{ display: "block" }}>Front-end</span>
            <span style={{ display: "block" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "rgb(0, 164, 255)",
                }}
              >
                designer
              </span>
              <span style={{ color: "var(--ink-soft)" }}>,</span>
            </span>
            <span style={{ display: "block" }}>
              AI{" "}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                architect.
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={280}>
          <p
            className="hero-sub"
            style={{
              marginTop: "clamp(28px, 4vw, 48px)",
              maxWidth: 560,
              fontSize: "clamp(15px, 1.4vw, 18px)",
              lineHeight: 1.55,
              color: "var(--ink-soft)",
              fontWeight: 400,
            }}
          >
            I'm{" "}
            <span
              style={{
                color: "var(--ink)",
                fontWeight: 400,
                textDecoration: "underline",
              }}
            >
              Emmanuel Maurice
            </span>{" "}
            <br />
            I design and build quiet, considered products, and architect the AI
            systems that live behind them.
            <br /> I don't just build what you spec, I think through what you
            actually need
          </p>
        </Reveal>
      </div>

      {/* Bottom row: CTA + scroll cue */}
      <Reveal delay={420}>
        <div
          className="hero-foot"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            paddingTop: 32,
            borderTop: "1px solid var(--line)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="#work"
              className="cta-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 28px",
                background: "var(--ink)",
                color: "var(--bg)",
                borderRadius: 999,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "transform 0.3s ease, background 0.3s ease",
                alignSelf: "flex-start",
              }}
            >
              View selected work <Arrow />
            </a>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
              }}
            >
              or{" "}
              <a
                href="#contact"
                style={{
                  color: "var(--ink-soft)",
                  textDecoration: "underline",
                  textDecorationThickness: 1,
                  textUnderlineOffset: 4,
                }}
              >
                get in touch
              </a>
            </div>
          </div>

          <div
            className="hero-scroll"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Scroll
            <span
              style={{
                width: 1,
                height: 36,
                background: "var(--line-strong)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  height: "40%",
                  background: "var(--accent-1)",
                  animation: "scrollHint 2s ease-in-out infinite",
                }}
              />
            </span>
          </div>
        </div>
      </Reveal>

      <style>{`
        .cta-primary:hover { transform: translateY(-2px); background: var(--accent-2) !important; }
        @media (max-width: 720px) {
          .hero-meta { grid-template-columns: 1fr 1fr !important; }
          .hero-meta > div:nth-child(3) { display: none; }
          .hero-foot { flex-direction: column; align-items: flex-start; }
          .hero-scroll { display: none !important; }
        }
      `}</style>
    </header>
  );
}
