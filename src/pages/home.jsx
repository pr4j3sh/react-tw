export default function Home() {
  return (
    <section>
      <article>
        <p className="font-semibold">Hey there,</p>
        <p>
          This is React + Tailwind CSS template with router, dark/light theme
          mode, svg icons support with Icones, pre-styled components, fully
          responsive and SEO friendly.
        </p>
      </article>
      <article>
        <p>
          Use this template via <code>@pr4j3sh/frames</code>
        </p>
        <pre>
          <code>npm create @pr4j3sh/frames@latest react-tw myapp</code>
        </pre>
        <blockquote>
          You can replace <code>myapp</code> with the choice of your name.
        </blockquote>
      </article>
      <article>
        <p>Run the app using</p>
        <pre>
          <code>npm run dev</code>
        </pre>
      </article>
      <a href="https://github.com/pr4j3sh/react-tw" target="_blank">
        <button>Get Started</button>
      </a>
      <article>
        <p className="font-semibold">Read more</p>
        <ul>
          <li>
            <a className="link" href="https://vite.dev/guide/" target="_blank">
              Vite Documentation
            </a>
          </li>
          <li>
            <a className="link" href="https://react.dev/learn" target="_blank">
              React Documentation
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://reactrouter.com/en/main/start/tutorial"
              target="_blank"
            >
              React Router Documentation
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://tailwindcss.com/docs/utility-first"
              target="_blank"
            >
              Tailwind CSS Documentation
            </a>
          </li>
          <li>
            <a className="link" href="https://icones.js.org/" target="_blank">
              Icones
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/pr4j3sh/frames"
              target="_blank"
            >
              @pr4j3sh/frames
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
