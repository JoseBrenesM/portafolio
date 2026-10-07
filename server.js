// Local portfolio preview. Production API remains in api/server.js.
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, '127.0.0.1', () => {
    console.log(`Portfolio: http://127.0.0.1:${port}`);
});
