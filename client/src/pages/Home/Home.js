import React from 'react'
import './Home.scss'
import { Message, DialogItem } from '../../components/ComponentsExports'
const Home = () => {
    return (
        <section className='home'>
            <div className="dialogs">
                <DialogItem
                    user={
                        {
                            fullname: 'johny cage',
                            isOnline:true,
                        }}
                        unread={3}
                />
                <DialogItem
                    user={
                        {
                            fullname: 'Kristine',
                            isOnline:false,
                        }}
                        unread={0}
                />
                  <DialogItem
                    user={
                        {
                            fullname: 'Peco',
                            isOnline:true,
                        }}
                        unread={11}
                />
                {/* <Dialogs users={[
                    {
                        user: {
                            fullname: 'johny cage',
                            avatar: null
                        },
                        message: {
                            text: 'hello me is johny and this is mock text',
                            created_at: new Date().toString()
                        }
                    }
                ]} /> */}
            </div>

            {/* <Message
                avatar={'https://cdn.discordapp.com/emojis/462242897987633152.png'}
                text={'lorem100 ак разработать свой чат на ReactJS, Redux + NodeJS, Socket.IO, MongoDB. Сделаем полноценный чат с возможностью загрузки фотографий, отправки аудиосообщений как в Telegram, VK, отправка Emoji (смайлов). Также со списком диалогов и поиска пользователей по E-Mail или имени.'}
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
            /> */}
        </section>
    )
}

export default Home
