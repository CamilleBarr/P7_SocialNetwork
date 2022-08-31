import React from 'react';
import {message} from './message';

function MessageList({ message, updateMessage }) {

const allMessages = [];
const message = {
    
}

const noMessageText = "Personne n'a encore laissé de message. Soyez le premier ?";



    return (
         
        <div>
           <h3>
                {allMessages <= 0 && noMessageText }
            </h3>
            <ul>
                {allMessages.map((message, index) => (
                    <li key={`${message}-${index}`}>{message}</li>
                ))}
            </ul>
        </div>
    )
}

export default MessageList
