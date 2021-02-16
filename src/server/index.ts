const createServer = require('./server')

const PORT: number = Number(process.env.PORT) || 8050;

const app = createServer()
// START THE SERVER
app.listen(PORT);
console.log(`App listening on ${PORT}`);
