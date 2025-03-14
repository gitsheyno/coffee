"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface RoastLevelSelectProps {
  roastLevels: string[];
  selectedRoastLevel: string;
  handleRoastLevelChange: (value: string) => void;
}

export default function RoastLevelSelect({
  roastLevels,
  selectedRoastLevel,
  handleRoastLevelChange,
}: RoastLevelSelectProps) {
  // Convert the original select onChange to the format expected by Shadcn UI
  const onValueChange = (value: string) => {
    handleRoastLevelChange(value);
  };

  return (
    <div className="space-y-2">
      <Label
        htmlFor="roast-level-select"
        className="text-sm font-medium text-gray-700"
      >
        Roast Level
      </Label>
      <Select value={selectedRoastLevel} onValueChange={onValueChange}>
        <SelectTrigger
          id="roast-level-select"
          className="w-full bg-gray-50 border-gray-300 focus:ring-amber-500"
        >
          <SelectValue placeholder="Select a roast level" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {roastLevels.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
