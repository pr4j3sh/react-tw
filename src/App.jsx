import Head from "./components/Head";
import { SITE } from "./lib/consts";

function App() {
  return (
    <>
      <Head site={SITE} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
