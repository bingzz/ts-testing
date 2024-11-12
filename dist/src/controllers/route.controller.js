"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routeController = express_1.default.Router();
routeController.get('/', (req, res, next) => {
    res.send('Hello World');
    next();
});
routeController.get('/seed', (req, res, next) => {
    res.send('Seeding');
    next();
});
exports.default = routeController;
