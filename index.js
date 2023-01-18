const app=require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3000;

server.listen(port, () =>{
    console.log('Server is running on port ${port}');

});

app.get('/', (req,res) => {
    let fileName = __dirname + '/public/index.html';
    console.log("sending the file: ", fileName)
    res.sendFile(fileName);
});


//when we connect, we get a message from the server "hey how are you?"
io.on('connection', (socket) => {
    console.log("user connected");
    socket.emit('message', {manny: 'hey how are you?'});
    socket.on('another event', (data) =>{
        console.log(data);
    })

    
})