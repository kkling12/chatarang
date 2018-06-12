import React from 'react';

import Message from './Message';
const MessageList = () => {
    const messages = [
        {
            id: 1,
            userName: 'tWade',
            body: 'Chatting up a storm, dawg',
        },
        {
            id: 2,
            userName: 'kKling',
            body: 'Yeah you is, b',
        },
    ];

    return (
        <div className = "MessageList">
            {messages.map(msg => 
            <Message key = {msg.id} message = {msg}/>
            )}
        </div>
    )
}

export default MessageList;