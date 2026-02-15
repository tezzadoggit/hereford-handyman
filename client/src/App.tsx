import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import B2B from "./pages/B2B";
import MediaWalls from "./pages/MediaWalls";
import PaintingDecorating from "./pages/PaintingDecorating";
import Carpentry from "./pages/Carpentry";
import KitchenFitting from "./pages/KitchenFitting";
import BathroomRenovations from "./pages/BathroomRenovations";
import Flooring from "./pages/Flooring";
import Plumbing from "./pages/Plumbing";
import Electrical from "./pages/Electrical";
import GeneralRepairs from "./pages/GeneralRepairs";
import FlatPackAssembly from "./pages/FlatPackAssembly";
import GardenOutdoor from "./pages/GardenOutdoor";
import ElderlyCare from "./pages/ElderlyCare";
import MeshNetworks from "./pages/MeshNetworks";
import SmartHome from "./pages/SmartHome";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/b2b"} component={B2B} />
      <Route path={"/elderly-care"} component={ElderlyCare} />
      <Route path={"/media-walls"} component={MediaWalls} />
      <Route path={"/mesh-networks"} component={MeshNetworks} />
      <Route path={"/smart-home"} component={SmartHome} />
      <Route path={"/painting-decorating"} component={PaintingDecorating} />
      <Route path={"/carpentry"} component={Carpentry} />
      <Route path={"/kitchen-fitting"} component={KitchenFitting} />
      <Route path={"/bathroom-renovations"} component={BathroomRenovations} />
      <Route path={"/flooring"} component={Flooring} />
      <Route path={"/plumbing"} component={Plumbing} />
      <Route path={"/electrical"} component={Electrical} />
      <Route path={"/general-repairs"} component={GeneralRepairs} />
      <Route path={"/flat-pack-assembly"} component={FlatPackAssembly} />
      <Route path={"/garden-outdoor"} component={GardenOutdoor} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
