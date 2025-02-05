import { HotlineImage, StarBlackIcon } from '../../../assets'


export const SmallCardLandscape = () => {
    return (
        <div className='h-40 relative flex flex-row text-center center items-center p-3  overflow-hidden bg-cover bg-center rounded-2xl bg-gradient-to-br from-custom-orange-gradient-start to-custom-orange-gradient-end'>
            <div className='flex rounded-bl-4xl absolute right-0 top-0 bg-white'>
                <span className='py-1 px-2 flex flex-row font-semibold uppercase text-xs text-black' >
                    <img className='mr-1' src={StarBlackIcon} />
                    New
                </span>
            </div>
            <img className='h-20 w-28 rounded-lg' src={HotlineImage} />

            <div className='flex flex-col p-6'>
                <div className='w-72 text-start'>
                    <span className='font-semibold text-md'>John Doe</span>
                    <h3 className='font-extrabold text-2xl'>$1000 000</h3>
                    <span className='font-semibold text-md'>Win of the day</span>
                </div>
            </div>
        </div>
    )
}