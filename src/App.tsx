
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MusicPlayer from "./components/MusicPlayer";
import ValentinePopup from "./components/ValentinePopup";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Reasons from "./pages/Reasons";
import Letter from "./pages/Letter";
import Forever from "./pages/Forever";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/forever" element={<Forever />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MusicPlayer />
        <ValentinePopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;