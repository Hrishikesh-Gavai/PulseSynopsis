import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Feed from "./pages/Feed";
import SummaryDetail from "./pages/SummaryDetail";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Community from "./pages/Community";
import Games from "./pages/Games";
import Analytics from "./pages/Analytics";
import Perspectives from "./pages/Perspectives";
import Timeline from "./pages/Timeline";
import TopicsGraph from "./pages/TopicsGraph";
import PerspectiveSwitch from "./pages/PerspectiveSwitch";
import LocalPulse from "./pages/LocalPulse";
import TimelineLive from "./pages/TimelineLive";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Must be here, inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/summary/:id" element={<SummaryDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/community" element={<Community />} />
          <Route path="/games" element={<Games />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/perspectives" element={<Perspectives />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/topics-graph" element={<TopicsGraph />} />
          <Route path="/perspective-switch" element={<PerspectiveSwitch />} />
          <Route path="/local-pulse" element={<LocalPulse />} />
          <Route path="/timeline-live" element={<TimelineLive />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
