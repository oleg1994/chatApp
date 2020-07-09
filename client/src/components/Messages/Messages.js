import React, { useState, useRef, useEffect } from 'react'
import Message from '../Message/Message'
import './Messages.scss'
import { Empty } from 'antd';

const Messages = ({ messages }) => {

    return messages ?
        <div>
            <Message
                fullname={'michael zuravlev'}
                date={new Date().toString().substring(10, 21)}
                isMine={false}
                audio={'https://freesound.org/data/previews/499/499632_1265752-lq.mp3'}
            />
            <Message
                avatar={'https://b.thumbs.redditmedia.com/gIAPmy-tCdG6ERuJwXSBqcZMwEFZx_T9FTPta7inp3E.png'}
                fullname={'michael zuravlev'}
                text={'this 💡 is the other message'}
                date={new Date().toString().substring(10, 21)}
                isMine={true}
            />
            <Message
                fullname={'michael zuravlev'}
                text={'this 💡 is the other message'}
                date={new Date().toString().substring(10, 21)}
                isMine={true}
            />

            <Message
                avatar={'https://cdn.discordapp.com/emojis/462242897987633152.png'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi consectetur unde fugiat cum, maxime accusamus blanditiis fugit sint tempore aliquam, ea doloribus libero perferendis.'}
                date={new Date().toString().substring(10, 21)}
                isMine={false}
                attachments={[
                    {
                        filename: 'randomImage.jpeg',
                        url: 'https://picsum.photos/100/100?random=1'
                    },
                    {
                        filename: 'randomImage.jpeg',
                        url: 'https://picsum.photos/100/100?random=2'
                    },
                    {
                        filename: 'randomImage.jpeg',
                        url: 'https://picsum.photos/100/100?random=3'
                    },
                ]}
            />

            <Message
                avatar={'https://b.thumbs.redditmedia.com/gIAPmy-tCdG6ERuJwXSBqcZMwEFZx_T9FTPta7inp3E.png'}
                text={'this 💡 is the other message'}
                date={new Date().toString().substring(10, 21)}
                isMine={true}
            />
            <Message
                avatar={'https://cdn.discordapp.com/emojis/462242897987633152.png'}
                isMine={false}
                isTyping={false}
                attachments={[
                    {
                        filename: 'randomImage.jpeg',
                        url: 'https://picsum.photos/100/100?random=1'
                    }]}
            />
            <Message
                avatar={'https://cdn.discordapp.com/emojis/462242897987633152.png'}
                isMine={false}
                isTyping={true}
            />
        </div>
        :
        <Empty description={'History is empty'}/>
}

export default Messages
