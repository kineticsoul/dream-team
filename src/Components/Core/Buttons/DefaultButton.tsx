

export const DefaultButton = ({ text = 'More', background = 'bg-custom-yellowish-orange', textColor = 'text-black' }: { text?: string, background?: string, textColor?: string }) => {
    return (
        <button className={`${background} ${textColor} w-52 rounded-full inline-flex items-center justify-center py-3 px-7 text-center font-bold text-2xl`}>
            {text}
        </button>
    )
}