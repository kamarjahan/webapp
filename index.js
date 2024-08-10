// index.js

const express = require('express'); // Importing the Express framework
const app = express(); // Creating an instance of an Express app
const port = process.env.PORT || 3000; // Setting the port (Render will provide PORT as an environment variable)

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the index.html file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
