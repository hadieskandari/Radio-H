import http from "http";
import path from "path";

import express, { Express, Response } from "express";
import { Server } from "socket.io";

const app: Express = express();
const PORT = 3001;
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (_, res: Response) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log(msg);
        io.emit('chat message', msg);
    });

});

server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
