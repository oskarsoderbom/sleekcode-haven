
import MarkdownPreview from "@uiw/react-markdown-preview";
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const markdown = `
# Two Sum

Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers in the array such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Example 1:

\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
\`\`\`

## Constraints:

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.
`;

const hint = "Try using a hash map to store the numbers you've seen. For each number, check if its complement (target - current number) exists in the hash map.";

export default function ProblemDescription() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="h-full">
      <div className="p-6 space-y-6">
        <div className="prose prose-invert max-w-none">
          <MarkdownPreview 
            source={markdown}
            className="!bg-transparent"
            style={{
              backgroundColor: 'transparent',
              color: '#E2E8F0'
            }}
          />
        </div>
        
        <div className="rounded-lg bg-white/[0.03] border border-white/10">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between p-4 text-slate-200 hover:text-emerald-400 hover:bg-emerald-500/10"
            onClick={() => setShowHint(!showHint)}
          >
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span>Hint</span>
            </div>
            {showHint ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          
          {showHint && (
            <div className="p-4 text-sm text-slate-300 border-t border-white/10">
              {hint}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
