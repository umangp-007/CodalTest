import React, { useState } from "react";
import "./Filter.scss";
import { FilterCategory } from "../../types/FilterTypes";

interface FilterProps {
  filters: FilterCategory[];
  handleApplyFilters: (selectedFilters: Record<string, string[]>) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, handleApplyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {}
  );

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const categoryFilters = prev[category] || [];
      if (categoryFilters.includes(value)) {
        return {
          ...prev,
          [category]: categoryFilters.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [category]: [...categoryFilters, value],
        };
      }
    });
  };

  const handleClearAll = () => {
    setSelectedFilters({});
  };

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="filterContainer">
      <h5 className="d-none d-lg-block">Filters</h5>
      <div className="d-flex align-items-center justify-content-between mt-4 mb-3">
        <div className="fw-bold">Active Filters</div>
        <div>
          <button
            className="btn btn-link text-decoration-none text-danger"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Active Filters */}
      <div className="activeFilters mb-5">
        {Object.entries(selectedFilters).flatMap(([key, values]) =>
          values.map((value) => (
            <span key={value} className="activeFiltersList me-2">
              {value}
              <button
                type="button"
                className="btn-close"
                aria-label="Remove"
                onClick={() => {
                  const updatedFilters = { ...selectedFilters };
                  Object.keys(updatedFilters).forEach((key) => {
                    updatedFilters[key] = updatedFilters[key].filter(
                      (filterValue) => filterValue !== value
                    );
                    if (updatedFilters[key].length === 0) {
                      delete updatedFilters[key];
                    }
                  });
                  setSelectedFilters(updatedFilters);
                  handleApplyFilters(updatedFilters);
                }}
              ></button>
            </span>
          ))
        )}
      </div>

      {/* Filter Categories */}
      {filters.map((filter) => (
        <div key={filter.title} className="mb-3">
          <div
            className="d-flex justify-content-between align-items-center"
            role="button"
            onClick={() => toggleCategory(filter.title)}
          >
            <h6>{filter.title}</h6>
            <span>
              <i
                className={`bi ${
                  openCategories[filter.title]
                    ? "bi bi-dash-lg"
                    : "bi bi-plus-lg"
                }`}
              ></i>
            </span>
          </div>

          <div
            className={`collapse ${openCategories[filter.title] ? "show" : ""}`}
          >
            <ul className="list-unstyled">
              {filter.options.map((option) => (
                <li
                  key={option.value}
                  className={`filter-option ${
                    selectedFilters[filter.title]?.includes(option.value)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleFilterChange(filter.title, option.value)}
                >
                  <div className="filter-item">{option.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
