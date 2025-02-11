
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="glass-morphism dark rounded-xl p-8">
          <div className="backdrop-blur-xl bg-black/20 rounded-xl p-6">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold flex items-center gap-3 text-gradient">
                  <Shield className="h-8 w-8 text-primary" />
                  Privacy Policy
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
                    <Lock className="h-6 w-6 text-primary" />
                    Data Protection
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We take the protection of your personal data seriously. This privacy policy
                    explains how we collect, use, and safeguard your information when you use
                    our platform.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Eye className="h-6 w-6 text-primary" />
                    Information We Collect
                  </h2>
                  <div className="grid gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Account Information</h3>
                      <p className="text-sm text-muted-foreground">Username, email, and profile data</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Usage Data</h3>
                      <p className="text-sm text-muted-foreground">Learning progress and achievements</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Technical Data</h3>
                      <p className="text-sm text-muted-foreground">Device information and cookies</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <FileCheck className="h-6 w-6 text-primary" />
                    Your Rights
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access your personal data</li>
                    <li>Request data correction</li>
                    <li>Delete your account</li>
                    <li>Export your data</li>
                    <li>Opt-out of communications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
