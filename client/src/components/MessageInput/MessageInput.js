import React,{useState} from 'react'
import './MessageInput.scss'
import { SmileOutlined, CameraOutlined, SendOutlined, AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';



const MessageInput = ({ }) => {
    const [value, setValue] = useState('')
    const openEmoji = () => {
        console.log('loladsa')
    }
    return (
        <div className="Message-Input">
            <Input onChange={(e)=>setValue(e.target.value)} size="large" placeholder="Write a message.." prefix={<SmileOutlined className='Message-Input__prefix' onClick={() => { console.log('popup emojis') }}  />} suffix={<SendOutlined className='Message-Input__prefix' onClick={() => { console.log('SEND MESSAGE') }} />} />
            <div className="Message-Input__actions" >
                <CameraOutlined  onClick={() => { console.log('send image') }}    />
                {!value ? <AudioOutlined  onClick={() => { console.log('record audio') }}  /> : null} 
            </div>
        </div>
    )
}

export default MessageInput

