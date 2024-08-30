"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Header = () => {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#cccccc ",
        }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h1", sx: {
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }, children: "My Diary" }) }));
};
exports.default = Header;
