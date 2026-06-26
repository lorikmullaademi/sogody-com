import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function MyApp() {
  const config = {
    theme: "light",
    layout: "month_view",
  }
  
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", config);
    })();
  }, []);

  return (
    <div className="cal-wrap">
      <Cal
        calLink="sogody/30min"
        className="cal-embed"
        config={config}
      />
    </div>
  );
}
