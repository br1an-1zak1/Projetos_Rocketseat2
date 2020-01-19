const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // lib usada para permitir que IPs diferentes possam consumir esta API
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-twcdj.mongodb.net/week10?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(1515);