import React from 'react'
import './DialogItem.scss'
import classNames from 'classnames'

const checkAvatar = (avatar) => {
    if (avatar) {
        return <img src={avatar} alt="" />
    } else {
        // create circle with first letter of the name
    }
}


const DialogItem = ({ user, message, unread }) => {
    return (
        <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })} >
            <div className="dialogs__item-avatar">
                {checkAvatar('https://api.adorable.io/avatars/285x')}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>13:33 time</span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>На следующей неделе беру отпуск и с ПН начинаем разрабатывать.</p>
                    {unread > 0 && <div className="dialogs__item-info-bottom-unreadCount">
                        {unread > 9 ? '9+':unread}
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DialogItem

