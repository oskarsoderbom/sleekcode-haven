
import { Cookie, Shield, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="glass-morphism dark rounded-xl p-8">
          <div className="backdrop-blur-xl bg-black/20 rounded-xl p-6">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold flex items-center gap-3 text-gradient">
                  <Cookie className="h-8 w-8 text-primary" />
                  Cookie Policy
                </h1>
                <Link to="/">
                  <Button variant="outline" className="rounded-full">
                    Back to Home
                  </Button>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Info className="h-6 w-6 text-primary" />
                    What Are Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files that are stored on your computer or mobile device
                    when you visit our website. They help us provide you with a better experience
                    by remembering your preferences and session information.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    How We Use Cookies
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Authentication and security</li>
                    <li>Preferences and settings</li>
                    <li>Analytics and performance</li>
                    <li>Progress tracking and achievements</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Types of Cookies We Use</h2>
                  <div className="grid gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Essential Cookies</h3>
                      <p className="text-sm text-muted-foreground">Required for basic website functionality</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Functional Cookies</h3>
                      <p className="text-sm text-muted-foreground">Remember your preferences and settings</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Analytics Cookies</h3>
                      <p className="text-sm text-muted-foreground">Help us improve our website performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
