
import { useState, useEffect } from 'react';
import { Check, DiamondIcon, CircleIcon, Square, SunIcon, MoonIcon } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Expert';
type Category = 'A' | 'B' | 'C';

interface Problem {
  id: number;
  title: string;
  category: Category;
  difficulty: Difficulty;
  selected: boolean;
}

const getDifficultyColor = (difficulty: Difficulty) => {
  const colors = {
    Easy: 'text-green-400',
    Medium: 'text-orange-400',
    Hard: 'text-purple-400',
    Expert: 'text-pink-500'
  };
  return colors[difficulty];
};

const getCategoryIcon = (category: Category) => {
  switch (category) {
    case 'A':
      return <DiamondIcon className="h-4 w-4 text-[#9b87f5]" />;
    case 'B':
      return <Square className="h-4 w-4 text-[#7E69AB]" />;
    case 'C':
      return <CircleIcon className="h-4 w-4 text-[#6E59A5]" />;
  }
};

const ProblemList = () => {
  const [problems, setProblems] = useState<Problem[]>([
    { id: 1, title: 'Two Sum', category: 'A', difficulty: 'Easy', selected: false },
    { id: 2, title: 'Add Two Numbers', category: 'A', difficulty: 'Medium', selected: false },
    { id: 3, title: 'Longest Substring', category: 'B', difficulty: 'Medium', selected: false },
    { id: 4, title: 'Median of Arrays', category: 'B', difficulty: 'Hard', selected: false },
    { id: 5, title: 'Regular Expression', category: 'C', difficulty: 'Expert', selected: false },
    { id: 6, title: 'Container With Water', category: 'A', difficulty: 'Medium', selected: false },
    { id: 7, title: 'Integer to Roman', category: 'B', difficulty: 'Easy', selected: false },
    { id: 8, title: 'Roman to Integer', category: 'C', difficulty: 'Hard', selected: false },
  ]);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1A1F2C';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [isDark]);

  const toggleProblem = (id: number) => {
    setProblems(problems.map(problem =>
      problem.id === id ? { ...problem, selected: !problem.selected } : problem
    ));
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'dark bg-[#1A1F2C] text-white' : 'bg-white text-black'}`}>
      <div className="p-6 w-full h-full overflow-auto">
        <div className="flex justify-end mb-4">
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
        <div className={`${isDark ? 'glass-morphism dark' : 'glass-morphism light'} rounded-lg p-4`}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Problem</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Difficulty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {problems.map((problem) => (
                <TableRow
                  key={problem.id}
                  className={`cursor-pointer ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
                  onClick={() => toggleProblem(problem.id)}
                >
                  <TableCell>
                    <div className="h-4 w-4 rounded border border-primary flex items-center justify-center">
                      {problem.selected && <Check className="h-3 w-3 text-primary" />}
                    </div>
                  </TableCell>
                  <TableCell>{problem.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(problem.category)}
                      {problem.category}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={getDifficultyColor(problem.difficulty)}>
                      {problem.difficulty}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProblemList;
