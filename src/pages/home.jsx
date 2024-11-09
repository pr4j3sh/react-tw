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
      <a href="https://github.com/pr4j3sh/react-tw">
        <button>Get Started</button>
      </a>
      <article>
        <p className="font-semibold">Read more</p>
        <ul>
          <li>
            <a href="https://vite.dev/guide/">Vite Documentation</a>
          </li>
          <li>
            <a href="https://react.dev/learn">React Documentation</a>
          </li>
          <li>
            <a href="https://reactrouter.com/en/main/start/tutorial">
              React Router Documentation
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs/utility-first">
              Tailwind CSS Documentation
            </a>
          </li>
          <li>
            <a href="https://icones.js.org/">Icones</a>
          </li>
          <li>
            <a href="https://github.com/pr4j3sh/frames">@pr4j3sh/frames</a>
          </li>
        </ul>
      </article>
    </section>
  );
}
