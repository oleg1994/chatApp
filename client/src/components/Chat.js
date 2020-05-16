import React, { useState, useEffect } from 'react'
import socket from '../socket'
import { Button, Input, Comment, Avatar, Tooltip } from "antd";

const Chat = (props) => {
    const [message, setMessage] = useState('')
    const messageRef = React.useRef(null)
    const onSendMessage = () => {
        const { userName, roomId } = props.state
        socket.emit('ROOM:NEW_MESSAGE', {
            text: message,
            userName,
            roomId,
        })
        setMessage('')
    }

    useEffect(() => {
        messageRef.current.scrollTo(0,99999)
    }, [props.state.messages])



    return (
        <div className='chat'>
            <div className='chat_users'></div>
            <div>Users online: {props.state.users.length}</div>
            {props.state.users.map(name => {
                return (
                    <div>{name}</div>
                )
            })}
            <div className='chat_block' ref={messageRef}>
                {props.state.messages.length !== 0 ?
                    props.state.messages.map((userData, index) => {
                        console.log(props.state.messages)
                        return (
                            <Comment
                                author={<a>{userData.userName}</a>}
                                avatar={
                                    <Avatar
                                        src="https://cdn.discordapp.com/emojis/462242897987633152.png"
                                        alt="Han Solo"
                                    />
                                }
                                content={
                                    <p className='chat__message'>
                                        {userData.text}
                                    </p>
                                }
                                datetime={
                                    'today'
                                }
                            />
                        )
                    })
                    :
                    null}
            </div>
            <div>
                <Input.TextArea size={'middle'} value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button onClick={onSendMessage} type="primary" style={{ marginLeft: 8 }} >send</Button>
            </div>

        </div>
    )
}

export default Chat
