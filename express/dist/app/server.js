"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// Define the port number
const PORT = 3000;
// Declare a variable to hold the server instance
let server;
async function bootStrapServer() {
    try {
        // Start the server and listen on the specified port
        server = app_1.default.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Error starting the server:', error);
    }
}
// Call the function to start the server
bootStrapServer();
//# sourceMappingURL=server.js.map