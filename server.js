const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const path = require('path');
const generateGradient = require('./utilities/gradientGenerator');
console.log(generateGradient)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//sockets io
// creating http server and telling it to work with express
const server = require('http').Server(app);
// tell the server to work with sockets
// const io = require('socket.io')(server);




// const rooms = new Map()

// app.get('/rooms/:id', (req, res) => {
//     const roomId = req.params.id;
//     const obj = {
//         users: [...rooms.get(roomId).get('users').values()],
//         messages: [...rooms.get(roomId).get('messages').values()],
//     }
//     res.send(obj)
// })


// app.post('/rooms', (req, res) => {
//     const { roomId, userName } = req.body;
//     console.log(roomId)
//     if (!rooms.has(roomId)) {
//         rooms.set(roomId,
//             new Map([['users', new Map()],
//             ['messages', []]
//             ])
//         )
//         console.log(rooms)

//     }
//     res.send()
// })

// io.on('connection', socket => {
//     socket.on('ROOM:JOIN', ({ roomId, userName }) => {
//         socket.join(roomId);
//         //saves user
//         rooms.get(roomId).get('users').set(socket.id, userName);
//         const users = [...rooms.get(roomId).get('users').values()];
//         io.in(roomId).emit('ROOM:SET_USERS', users);

//         //sends the existing messages to the user that just entered 
//         const existingMessages = rooms.get(roomId).get('messages')
//         if(existingMessages.length !== 0){
//             io.in(roomId).emit(`ROOM:EXISTING_MESSAGES`,existingMessages)
//         }
//     })


//     socket.on('ROOM:NEW_MESSAGE', ({ roomId, userName,text }) => {
//          const data = {userName,text}
//         rooms.get(roomId).get('messages').push(data)
//         io.in(roomId).emit(`ROOM:NEW_MESSAGE`,data)

//     })

//     socket.on('disconnect', () => {
//         rooms.forEach((value, roomId) => {
//             if (value.get('users').delete(socket.id)) {
//                 const users = [...value.get('users').values()];
//                 socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
//                 console.log('socket disconnected', socket.id)
//             }
//         })
//     })

//     console.log('socket connected', socket.id)
// })












//server status
server.listen(port, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log('server port', port)
}
)