export default function ChatRow(ChatAtributes:any) {
    return (
        <div className="chat-row" onClick={
            ()=>{
                ChatAtributes.messageLoader();
                ChatAtributes.chatSetter(ChatAtributes.chatId);
            }
        }>
            
        </div>
    );
}