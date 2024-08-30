"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material/");
const moment_1 = __importDefault(require("moment"));
const EntryToday = ({ entry, setEntry }) => {
    let today = (0, moment_1.default)().toDate().toDateString();
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            border: "1px solid black",
            width: "75vw",
            padding: "2rem",
            gap: "1rem",
        }, children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["Entry of ", today] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: '1rem' }, children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { id: "outlined-basic", label: "Outlined", variant: "outlined", placeholder: 'What happened today?', style: { width: "75%" }, onChange: (e) => setEntry(e.target.value) }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", children: "Save" })] })] }));
};
exports.default = EntryToday;
