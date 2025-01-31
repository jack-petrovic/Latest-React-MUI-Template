import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

const SearchableDropdown = ({
                              options,
                              label,
                              id,
                              selectedVal,
                              handleChange
                            }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const selectOption = (option) => {
    setQuery("");
    handleChange(option[label]);
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const getDisplayValue = () => {
    return query || selectedVal || "";
  };

  const filterOptions = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <Box className="relative h-10">
      <Box className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={getDisplayValue()}
          name="searchTerm"
          className="border border-gray-300 rounded p-2 text-red-700"
          onChange={(e) => {
            setQuery(e.target.value);
            handleChange(null);
          }}
          onClick={toggle}
        />
        <Box className={`arrow ${isOpen ? "open" : ""}`}></Box>
      </Box>

      {isOpen && (
        <Box className="absolute z-10 bg-white border border-gray-300 mt-1 rounded shadow-lg">
          {filterOptions(options).map((option, index) => (
            <Box
              onClick={() => selectOption(option)}
              className={`option p-2 hover:bg-gray-200 ${option[label] === selectedVal ? "bg-gray-300" : ""}`}
              key={`${id}-${index}`}
            >
              {option[label]}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchableDropdown;
