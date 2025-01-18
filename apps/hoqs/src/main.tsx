import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from '@tanstack/react-router';
import { router } from '@hoqs/routes';
import { Provider } from "@hoqs/core-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
