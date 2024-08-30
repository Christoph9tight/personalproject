"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const EntryHistory = ({ entry, setEntry }) => {
    console.log("entry in the history tab", entry);
    return ((0, jsx_runtime_1.jsxs)("div", { style: { border: "1px solid black", width: "25vw" }, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Past Entries" }), (0, jsx_runtime_1.jsx)("li", { children: entry }), (0, jsx_runtime_1.jsx)("li", { children: "2" }), (0, jsx_runtime_1.jsx)("li", { children: "3" }), (0, jsx_runtime_1.jsx)("li", { children: "4" })] }));
};
exports.default = EntryHistory;
