"use client";

import { useEffect } from "react";

// Always open a new page at the top (overrides the smooth-scroll and any
// scroll position carried over from the previous, longer page).
export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
