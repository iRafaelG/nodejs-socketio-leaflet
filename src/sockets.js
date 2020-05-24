module.exports = io => {
    io.on('connection', (socket) => {
        socket.on('userCoors', coors => {
            socket.broadcast.emit('newUserCoors', coors);
        })
    })
}