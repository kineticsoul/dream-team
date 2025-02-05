import { StarBlackIcon, HotlineImage } from '../../../assets'
import { DefaultButton } from '../Buttons/DefaultButton'


export const SmallCardPortrait = () => {
    return (
        <div className="w-64 relative rounded-2xl py-6 px-2 overflow-hidden bg-gradient-to-br from-custom-orange-gradient-start to-custom-orange-gradient-end">
            <div className='flex rounded-bl-4xl absolute right-0 top-0 bg-white'>
                <span className='py-1 px-2 flex flex-row font-semibold uppercase text-xs text-black' >
                    <img className='mr-1' src={StarBlackIcon} />
                    New
                </span>
            </div>
            <div className='w-full flex justify-center'>
                <img
                    alt=""
                    src={HotlineImage}
                    className="h-26 mt-3 rounded-lg object-cover"
                />
            </div>

            <div className='flex flex-col p-6'>
                <div className='w-44 text-start'>
                    <span className='font-semibold text-md'>John Doe</span>
                    <h3 className='font-extrabold text-2xl'>$1000 000</h3>
                    <span className='font-semibold text-md'>Win of the day</span>
                </div>
            </div>

            <DefaultButton text='View Games' background='bg-white' />
        </div>
    )
}