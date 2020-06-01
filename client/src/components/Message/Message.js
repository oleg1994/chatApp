import React from 'react'
import './Message.scss'
import classNames from 'classnames'

const Message = (props) => {





    return (
        <div className={classNames('message',
            {
                'message--ismine': props.isMine,
                'message--istyping': props.isTyping,
                'message--image':props.attachments && props.attachments.length === 1
            }
        )}>
            <div className="message__avatar">
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className="message__content">
                {(props.text || props.isTyping) &&
                    <div className="message__bubble">
                        {props.text && <p className="message__text">{props.text}</p>}
                        {props.isTyping && <div className="message__istyping">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>}

                    </div>}
                <div className="message__attachments">
                    {props.attachments && props.attachments.map(item => {
                        return (
                            <div className="message__attachments__item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        )
                    })}
                </div>
                {props.date && <span className='message__date'>{props.date}</span>}
            </div>
        </div>
    )
}

export default Message
