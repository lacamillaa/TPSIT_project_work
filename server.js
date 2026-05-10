const express = require('express');
const app = express();
const port = 3001;

require('dotenv').config();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});