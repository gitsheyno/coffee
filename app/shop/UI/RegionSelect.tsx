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

interface RegionSelectProps {
  regions: string[];
  selectedRegion: string;
  handleRegionChange: (value: string) => void;
}

export default function RegionSelect({
  regions,
  selectedRegion,
  handleRegionChange,
}: RegionSelectProps) {
  // This converts the original select onChange to the format expected by Shadcn UI
  const onValueChange = (value: string) => {
    handleRegionChange(value);
  };

  return (
    <div className="space-y-2">
      <Label
        htmlFor="region-select"
        className="text-sm font-medium text-gray-700"
      >
        Region
      </Label>
      <Select value={selectedRegion} onValueChange={onValueChange}>
        <SelectTrigger
          id="region-select"
          className="w-full bg-gray-50 border-gray-300 focus:ring-amber-500"
        >
          <SelectValue placeholder="Select a region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {regions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
