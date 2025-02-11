
import { Users, Brain, Trophy, RocketIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="glass-morphism dark rounded-xl p-8">
          <div className="backdrop-blur-xl bg-black/20 rounded-xl p-6">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold flex items-center gap-3 text-gradient">
                  <Users className="h-8 w-8 text-primary" />
                  About Us
                </h1>
                <Link to="/">
                  <Button variant="outline" className="rounded-full">
                    Back to Home
                  </Button>
                </Link>
              </div>

              <div className="grid gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <RocketIcon className="h-6 w-6 text-primary" />
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We're dedicated to revolutionizing coding education through an engaging, 
                    interactive platform that combines learning with gaming elements. Our goal 
                    is to make programming education accessible, enjoyable, and effective for everyone.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Brain className="h-6 w-6 text-primary" />
                    Our Approach
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe learning should be fun and rewarding. By incorporating gamification
                    elements like achievements, leaderboards, and competitive challenges, we create
                    an environment that keeps learners motivated and engaged throughout their 
                    coding journey.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    Our Community
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Join thousands of learners who are part of our growing community. Share knowledge,
                    compete in challenges, and grow together. Our platform is built on the principle
                    that learning is better when done together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
