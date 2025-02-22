
import { SunIcon, MoonIcon, Trophy, BookOpen, GamepadIcon, RocketIcon, PuzzleIcon, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('spreadsheet-bg', !isDark);
    document.body.style.backgroundColor = isDark ? '#0A1929' : '#ffffff';
  }, [isDark]);

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Learning Paths",
      description: "Follow structured paths to master new skills step by step",
      link: "/problems"
    },
    {
      icon: <PuzzleIcon className="h-8 w-8 text-primary" />,
      title: "Practice Problems",
      description: "Solve real-world coding challenges to reinforce your learning",
      link: "/problems"
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Compete & Learn",
      description: "Join leaderboards and compete with other learners",
      link: "/leaderboard"
    },
    {
      icon: <GamepadIcon className="h-8 w-8 text-primary" />,
      title: "Gamified Experience",
      description: "Earn achievements and track your progress through gameplay",
      link: "/profile"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 relative">
      <div className="fixed top-4 right-4 flex items-center gap-4">
        <Link to="/profile">
          <Button variant="outline" size="icon" className="rounded-full">
            <UserRound className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </Link>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          ) : (
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
          )}
        </Button>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className={`glass-morphism rounded-xl p-12 mb-12 ${isDark ? 'dark' : 'light'}`}>
          <div className={`text-center space-y-6 backdrop-blur-xl ${isDark ? 'bg-black/20' : 'bg-white/60'} rounded-xl p-8`}>
            <RocketIcon className="h-16 w-16 mx-auto text-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Learn. Code. Achieve.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience a new way of learning through our gamified platform. 
              Master coding skills while competing with others and earning achievements.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link to="/problems">
                <Button size="lg" className="rounded-full">
                  Start Learning
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button size="lg" variant="outline" className="rounded-full">
                  View Leaderboard
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="block">
              <div className={`glass-morphism rounded-xl p-8 ${isDark ? 'dark' : 'light'} transition-transform hover:scale-105`}>
                <div className={`h-full backdrop-blur-xl ${isDark ? 'bg-black/20' : 'bg-white/60'} rounded-xl p-6`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`glass-morphism rounded-xl mt-12 p-8 ${isDark ? 'dark' : 'light'}`}>
          <div className={`backdrop-blur-xl ${isDark ? 'bg-black/20' : 'bg-white/60'} rounded-xl p-6`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Active Learners", value: "10,000+" },
                { label: "Problems", value: "500+" },
                { label: "Learning Paths", value: "50+" },
                { label: "Daily Challenges", value: "New" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
