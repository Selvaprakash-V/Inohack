"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = require("../services/userService");
const router = express_1.default.Router();
// Save generated prompt
router.post('/:uid/generatedPrompt', async (req, res) => {
    const uid = req.params.uid; // Ensure uid is a string
    const prompt = req.body.prompt; // Ensure prompt is a string
    try {
        await (0, userService_1.saveGeneratedPrompt)(uid, prompt);
        res.status(200).send({ message: 'Prompt saved successfully' });
    }
    catch (error) {
        console.error('Error saving generated prompt:', error);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
