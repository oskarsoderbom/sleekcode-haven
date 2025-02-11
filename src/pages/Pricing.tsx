
import { Check, Crown, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your coding journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="glass-morphism dark rounded-xl p-1">
            <div className="backdrop-blur-xl bg-black/20 rounded-lg p-6 h-full flex flex-col">
              <div className="mb-6">
                <Badge variant="outline" className="mb-3">
                  Starter
                </Badge>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">Free</span>
                  <span className="text-muted-foreground">/forever</span>
                </div>
                <p className="text-muted-foreground mt-3">
                  Perfect for beginners starting their coding journey
                </p>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Access to basic challenges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Community forum access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Basic progress tracking</span>
                </div>
              </div>
              <Button className="w-full mt-6">Get Started</Button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="glass-morphism dark rounded-xl p-1 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            </div>
            <div className="backdrop-blur-xl bg-black/20 rounded-lg p-6 h-full flex flex-col border-primary/50 border">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">Pro</Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$15</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-3">
                  Everything you need to excel in problem-solving
                </p>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>All Starter features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Advanced challenges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Performance analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Priority support</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                Upgrade to Pro
              </Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="glass-morphism dark rounded-xl p-1">
            <div className="backdrop-blur-xl bg-black/20 rounded-lg p-6 h-full flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Enterprise</Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <p className="text-muted-foreground mt-3">
                  Tailored solutions for your organization
                </p>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>All Pro features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Custom challenge creation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Team management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Dedicated support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Custom integrations</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 glass-morphism dark rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Have questions? We're here to help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-semibold">Can I switch plans later?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can try our Pro plan free for 14 days. No credit card required.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Do you offer refunds?</h3>
              <p className="text-muted-foreground text-sm">
                If you're not satisfied, we offer a 30-day money-back guarantee for all paid plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
