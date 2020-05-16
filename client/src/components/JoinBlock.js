import React, { useState } from 'react'
import axios from 'axios'
import socket from '../socket'
import { Button, Input } from "antd";
import "antd/dist/antd.css";

const JoinBlock = (props) => {
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('enter details')
        }
        setLoading(true)
        const userData = {
            roomId,
            userName
        }
        await axios.post('/rooms', userData)
        props.onLogin(userData)


    }



    return (
        <div>
            <Input value={roomId} onChange={e => setRoomId(e.target.value)} type={'text'} placeholder={'Room ID'} size={'middle'} />
            <Input value={userName} onChange={e => setUserName(e.target.value)} type={'text'} placeholder={'Your name'} size={'middle'} />
            <Button type="primary" style={{ marginLeft: 8 }} onClick={onEnter} disabled={isLoading}>{isLoading ? 'Enter' : 'enter'}</Button>
        </div>
    )
}

export default JoinBlock
