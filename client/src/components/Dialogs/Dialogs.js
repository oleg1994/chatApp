import React from 'react'
import './Dialogs.scss'
import { DialogItem } from '../ComponentsExports'



const Dialogs = ({ usersData, userId }) => {
    return (
        <div className="dialogs">
            {
                usersData.map((data => {
                    return (
                        <DialogItem
                            key={data._id}
                            messageData={data.lastMessage}
                            unread={3}
                            isMe={data.lastMessage._id === userId}
                        />
                    )
                }))
            }
        </div>
    )
}

export default Dialogs

