import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { testValues } from "../../constants/constants";
import { ArrowDropDown, Search } from "@mui/icons-material";
import { AutoCompleteContainer } from "./style";

const AutoCompleteDropdown = () => {
    return (
        <AutoCompleteContainer
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={testValues.map((option) => option.name)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search input"
                    placeholder="Select account"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <ArrowDropDown />
                            </InputAdornment>
                        ),
                        type: 'search',
                    }}
                />
            )}
        />
    );
};

export default AutoCompleteDropdown;
