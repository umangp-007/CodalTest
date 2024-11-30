export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterCategory {
  title: string;
  options: FilterOption[];
}

export interface Filters {
  [key: string]: string[]; 
}


