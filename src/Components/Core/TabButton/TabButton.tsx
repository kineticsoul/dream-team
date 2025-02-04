import { TabButtonProps } from '../../../types/types'
import { LineDividerIcon } from '../../../assets'

export const TabButton = ({ text, icon }: TabButtonProps) => {
    return (
        <button className='bg-custom-light-blue rounded-md inline-flex items-center justify-center py-4 px-6 text-center text-base font-bold text-white uppercase hover:drop-shadow-xl hover:bg-gradient-to-br from-custom-orange-gradient-start to-custom-orange-gradient-end'>
            <span className='mr-[10px]'>
                <img src={icon} />
            </span>
            <span className='mr-[10px]'>
                <img src={LineDividerIcon} />
            </span>
            {text}
        </button>
    )
}