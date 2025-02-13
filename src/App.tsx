
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProblemList from "./components/ProblemList";
import ProblemDescription from "./components/ProblemDescription";
import Leaderboard from "./components/Leaderboard";
import UserProfile from "./components/UserProfile";
import AboutUs from "./pages/AboutUs";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Documentation from "./pages/Documentation";
import PricingPage from "./pages/Pricing";
import Header from "./components/Header";
import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

// Initialize SuperTokens
SuperTokens.init({
  appInfo: {
    appName: "SpreadsheetChallenges",
    apiDomain: "http://localhost:3000", // Replace with your API domain
    websiteDomain: "http://localhost:5173", // Replace with your website domain
  },
  recipeList: [
    EmailPassword.init(),
    Session.init(),
  ],
});

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SessionAuth>
          <Header />
          <main className="pt-20"> {/* Add padding to account for fixed header */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/problems" element={<ProblemList />} />
              <Route path="/problems/:id" element={<ProblemDescription />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </SessionAuth>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
