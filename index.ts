const express = require('express');
const dotenv = require('dotenv');
import router from './src/modules/login/routes'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/login', router)

app.get('/', (req: any, res: any) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});