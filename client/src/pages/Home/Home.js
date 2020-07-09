import React, { useState, useEffect } from 'react'
import { TeamOutlined, EllipsisOutlined, EditOutlined, SmileOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import classNames from 'classnames'

import './Home.scss'
import { Dialogs, Message } from '../../components/ComponentsExports'
import MessageInput from '../../components/MessageInput/MessageInput';
import Messages from '../../components/Messages/Messages';


let arrX = [
    {
        "_id": "5edea3eae4608b8dd984dc16",
        "lastMessage": {
            "text": "Ipsum fugiat reprehenderit nisi consectetur anim laborum. Sint voluptate laborum anim in. Ullamco laboris adipisicing id incididunt est aliqua veniam dolor Lorem.",
            "created_at": "time",
            "user": {
                "_id": "5edea3ea22fe60ec8b2aea12",
                "fullname": "Luna Carey",
                "avatar": null,
                "isOnline": true
            }
        }
    },
    {
        "_id": "5edea3eae4608b8dd984dc16",
        "lastMessage": {
            "text": "Ipsum fugiat reprehenderit nisi consectetur anim laborum. Sint voluptate laborum anim in. Ullamco laboris adipisicing id incididunt est aliqua veniam dolor Lorem.",
            "created_at": "time",
            "user": {
                "_id": "5edea3ea22fe60ec8b2aea12",
                "fullname": "huyy fdggd",
                "avatar": null,
                "isOnline": true
            }
        }
    },
    {
        "_id": "5edea3eae4608b8dd984dc16",
        "lastMessage": {
            "text": "Ipsum fugiat reprehenderit nisi consectetur anim laborum. Sint voluptate laborum anim in. Ullamco laboris adipisicing id incididunt est aliqua veniam dolor Lorem.",
            "created_at": "time",
            "user": {
                "_id": "5edea3ea22fe60ec8b2aea12",
                "fullname": "XEEE qqqq",
                "avatar": null,
                "isOnline": true
            }
        }
    },
    {
        "_id": "5edea3eae4608b8dd984dc16",
        "lastMessage": {
            "text": "Ipsum fugiat reprehenderit nisi consectetur anim laborum. Sint voluptate laborum anim in. Ullamco laboris adipisicing id incididunt est aliqua veniam dolor Lorem.",
            "created_at": "time",
            "user": {
                "_id": "5edea3ea22fe60ec8b2aea12",
                "fullname": "ERAR YYY",
                "avatar": null,
                "isOnline": true
            }
        }
    },
    {
        "_id": "5edea3eae4608b8dd984dc16",
        "lastMessage": {
            "text": "Ipsum fugiat reprehenderit nisi consectetur anim laborum. Sint voluptate laborum anim in. Ullamco laboris adipisicing id incididunt est aliqua veniam dolor Lorem.",
            "created_at": "time",
            "user": {
                "_id": "5edea3ea22fe60ec8b2aea12",
                "fullname": "GUY TERY",
                "avatar": null,
                "isOnline": false
            }
        }
    },
]



const Home = () => {
    const [Data, setData] = useState(arrX)


    const search = (value) => {
        if (value) {
            let filteredArr = Data.filter(dialog => dialog.lastMessage.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0)
            // if (filteredArr.length) {
                setData(filteredArr)
            // } else {
            //     setData(arrX)
            // }
        
        } else {
            setData(arrX)
        }

    }

    const online = true
    return (
        <section className='home'>
            <div className="chat">
                <div className="chat__dialogs">
                    <div className="chat__dialogs-header">
                        <div>
                            <TeamOutlined />
                            <span>List of dialogs</span>
                        </div>
                        <EditOutlined />
                    </div>
                    <div className="chat__dialogs-search">
                        <Input.Search
                            placeholder="Search"
                            onSearch={value => search(value)}
                            onChange={(e) => search(e.target.value)}
                        />
                    </div>
                    <Dialogs usersData={Data} />
                </div>
                <div className="chat__messages">
                    <div className="chat__messages-header">
                        <div />

                        <div className="chat__messages-header-center">
                            <b className="chat__messages-header-username">Johny cage</b>
                            <div className="chat__messages-header-status">
                                <span className={classNames('status', { 'status--online': online })}>
                                    {online ? 'online' : 'offline'}
                                </span>
                            </div>
                        </div>
                        <EllipsisOutlined style={{ fontSize: '22px' }} />
                    </div>
                    <div className="chat__messages-conversation">
                        <Messages messages={null}/>
                    </div>
                    <div className="chat__messages-input">
                        <MessageInput />
                    </div>
                </div>
            </div>




            {/*             
            <Dialogs usersData={[
                {
                    _id: Math.random(),
                    lastMessage: {
                        text: 'hello me is johny and this is mock text',
                        created_at: '11:11',
                        user: {
                            _id: 1,
                            fullname: 'johny cage',
                            avatar: null,
                            isOnline: true
                        }
                    }

                }
            ]} /> */}

        </section>
    )
}

export default Home
