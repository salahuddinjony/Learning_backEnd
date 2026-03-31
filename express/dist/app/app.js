"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  import express module
const express_1 = __importDefault(require("express"));
// Create an Express application
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware to parse JSON bodies, use for all routes
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
// app.use(logger); // Use the logger middleware for all routes
// if i want to use this logger for specific route then i can do like this
// app.get('/specific-route', logger, (req: Request, res: Response) => {
//     res.send('This route uses the logger middleware');
// });
// Define a route for the root URL
app.get("/:userId/:username", logger, (req, res) => {
    res.statusCode = 200;
    // res.send('Hello, World!');
    console.log(req.params); // Log the route parameters (userId and username)
    console.log(req.query); // Log the query parameters
    res.json({
        status: 'success',
        statusCode: 200,
        message: 'The server is running...!',
        params: req.params, // Echo back the route parameters
        query: req.query, // Echo back the query parameters
        timestamp: new Date().toISOString()
    });
});
// Define a route to handle POST requests to /post-data
app.post('/post-data', logger, (req, res) => {
    res.statusCode = 201; // Created
    console.log(req.body); // Assuming you have middleware to parse JSON body
    res.json({
        status: 'success',
        statusCode: 201,
        message: 'Data received successfully!',
        data: req.body, // Echo back the received data
        createdAt: new Date().toISOString()
    });
});
// export the app for use in other modules (like server.ts)
exports.default = app;
//# sourceMappingURL=app.js.map