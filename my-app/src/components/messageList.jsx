import React from 'react';
import {message} from './message';

function MessageList({ message, updateMessage }) {

const allMessages = [];

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
                {/*
                <ul>
                    {comments.map((comment, index) => (
                        <li key={`${comment}-${index}`}>{comment}</li>
                    ))}
                </ul>
                    */}
            </ul>

        </div>
    )
}

export default MessageList
