
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
    <div className="p-6 w-full h-full overflow-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="h-6 w-6 text-yellow-400" />
          Leaderboard
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Star className="h-4 w-4" /> Updated daily
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Rank</TableHead>
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
                hover:bg-white/5
                ${entry.rank <= 3 ? 'font-medium' : ''}
                ${entry.rank === 1 ? 'bg-yellow-500/5' : ''}
                ${entry.rank === 2 ? 'bg-slate-300/5' : ''}
                ${entry.rank === 3 ? 'bg-amber-600/5' : ''}
              `}
            >
              <TableCell>
                <div className="flex items-center justify-center">
                  {getRankDisplay(entry.rank)}
                </div>
              </TableCell>
              <TableCell className="font-medium">{entry.username}</TableCell>
              <TableCell className="text-right">{entry.score.toLocaleString()}</TableCell>
              <TableCell className="text-right">{entry.problemsSolved}</TableCell>
              <TableCell className="text-right">{entry.achievements}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Leaderboard;
