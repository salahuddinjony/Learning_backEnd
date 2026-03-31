// Import the Express application from the app module
import { Server } from 'node:http';
import app from './app';

// Define the port number
const PORT = 3000;

// Declare a variable to hold the server instance
let server: Server;


async function bootStrapServer() {
    try {
        // Start the server and listen on the specified port
        server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
}

// Call the function to start the server
bootStrapServer();
