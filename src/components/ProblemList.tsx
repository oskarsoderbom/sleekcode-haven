
import { useState } from 'react';
import { Check, DiamondIcon, CircleIcon, Square } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  const toggleProblem = (id: number) => {
    setProblems(problems.map(problem =>
      problem.id === id ? { ...problem, selected: !problem.selected } : problem
    ));
  };

  return (
    <div className="p-6 w-full h-full overflow-auto">
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
              className="cursor-pointer hover:bg-white/5"
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
  );
};

export default ProblemList;
