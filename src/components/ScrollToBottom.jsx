import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToBottom() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
