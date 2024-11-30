import { FilterCategory } from "../types/FilterTypes";

export const filters: FilterCategory[] = [
    {
      title: "Brand",
      options: [
        { label: "Mobil", value: "mobil" },
        { label: "Old World", value: "old-world" },
        { label: "Peak", value: "peak" },
      ],
    },
    {
      title: "Viscosity",
      options: [
        { label: "0W-20", value: "0w-20" },
        { label: "0W-30", value: "0w-30" },
        { label: "5W-20", value: "5w-20" },
        { label: "10W-30", value: "10w-30" },
        { label: "10W-40", value: "10w-40" },
      ],
    },
    {
      title: "Size",
      options: [
        { label: "1 Quart", value: "1-quart" },
        { label: "5 Quarts", value: "5-quarts" },
        { label: "1 Gallon", value: "1-gallon" },
        { label: "Bulk 1 Drum", value: "bulk-1-drum" },
        { label: "Bulk 1 Tote", value: "bulk-1-tote" },
        { label: "Half Quart", value: "half-quart" },
      ],
    },
  ];
