import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-3xl font-bold underline">Hello world!</h1>,
  },
  {
    path: "/a",
    element: <h1 className="text-3xl font-bold underline">a world!</h1>,
  },
]);