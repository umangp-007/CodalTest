export interface SortByDropdownProps {
    onSortChange: (sortOrder: "lowToHigh" | "highToLow") => void;
    currentSortOrder: "lowToHigh" | "highToLow";
  }
  