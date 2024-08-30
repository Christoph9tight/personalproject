"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LandingPage_1 = __importDefault(require("./client/pages/LandingPage"));
function App() {
    return (0, jsx_runtime_1.jsx)(LandingPage_1.default, {});
}
exports.default = App;
