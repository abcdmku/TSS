import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./provider";
import "@/styles/globals.css";
import { RouterProvider } from '@tanstack/react-router';
import { router } from '@hoqs/routes';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
