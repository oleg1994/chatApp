import React, { useState, useRef, useEffect } from 'react'
import './Message.scss'
import wave from '../../media/wave-01.svg'
import playIcon from '../../media/playIcon.svg'
import pauseIcon from '../../media/pauseIcon.svg'
import timeConvertor from '../../utilities/timeConverter'
import {Avatar} from '../ComponentsExports'
import classNames from 'classnames'

const Message = (props) => {
    const [playerIcon, setplayerIcon] = useState(false)
    const [audioLength, setaudioLength] = useState(0)
    const [audioCurrentTime, setaudioCurrentTime] = useState(0)
    const audioElem = useRef(null)

    const togglePlay = () => {
        audioElem.current.play()
        if (!playerIcon) {
            audioElem.current.play()
        } else {
            audioElem.current.pause()
        }
    }

    useEffect(() => {
        if (audioElem.current) {
            audioElem.current.addEventListener(
                'playing',
                () => {
                    setplayerIcon(true);
                },
                false,
            );

            audioElem.current.addEventListener(
                'ended',
                () => {
                    setplayerIcon(false);
                },
                false,
            );

            audioElem.current.addEventListener(
                'pause',
                () => {
                    setplayerIcon(false);
                },
                false,
            );

            audioElem.current.addEventListener(
                'timeupdate',
                () => {
                    const duration = (audioElem.current && audioElem.current.duration) || 0;
                    setaudioCurrentTime(audioElem.current.currentTime)
                    setaudioLength((audioElem.current.currentTime / duration) * 100)
                },
                false,
            );
        }
    }, [])


    return (
        <div className={classNames('message',
            {
                'message--ismine': props.isMine,
                'message--istyping': props.isTyping,
                'message--image': props.attachments && props.attachments.length === 1,
                'message--is-audio': props.audio
            }
        )}>
            <div className="message__avatar">
                <Avatar imgSrc={props.avatar} name={props.fullname} />
            </div>
            <div className="message__content">
                {(props.audio || props.text || props.isTyping) &&
                    <div className="message__bubble">
                        {props.text && <p className="message__text">{props.text}</p>}
                        {props.isTyping && <div className="message__istyping">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>}
                        {props.audio && <div className="message__audio">
                            <audio ref={audioElem} src={props.audio} preload='auto' ></audio>
                            <div className="message__audio-progress" style={{ width: audioLength + '%' }}></div>
                            <div className="message__audio-info">
                                <div className="message__audio-btn" onClick={togglePlay}>
                                    <div>
                                        {playerIcon ? <img src={pauseIcon} alt="pause icon" /> : <img src={playIcon} alt="play icon" />}
                                    </div>
                                </div>
                                <div className="message__audio-file">
                                    <img src={wave} alt="audio wave" />
                                </div>
                                <span className="message__audio-duration">
                                    {timeConvertor(audioCurrentTime)}
                                </span>
                            </div>
                        </div>
                        }
                    </div>}
                {props.attachments && <div className="message__attachments">
                    {props.attachments.map(item => {
                        return (
                            <div className="message__attachments__item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        )
                    })}
                </div>

                }
                {props.date && <span className='message__date'>{props.date}</span>}
            </div>
        </div>
    )
}

export default Message
