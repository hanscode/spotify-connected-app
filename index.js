const express = require('express');

const app = express();

// Routing format: app.HTTP_METHOD(PATH, HANDLER);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = 8888;

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
})
