import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default root;
