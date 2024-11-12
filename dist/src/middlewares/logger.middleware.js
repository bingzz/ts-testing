"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loggerMiddleware = express_1.default.Router();
loggerMiddleware.use((req, res, next) => {
    console.log('Activity logged', { url: req.url });
});
exports.default = loggerMiddleware;
