"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Header_1 = __importDefault(require("../components/LandingPage/Header"));
const EntryHistory_1 = __importDefault(require("../components/LandingPage/EntryHistory"));
const EntryToday_1 = __importDefault(require("../components/LandingPage/EntryToday"));
const LandingPage = () => {
    const [entry, setEntry] = (0, react_1.useState)('');
    return ((0, jsx_runtime_1.jsxs)("div", { style: { padding: "1rem" }, children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex" }, children: [(0, jsx_runtime_1.jsx)(EntryToday_1.default, { entry: entry, setEntry: setEntry }), (0, jsx_runtime_1.jsx)(EntryHistory_1.default, { entry: entry, setEntry: setEntry })] })] }));
};
exports.default = LandingPage;
