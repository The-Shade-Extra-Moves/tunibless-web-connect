import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/lib/i18n-context";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";
import CONFIG from "@/lib/config";
import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Onboarding from "./pages/Onboarding";
import AllServices from "./pages/AllServices-new";
import Tunisia from "./pages/Tunisia";
import Global from "./pages/Global";
import Germany from "./pages/Germany";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Danke from "./pages/Danke";
import Roadmap from "./pages/Roadmap";
import Downloads from "./pages/Downloads";
import Glossar from "./pages/Glossar";
import Spenden from "./pages/Spenden";
import Mitglied from "./pages/Mitglied";
import Helfer from "./pages/Helfer";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Cookies from "./pages/Cookies";
import RegionPage from "./pages/RegionPage";
import ServiceCategory from "./pages/ServiceCategory";

const queryClient = new QueryClient();

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <I18nProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {showLoading && (
              <LoadingScreen onComplete={() => setShowLoading(false)} />
            )}
            {!showLoading && (
              <BrowserRouter>
                <PageTransition>
                  <Routes>
                    <Route path={CONFIG.routes.about} element={<About />} />
                    <Route path={CONFIG.routes.faq} element={<FAQ />} />
                    <Route path={CONFIG.routes.contact} element={<ContactPage />} />
                    <Route path={CONFIG.routes.events} element={<Events />} />
                    <Route path={CONFIG.routes.home} element={<Index />} />
                    <Route path={CONFIG.routes.registration} element={<Registration />} />
                    <Route path={CONFIG.routes.onboarding} element={<Onboarding />} />
                    <Route path={CONFIG.routes.services} element={<AllServices />} />
                    <Route path={CONFIG.routes.serviceCategory} element={<ServiceCategory />} />
                    <Route path={CONFIG.routes.tunisia} element={<Tunisia />} />
                    <Route path={CONFIG.routes.worldwide} element={<Global />} />
                    <Route path={CONFIG.routes.germany} element={<Germany />} />
                    <Route path={CONFIG.routes.success} element={<Success />} />
                    <Route path={CONFIG.routes.thanks} element={<Danke />} />
                    <Route path={CONFIG.routes.roadmap} element={<Roadmap />} />
                    <Route path={CONFIG.routes.downloads} element={<Downloads />} />
                    <Route path={CONFIG.routes.glossary} element={<Glossar />} />
                    <Route path={CONFIG.routes.donate} element={<Spenden />} />
                    <Route path={CONFIG.routes.member} element={<Mitglied />} />
                    <Route path={CONFIG.routes.volunteer} element={<Helfer />} />
                    <Route path={CONFIG.routes.imprint} element={<Impressum />} />
                    <Route path={CONFIG.routes.privacy} element={<Datenschutz />} />
                    <Route path={CONFIG.routes.cookies} element={<Cookies />} />
                    <Route path={CONFIG.routes.regionGov} element={<RegionPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </PageTransition>
              </BrowserRouter>
            )}
          </TooltipProvider>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
