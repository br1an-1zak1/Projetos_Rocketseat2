const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors'); // lib usada para permitir que IPs diferentes possam consumir esta API
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://admin:admin@cluster0-twcdj.mongodb.net/week10?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(1515);