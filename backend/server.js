const express = require('express');
const cors = require('cors');
const app = express();
// const db = require('./db');

app.use(cors());
app.use(express.json());

// Load routes
// require('./routes/api')(app);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
