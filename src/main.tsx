import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./react-router/react-router";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
