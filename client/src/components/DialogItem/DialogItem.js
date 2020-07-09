import React from 'react'
import { Avatar } from '../ComponentsExports'
import './DialogItem.scss'
import classNames from 'classnames'




const DialogItem = ({ messageData, unread }) => {
    console.log(messageData.user.fullname)
    return (
        <div className={classNames('dialogs__item', { 'dialogs__item--online': messageData.user.isOnline })} >
            <div className="dialogs__item-avatar">
                <Avatar imgSrc={''} name={messageData.user.fullname} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{messageData.user.fullname}</b>
                    <span>{messageData.created_at}</span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{messageData.text}</p>
                    {unread > 0 && <div className="dialogs__item-info-bottom-unreadCount">
                        {unread > 9 ? '9+' : unread}
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DialogItem

