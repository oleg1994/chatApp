import React from 'react';
import socket from './socket'
import reducer from './reducer'
import './styles/App.scss';
import JoinBlock  from './components/JoinBlock';
import Chat from './components/Chat';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    entered:false,
    roomId:null,
    userName:null,
    users:[],
    messages:[]
  });

  const onLogin = (userData)=>{
    console.log(userData)
    dispatch({
      type: 'ENTERED',
      payload:userData
    })
    socket.emit('ROOM:JOIN', userData)
  }

  const setUsers = (users) =>{
    dispatch({
      type:'SET_USERS',
      payload:users
    })
  }

React.useEffect(() => {
  socket.on('ROOM:SET_USERS',setUsers)
  socket.on('ROOM:NEW_MESSAGE',message=>{
      dispatch({
        type:'NEW_MESSAGE',
        payload:message,
      })
  })
  socket.on('ROOM:EXISTING_MESSAGES',messages=>{
    console.log([...messages])
      dispatch({
        type:'EXISTING_MESSAGES',
        payload:messages,
      })
  })


}, [])
  
  
  return (
    <div className="App">
      <div className="Wrapper">
        {!state.entered ? <JoinBlock  onLogin={onLogin}/>:<Chat state={state} />}
      </div>
    </div>
  );
}

export default App;
