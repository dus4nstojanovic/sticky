import React, { FC, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Playground from "./Playground";

const App: FC = () => {
  useEffect(() => {
    new EventSource("/esbuild").addEventListener("change", () =>
      location.reload()
    );
  }, []);

  return <Playground />;
};

const root = createRoot(document.getElementById("app") as any);
root.render(<App />);
