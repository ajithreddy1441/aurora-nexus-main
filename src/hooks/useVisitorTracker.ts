import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export const useVisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        let visitorId = localStorage.getItem("visitor_id");

        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem("visitor_id", visitorId);
        }

        const isMobile =
          /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent
          );

        await supabase.from("visitors").insert([
          {
            visitor_id: visitorId,
            user_agent: navigator.userAgent,
            device_type: isMobile
              ? "Mobile"
              : "Desktop",
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            page_url: window.location.href,
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    trackVisitor();
  }, []);
};