import { useRef, useState, useEffect } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const SOCIALS = [
  {
    label: "Email",
    value: "emmanuel.agbom.dev@outlook.com",
    href: "mailto:emmanuel.agbom.dev@outlook.com",
  },
  {
    label: "GitHub",
    value: "github.com/emmanuelmaurice",
    href: "https://github.com/JellyCoderr",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emmanuelmaurice",
    href: "https://linkedin.com/in/emmanuelmaurice",
  },
  {
    label: "X / Twitter",
    value: "x.com/emmanuelmaurice",
    href: "https://x.com/emmanuelmaurice",
  },
];

function useMousePosition(targetRef) {
  const [pos, setPos] = useState({ x: 0, y: 0, inside: false });
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top, inside: true });
    };
    const leave = () => setPos((p) => ({ ...p, inside: false }));
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [targetRef]);
  return pos;
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
    width: "100%",
    padding: "14px 0",
    border: 0,
    borderBottom:
      "1px solid " + (focus === key ? "var(--accent-1)" : "var(--line-strong)"),
    background: "transparent",
    color: "var(--ink)",
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.3s ease",
  });

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      <input
        placeholder="Your name"
        value={state.name}
        onFocus={() => setFocus("name")}
        onBlur={() => setFocus(null)}
        onChange={(e) => setState({ ...state, name: e.target.value })}
        style={fieldStyle("name")}
        autoComplete="name"
      />
      <input
        placeholder="Email *"
        type="email"
        value={state.email}
        required
        onFocus={() => setFocus("email")}
        onBlur={() => setFocus(null)}
        onChange={(e) => setState({ ...state, email: e.target.value })}
        style={fieldStyle("email")}
        autoComplete="email"
      />
      <textarea
        placeholder="Tell me about the project *"
        rows={3}
        value={state.msg}
        required
        onFocus={() => setFocus("msg")}
        onBlur={() => setFocus(null)}
        onChange={(e) => setState({ ...state, msg: e.target.value })}
        style={{ ...fieldStyle("msg"), resize: "none", paddingTop: 14 }}
      />
      <button
        type="submit"
        style={{
          marginTop: 16,
          alignSelf: "flex-start",
          padding: "14px 24px",
          borderRadius: 999,
          background: sent ? "oklch(0.72 0.18 145)" : "var(--ink)",
          color: "var(--bg)",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          transition: "background 0.3s ease, transform 0.3s ease",
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-2px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        {sent ? "Sent ✓" : "Send message"}
        {!sent && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  const wrapRef = useRef(null);
  const mouse = useMousePosition(wrapRef);
  const [year] = useState(() => new Date().getFullYear());

  return (
    <section
      id="contact"
      ref={wrapRef}
      style={{
        position: "relative",
        padding: "clamp(100px, 14vw, 200px) 24px clamp(40px, 6vw, 64px)",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel num="04">Contact</SectionLabel>
      </Reveal>

      <Reveal delay={120}>
        <a
          href="mailto:emmanuel.agbom.dev@outlook.com"
          className="big-cta"
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(56px, 12vw, 200px)",
            lineHeight: 0.94,
            letterSpacing: "-0.045em",
            color: "var(--ink)",
            margin: "0 0 64px",
            position: "relative",
          }}
        >
          <span style={{ display: "block" }}>Let's make</span>
          <span style={{ display: "block" }}>
            something{" "}
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                color: "var(--accent-1)",
              }}
            >
              good.
            </span>
          </span>

          {/* Magnetic dot */}
          <span
            style={{
              position: "absolute",
              left: Math.max(
                0,
                Math.min(
                  mouse.x - 60,
                  (wrapRef.current?.clientWidth || 800) - 120,
                ),
              ),
              top: Math.max(0, Math.min(mouse.y - 60, 240)),
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "var(--accent-2)",
              color: "var(--bg)",
              display: mouse.inside ? "grid" : "none",
              placeItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              pointerEvents: "none",
              transform: "translate3d(0,0,0)",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
              Say hi
            </span>
          </span>
        </a>
      </Reveal>

      {/* Contact grid */}
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 48,
          paddingTop: 48,
          borderTop: "1px solid var(--line-strong)",
        }}
      >
        <Reveal delay={200}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
                marginBottom: 20,
              }}
            >
              Currently
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.5,
                color: "var(--ink)",
                maxWidth: 520,
              }}
            >
              Booking late-summer 2026. Best fit: AI products with editorial
              sensibility, design systems for series-A teams, or a focused 4–8
              week sprint.
            </p>
            <div style={{ marginTop: 40 }}>
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
                marginBottom: 20,
              }}
            >
              Elsewhere
            </div>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="social-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr auto",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 0",
                  borderBottom: "1px solid var(--line)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--ink-soft)",
                  transition: "color 0.2s ease, padding 0.4s ease",
                }}
              >
                <span
                  style={{
                    color: "var(--ink-mute)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </span>
                <span style={{ color: "var(--ink)" }}>{s.value}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <Reveal delay={400}>
        <div
          className="footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            marginTop: 80,
            paddingTop: 32,
            borderTop: "1px solid var(--line)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          <span>© {year} Emmanuel Maurice</span>
        </div>
      </Reveal>

      <style>{`
        .social-row:hover { color: var(--ink) !important; padding-left: 12px !important; }
        .social-row:hover span:first-child { color: var(--accent-1) !important; }
        @media (max-width: 820px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer { flex-direction: column; align-items: flex-start; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
