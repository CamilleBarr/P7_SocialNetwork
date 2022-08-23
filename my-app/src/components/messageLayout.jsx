const messages = []

function Message() {
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={`${message}-${index}`}>{ message }</li>
            ))}
        </ul>
    )
}

export default Message