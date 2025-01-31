import React from "react";
import AutoCompleteDropdown from "../../components/AutoCompleteDropdown";
import "./style.css";
import { Box, Button, Link, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box className="flex items-center justify-center min-h-screen">
      <Box className="container mx-auto flex flex-col items-center justify-center p-6">
        <Typography variant="h2" className="text-3xl font-bold pb-5">
          Select Account
        </Typography>
        <Typography className="text-gray-500 text-xl pb-5 text-center">
          Use the dropdown to select where you want to login
        </Typography>
        <AutoCompleteDropdown />

        <Box className="justify-center space-x-4 mt-6">
          <Button className="bg-[#222222] text-white hover:bg-gray-800 transition duration-200 px-6 py-2 rounded">
            Open Dashboard
          </Button>
          <Button className="bg-white text-[#222222] border border-[#222222] hover:bg-gray-200 transition duration-200 px-6 py-2 rounded">
            Connect Account
          </Button>
        </Box>

        <Link to="" className="font-medium text-blue-600 hover:underline mt-4">
          Select Another Platform
        </Link>
      </Box>
    </Box>
  )
}

export default Login;