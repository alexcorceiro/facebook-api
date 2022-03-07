
import route from './route/api/main';
import { catchError } from './middlewares/catchError.midleware';
const express = require('express');
const app = express();

app.use(express.json());
app.use(route);
app.use(catchError())




app.listen(3000, () => {
    console.log("serveur sur ecoute port 3000")
})