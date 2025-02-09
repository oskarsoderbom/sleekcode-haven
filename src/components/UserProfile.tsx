
import { useState } from 'react';
import { Trophy, Star, Award, Code, UserRound, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface UserStats {
  rank: number;
  score: number;
  problemsSolved: number;
  achievements: number;
}

const UserProfile = () => {
  const [stats] = useState<UserStats>({
    rank: 1,
    score: 2850,
    problemsSolved: 145,
    achievements: 12
  });

  return (
    <div className="p-6 w-full h-full overflow-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <UserRound className="h-6 w-6 text-primary" />
          Profile
        </h2>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Settings className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <div className="space-y-6">
          <Card className="backdrop-blur-xl border-white/10">
            <CardHeader className="flex flex-col items-center space-y-4 pb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://github.com/algorithmace.png" alt="AlgorithmAce" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">AlgorithmAce</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Passionate about algorithms and clean code. Always learning, always coding.</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl border-white/10">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">Rank</span>
                  </div>
                  <span className="font-semibold">#{stats.rank}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm">Score</span>
                  </div>
                  <span className="font-semibold">{stats.score.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-400" />
                    <span className="text-sm">Problems Solved</span>
                  </div>
                  <span className="font-semibold">{stats.problemsSolved}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-400" />
                    <span className="text-sm">Achievements</span>
                  </div>
                  <span className="font-semibold">{stats.achievements}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="backdrop-blur-xl border-white/10">
            <CardHeader>
              <h3 className="text-lg font-semibold">Recent Activity</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Solved Problem #{145 - i}</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {i === 0 ? '2h ago' : `${i + 1}d ago`}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl border-white/10">
            <CardHeader>
              <h3 className="text-lg font-semibold">Latest Achievements</h3>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border p-3 text-sm"
                  >
                    <Award className="h-8 w-8 text-amber-400" />
                    <div>
                      <p className="font-medium">Speed Demon</p>
                      <p className="text-xs text-muted-foreground">
                        Solved 5 problems in under 1 hour
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

