"use client";

import { useEffect, useState } from "react";

// Adds the bubbles overlay only after the page has finished loading, so its
// large image doesn't compete with the banner and other images on slow
// connections. The fade-out itself is a CSS animation (see globals.css).
export default function BubblesOverlay() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return loaded ? <div className="bubbles-overlay" aria-hidden="true"></div> : null;
}
