/* Shared primitives & utilities for the portfolio */

const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ---------- Hooks ---------- */

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current || shown) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown, threshold]);
  return [ref, shown];
}

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

/* ---------- Atoms ---------- */

function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {}, ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 0.9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function SectionLabel({ num, children }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 14,
      fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em",
      textTransform: "uppercase", color: "var(--ink-soft)",
      marginBottom: 28,
    }}>
      <span style={{ color: "var(--accent-1)" }}>{num}</span>
      <span style={{ width: 32, height: 1, background: "var(--line-strong)" }} />
      <span>{children}</span>
    </div>
  );
}

function Marquee({ items, speed = 30 }) {
  const dup = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", position: "relative", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
      <div style={{
        display: "flex", gap: 48, whiteSpace: "nowrap",
        animation: `marquee ${speed}s linear infinite`,
        width: "max-content",
      }}>
        {dup.map((it, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: "clamp(48px, 8vw, 120px)", color: "var(--ink)",
            display: "flex", alignItems: "center", gap: 48,
          }}>
            {it}
            <span style={{
              width: 12, height: 12, borderRadius: "50%",
              background: "var(--accent-1)", display: "inline-block",
            }} />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

/* Project artwork — abstract, original, no SVG illustrations */
function ProjectArt({ variant, accent }) {
  // simple original compositions using gradients + grid + type
  if (variant === "stack") {
    return (
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, oklch(0.92 0.04 70), oklch(0.85 0.05 60))" }}>
        {[0,1,2,3,4].map((i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${10 + i*8}%`, top: `${15 + i*10}%`,
            width: "55%", height: 56,
            background: i === 2 ? "var(--accent-1)" : "rgba(20,19,15,0.85)",
            borderRadius: 8,
            transform: `rotate(${-3 + i}deg)`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          }} />
        ))}
      </div>
    );
  }
  if (variant === "grid") {
    return (
      <div style={{
        position: "absolute", inset: 0,
        background: "var(--ink)",
        display: "grid", gridTemplateColumns: "repeat(8,1fr)", gridTemplateRows: "repeat(6,1fr)",
        gap: 1, padding: 1,
      }}>
        {Array.from({length: 48}).map((_,i) => {
          const lit = [3,4,5,11,12,19,20,28,35,36,43,44].includes(i);
          const accent = [12,20,28].includes(i);
          return <div key={i} style={{ background: accent ? "var(--accent-1)" : lit ? "oklch(0.95 0.03 70)" : "var(--ink)" }} />;
        })}
      </div>
    );
  }
  if (variant === "orbit") {
    return (
      <div style={{ position: "absolute", inset: 0, background: "oklch(0.18 0.02 260)", overflow: "hidden" }}>
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          width: "80%", aspectRatio: 1,
          transform: "translate(-50%,-50%)",
          border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          width: "55%", aspectRatio: 1,
          transform: "translate(-50%,-50%)",
          border: "1px solid rgba(255,255,255,0.20)", borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          width: 18, height: 18, borderRadius: "50%",
          background: "var(--accent-1)",
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 60px var(--accent-1)",
        }} />
        <div style={{
          position: "absolute", left: "calc(50% + 27.5%)", top: "50%",
          width: 8, height: 8, borderRadius: "50%",
          background: "white", transform: "translate(-50%,-50%)",
        }} />
        <div style={{
          position: "absolute", left: "calc(50% - 40%)", top: "50%",
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--accent-2)", transform: "translate(-50%,-50%)",
          filter: "brightness(1.6)",
        }} />
      </div>
    );
  }
  if (variant === "type") {
    return (
      <div style={{
        position: "absolute", inset: 0,
        background: "var(--accent-1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <div style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: "clamp(160px, 24vw, 320px)",
          color: "var(--ink)", lineHeight: 0.8, letterSpacing: "-0.04em",
          transform: "translateY(8%)",
        }}>Aa</div>
        <div style={{
          position: "absolute", left: 16, top: 16,
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--ink)",
        }}>Type System v2</div>
      </div>
    );
  }
  if (variant === "wave") {
    return (
      <div style={{ position: "absolute", inset: 0, background: "oklch(0.96 0.02 240)", overflow: "hidden" }}>
        {Array.from({length: 18}).map((_,i) => (
          <div key={i} style={{
            position: "absolute", left: 0, right: 0,
            top: `${i * 6}%`, height: 1,
            background: i === 8 ? "var(--accent-2)" : "var(--ink)",
            opacity: i === 8 ? 1 : 0.15 + Math.abs(8-i)*0.04,
            transform: `translateY(${Math.sin(i*0.6)*12}px)`,
          }} />
        ))}
        <div style={{
          position: "absolute", right: 20, bottom: 20,
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--ink)", letterSpacing: "0.08em", textTransform: "uppercase",
        }}>Embedding space</div>
      </div>
    );
  }
  return null;
}

Object.assign(window, { useReveal, useMousePosition, Reveal, SectionLabel, Marquee, ProjectArt });
