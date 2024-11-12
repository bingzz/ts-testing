"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_controller_1 = __importDefault(require("./src/controllers/route.controller"));
const logger_middleware_1 = __importDefault(require("./src/middlewares/logger.middleware"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(route_controller_1.default);
// Middleware
app.use(logger_middleware_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
