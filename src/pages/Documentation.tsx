
import { Scroll, CompassIcon, Trophy, FileCog, Database, HelpCircle, Users, MessageCircle, HelpCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="glass-morphism dark rounded-xl p-8">
          <div className="backdrop-blur-xl bg-black/20 rounded-xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-3">
                  <Scroll className="h-8 w-8 text-primary" />
                  Documentation
                </h1>
                <p className="text-muted-foreground mt-2">
                  Everything you need to know about using Spreadsheet Challenges
                </p>
              </div>
              <Link to="/">
                <Button variant="outline" className="rounded-full">
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-[240px_1fr] gap-8">
              {/* Sidebar Navigation */}
              <ScrollArea className="h-[calc(100vh-280px)]">
                <nav className="space-y-6 sticky top-0">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm uppercase text-muted-foreground">
                      Getting Started
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <a href="#account-setup" className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                          Account Setup
                        </a>
                      </li>
                      <li>
                        <a href="#interface-overview" className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                          Interface Overview
                        </a>
                      </li>
                      <li>
                        <a href="#first-challenge" className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                          Your First Challenge
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm uppercase text-muted-foreground">
                      Features
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <a href="#formula-editor" className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                          Formula Editor
                        </a>
                      </li>
                      <li>
                        <a href="#validation" className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                          Solution Validation
                        </a>
                      </li>
                      <li>
                        <a href="#progress-tracking" className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                          Progress Tracking
                        </a>
                      </li>
                      <li>
                        <a href="#leaderboard" className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                          Leaderboard
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </ScrollArea>

              {/* Main Content */}
              <ScrollArea className="h-[calc(100vh-280px)]">
                <div className="space-y-8 pr-4">
                  {/* Account Setup */}
                  <section id="account-setup" className="space-y-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <FileCog className="h-6 w-6 text-primary" />
                      Account Setup
                    </h2>
                    <div className="bg-white/5 rounded-lg p-6 space-y-4">
                      <h3 className="text-lg font-medium">Creating Your Account</h3>
                      <p className="text-muted-foreground">
                        Get started with Spreadsheet Challenges in just a few steps:
                      </p>
                      <ol className="space-y-3 text-muted-foreground ml-4 list-decimal">
                        <li>Click the "Sign Up" button in the top right corner</li>
                        <li>Choose your preferred authentication method</li>
                        <li>Complete your profile information</li>
                        <li>Start solving challenges!</li>
                      </ol>
                    </div>
                  </section>

                  {/* Interface Overview */}
                  <section id="interface-overview" className="space-y-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <CompassIcon className="h-6 w-6 text-primary" />
                      Interface Overview
                    </h2>
                    <div className="bg-white/5 rounded-lg p-6 space-y-4">
                      <h3 className="text-lg font-medium">Main Dashboard</h3>
                      <p className="text-muted-foreground">Your dashboard provides quick access to:</p>
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                          <Database className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <h4 className="font-medium">Progress Overview</h4>
                            <p className="text-sm text-muted-foreground">
                              Track your completed challenges and success rate
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                          <FileCog className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <h4 className="font-medium">Challenge Browser</h4>
                            <p className="text-sm text-muted-foreground">
                              Find and filter available challenges by difficulty and topic
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                          <Trophy className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <h4 className="font-medium">Leaderboard</h4>
                            <p className="text-sm text-muted-foreground">
                              See your ranking and compete with other users
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Help Section */}
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <HelpCircle className="h-6 w-6 text-primary" />
                      Need More Help?
                    </h2>
                    <p className="text-muted-foreground">
                      Can't find what you're looking for? We're here to help!
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <Link to="/contact" className="block p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                        <MessageCircle className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Contact Support</h3>
                        <p className="text-sm text-muted-foreground">Get help from our team</p>
                      </Link>
                      <Link to="/community" className="block p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                        <Users className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Community Forum</h3>
                        <p className="text-sm text-muted-foreground">Connect with other users</p>
                      </Link>
                      <Link to="/faq" className="block p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                        <HelpCircleIcon className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">FAQ</h3>
                        <p className="text-sm text-muted-foreground">Common questions answered</p>
                      </Link>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
