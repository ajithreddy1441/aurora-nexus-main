import { useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";

export const useVisitorTracker = () => {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

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

        let locationData = {
          ip: null,
          city: null,
          region: null,
          country_name: null,
          timezone: null,
        };

        try {
          const response = await fetch(
            "https://ipapi.co/json/"
          );

          if (response.ok) {
            locationData = await response.json();
          }
        } catch {
          // Silently continue if location service fails
        }

        const payload = {
          visitor_id: visitorId,
          ip_address: locationData.ip,
          city: locationData.city,
          region: locationData.region,
          country: locationData.country_name,
          timezone: locationData.timezone,
          language: navigator.language,
          user_agent: navigator.userAgent,
          device_type: isMobile
            ? "Mobile"
            : "Desktop",
          screen_resolution: `${window.screen.width}x${window.screen.height}`,
          page_url: window.location.href,
        };

        await supabase
          .from("visitors")
          .insert([payload]);
      } catch {
        // Prevent visitor tracking failures from affecting the site
      }
    };

    trackVisitor();
  }, []);
};