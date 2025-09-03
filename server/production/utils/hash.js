"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHash = exports.createHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
// make hashing
const createHash = async (input) => {
    return bcrypt_1.default.hash(input, 10).then((hash) => {
        return hash;
    });
};
exports.createHash = createHash;
// checking hash
const checkHash = async (unHashInput, hashInput) => {
    return bcrypt_1.default.compare(unHashInput, hashInput).then((result) => {
        return result;
    });
};
exports.checkHash = checkHash;
