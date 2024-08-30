"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config({ path: "./config.env" });
async function connectToDatabase() {
    const Db = process.env.ATLAS_URI;
    if (!Db) {
        throw new Error("ATLAS_URI environment variable is not defined");
    }
    try {
        await mongoose_1.default.connect(Db);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}
exports.default = connectToDatabase;
