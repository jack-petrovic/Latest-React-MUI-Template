import React from "react";
import AutoCompleteDropdown from "../../components/AutoCompleteDropdown";
import "./style.css";

const Login = () => {

    return (
        <div className="dropdown-container mt-[25vh]">
            <h1 className="font-bold text-3xl pb-5">Select account</h1>
            <p className="text-gray-500 text-xl pb-5">Use the dropdown to select where you want to login</p>
            <AutoCompleteDropdown />
            <div className="block">
                <button className="button button-black">Open dashboard</button>
                <button className="button button-white">Connect account</button>
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="font-medium">Select another platform</a>
        </div>
    )
}

export default Login;