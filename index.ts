// Import the express in typescript file
import express from 'express'


const app: express.Application = express()
const port: number = 3000

app.get('/', (_req, _res) => {
  _res.send("DB write & read")
});


app.listen(port, () => {
  console.log(`DB http://localhost:${port}/`);
});
