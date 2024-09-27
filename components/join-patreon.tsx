"use client";

import { useEffect } from "react";

export function JoinPatreonComponent() {
  useEffect(() => {
    const handleLoad = () => {
      const script = document.createElement("script");
      script.src = "https://c6.patreon.com/becomePatronButton.bundle.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div>
      <a
        href="https://www.patreon.com/bePatron?u=81888804"
        data-patreon-widget-type="become-patron-button"
      >
        Become a member!
      </a>
    </div>
  );
}
