import { useEffect } from "react";

function ScrollToTopOnRefresh() {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Remove any hash from the URL and set path to "/"
    if (window.location.hash) {
      // Remove hash without reloading the page
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return null;
}

export default ScrollToTopOnRefresh;
