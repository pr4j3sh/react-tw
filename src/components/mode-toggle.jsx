import { useTheme } from "../contexts/theme-context";

export default function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="icon" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}
