export const Button = ({ text = 'More' }: { text?: string }) => {
    return (
        <button className='bg-custom-yellowish-orange w-52 rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-black font-bold text-2xl'>
            {text}
        </button>
    )
}