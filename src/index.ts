import express from 'express';
import route from './routes/index.route';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// rutas
app.use('/', route);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
