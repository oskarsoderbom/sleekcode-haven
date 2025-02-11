
import { useState } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  problemsSolved: number;
  achievements: number;
}

const Leaderboard = () => {
  const [entries] = useState<LeaderboardEntry[]>([
    { rank: 1, username: "AlgorithmAce", score: 2850, problemsSolved: 145, achievements: 12 },
    { rank: 2, username: "CodeMaster", score: 2720, problemsSolved: 138, achievements: 10 },
    { rank: 3, username: "ByteWizard", score: 2690, problemsSolved: 132, achievements: 9 },
    { rank: 4, username: "DataNinja", score: 2580, problemsSolved: 128, achievements: 8 },
    { rank: 5, username: "TechGuru", score: 2460, problemsSolved: 122, achievements: 7 },
    { rank: 6, username: "BinaryBoss", score: 2340, problemsSolved: 118, achievements: 6 },
    { rank: 7, username: "LogicLegend", score: 2290, problemsSolved: 115, achievements: 5 },
    { rank: 8, username: "PythonPro", score: 2180, problemsSolved: 109, achievements: 4 },
  ]);

  const getRankDisplay = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-400" />;
      case 2:
        return <Medal className="h-5 w-5 text-slate-300" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-muted-foreground font-medium">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="glass-morphism dark rounded-xl p-8">
          <div className="backdrop-blur-xl bg-black/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold flex items-center gap-3 text-gradient">
                <Trophy className="h-8 w-8 text-yellow-400" />
                Global Leaderboard
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 py-2 px-4 rounded-full">
                <Star className="h-4 w-4 text-yellow-400" /> Updated daily
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pointer-events-none" />
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b border-white/10">
                    <TableHead className="w-20 text-center">Rank</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right">Problems</TableHead>
                    <TableHead className="text-right">Achievements</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entries.map((entry) => (
                    <TableRow
                      key={entry.rank}
                      className={`
                        cursor-pointer 
                        transition-colors
                        hover:bg-white/5
                        ${entry.rank <= 3 ? 'font-medium' : ''}
                        ${entry.rank === 1 ? 'bg-yellow-500/10' : ''}
                        ${entry.rank === 2 ? 'bg-slate-300/10' : ''}
                        ${entry.rank === 3 ? 'bg-amber-600/10' : ''}
                      `}
                    >
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center">
                          {getRankDisplay(entry.rank)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={`
                            ${entry.rank === 1 ? 'text-yellow-400' : ''}
                            ${entry.rank === 2 ? 'text-slate-300' : ''}
                            ${entry.rank === 3 ? 'text-amber-600' : ''}
                          `}>
                            {entry.username}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-mono">{entry.score.toLocaleString()}</TableCell>
                      <TableCell className="text-right font-mono">{entry.problemsSolved}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          {entry.achievements}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
