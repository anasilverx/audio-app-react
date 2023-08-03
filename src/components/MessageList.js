import Message from "./Message";

const MessageList = (props) => {
    const {listOfMessages} = props;

    const allMessages = listOfMessages.map((message) => {
        return (
            <Message
                title = {message.title}
                audio_message = {message.audio_message}
            />
        )
    })
    return(
        <div>
            <h1>Messages</h1>
            <div>{allMessages}</div>
        </div>
    )
};

export default MessageList