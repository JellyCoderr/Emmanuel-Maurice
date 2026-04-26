/* App: composes sections + tweaks panel */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent1": "amber",
  "accent2": "indigo",
  "font": "geist",
  "density": "spacious",
  "projectLayout": "list"
}/*EDITMODE-END*/;

const ACCENT_PALETTE = {
  amber:    "oklch(0.72 0.15 60)",
  indigo:   "oklch(0.50 0.13 255)",
  rust:     "oklch(0.62 0.17 35)",
  ink:      "oklch(0.18 0.02 260)",
  jade:     "oklch(0.66 0.13 165)",
  cream:    "oklch(0.94 0.04 90)",
  rose:     "oklch(0.70 0.15 15)",
  forest:   "oklch(0.40 0.08 155)",
  violet:   "oklch(0.55 0.16 295)",
  yellow:   "oklch(0.85 0.16 95)",
};

const FONT_OPTIONS = {
  geist:        { sans: '"Geist", system-ui, sans-serif',          mono: '"Geist Mono", ui-monospace, monospace', display: '"Instrument Serif", serif' },
  inter:        { sans: '"Inter Tight", system-ui, sans-serif',    mono: '"JetBrains Mono", ui-monospace, monospace', display: '"Instrument Serif", serif' },
  generalSans:  { sans: '"General Sans", system-ui, sans-serif',   mono: '"Geist Mono", ui-monospace, monospace', display: '"Instrument Serif", serif' },
  mono:         { sans: '"JetBrains Mono", ui-monospace, monospace', mono: '"JetBrains Mono", ui-monospace, monospace', display: '"Instrument Serif", serif' },
  serif:        { sans: '"Instrument Serif", Georgia, serif',      mono: '"Geist Mono", ui-monospace, monospace', display: '"Instrument Serif", serif' },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [editMode, setEditMode] = useState(false);

  // apply theme + accents + density to document
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = tweaks.theme;

    root.style.setProperty("--accent-1", ACCENT_PALETTE[tweaks.accent1] || ACCENT_PALETTE.amber);
    root.style.setProperty("--accent-2", ACCENT_PALETTE[tweaks.accent2] || ACCENT_PALETTE.indigo);

    const f = FONT_OPTIONS[tweaks.font] || FONT_OPTIONS.geist;
    root.style.setProperty("--font-sans", f.sans);
    root.style.setProperty("--font-mono", f.mono);
    root.style.setProperty("--font-display", f.display);

    if (tweaks.density === "compact") {
      root.style.setProperty("--scale", "0.88");
      document.body.style.fontSize = "14px";
    } else {
      root.style.setProperty("--scale", "1");
      document.body.style.fontSize = "16px";
    }
  }, [tweaks]);

  const toggleTheme = () => setTweak("theme", tweaks.theme === "dark" ? "light" : "dark");

  return (
    <>
      <Nav theme={tweaks.theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Work layout={tweaks.projectLayout} />
        <Skills />
        <About />
        <Contact />
      </main>

      <TweaksPanel onActiveChange={setEditMode} title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio label="Mode" value={tweaks.theme} onChange={(v) => setTweak("theme", v)}
            options={[{label:"Light", value:"light"},{label:"Dark", value:"dark"}]} />
        </TweakSection>

        <TweakSection title="Accents">
          <TweakSelect label="Primary" value={tweaks.accent1} onChange={(v) => setTweak("accent1", v)}
            options={Object.keys(ACCENT_PALETTE).map(k => ({ label: k, value: k }))} />
          <TweakSelect label="Secondary" value={tweaks.accent2} onChange={(v) => setTweak("accent2", v)}
            options={Object.keys(ACCENT_PALETTE).map(k => ({ label: k, value: k }))} />
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <span style={{ flex: 1, height: 28, borderRadius: 6, background: ACCENT_PALETTE[tweaks.accent1] }} />
            <span style={{ flex: 1, height: 28, borderRadius: 6, background: ACCENT_PALETTE[tweaks.accent2] }} />
          </div>
        </TweakSection>

        <TweakSection title="Typography">
          <TweakSelect label="Font" value={tweaks.font} onChange={(v) => setTweak("font", v)}
            options={[
              { label: "Geist (default)", value: "geist" },
              { label: "Inter Tight", value: "inter" },
              { label: "General Sans", value: "generalSans" },
              { label: "JetBrains Mono", value: "mono" },
              { label: "Instrument Serif", value: "serif" },
            ]} />
        </TweakSection>

        <TweakSection title="Layout">
          <TweakRadio label="Density" value={tweaks.density} onChange={(v) => setTweak("density", v)}
            options={[{label:"Spacious", value:"spacious"},{label:"Compact", value:"compact"}]} />
          <TweakSelect label="Projects" value={tweaks.projectLayout} onChange={(v) => setTweak("projectLayout", v)}
            options={[
              { label: "Image list", value: "list" },
              { label: "Asymmetric grid", value: "grid" },
              { label: "Minimal index", value: "index" },
            ]} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
