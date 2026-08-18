import { useState } from "react";
import type { AppPage } from "./types/app.types";
import { DemandForecasting } from "./pages/DemandForecasting";
import CreateForecast from "./pages/CreateForecast";

/**
 * Standalone Demand Forecasting App
 *
 * This is a slim router that only handles the demand forecasting pages.
 * No auth, dashboard, inventory, procurement, logistics, or manufacturing.
 *
 * Pages:
 *  - demandForecasting  → Landing page with hero + feature cards
 *  - createForecast     → Full CSV upload + AI forecast wizard
 */
export default function App() {
  const [activePage, setActivePage] = useState<AppPage>("demandForecasting");

  const handleNavigate = (page: AppPage) => {
    // Only handle the pages this standalone app knows about
    if (page === "demandForecasting" || page === "createForecast") {
      setActivePage(page);
    }
    // For any other page (inventory, procurement, etc.) — silently ignore.
    // The Sidebar still shows those items but clicking them won't break anything.
  };

  switch (activePage) {
    case "createForecast":
      return (
        <CreateForecast
          activePage={activePage}
          onNavigate={handleNavigate}
        />
      );

    case "demandForecasting":
    default:
      return (
        <DemandForecasting
          activePage={activePage}
          onNavigate={handleNavigate}
        />
      );
  }
}
