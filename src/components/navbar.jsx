import { SITE } from "../lib/consts";
import ModeToggle from "./mode-toggle";

export default function Navbar() {
  return (
    <nav>
      <a href="/" className="font-semibold">
        {SITE?.REPO}
      </a>
      <ul>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
