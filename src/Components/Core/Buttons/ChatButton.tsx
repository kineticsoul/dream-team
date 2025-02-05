import { ChatBubbleIcon } from '../../../assets'

export const ChatButton = () => {
    return (
        <button className={`bg-custom-chat-button-background relative w-52 rounded-lg inline-flex items-center justify-center py-3 px-7 text-center font-bold text-2xl`}>
            <img className='absolute -translate-y-3 top-0' src={ChatBubbleIcon} />
            Chat to us
        </button>
    )
}