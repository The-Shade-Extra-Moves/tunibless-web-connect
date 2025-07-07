import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Onboarding from "./pages/Onboarding";
import AllServices from "./pages/AllServices";
import Tunisia from "./pages/Tunisia";
import Global from "./pages/Global";
import Germany from "./pages/Germany";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/anmeldung" element={<Registration />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/tunesien" element={<Tunisia />} />
          <Route path="/weltweit" element={<Global />} />
          <Route path="/deutschland" element={<Germany />} />
          <Route path="/veranstaltungen" element={<Events />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
