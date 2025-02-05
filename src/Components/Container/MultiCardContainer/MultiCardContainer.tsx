import { SmallCardLandscape, SmallCardPortrait } from '../../Core'

export const MultiCardContainer = () => {
    return (
        <div className='w-full'>
            <div className='w-[49%] flex flex-row justify-between'>
                <div className='w-[70%] flex flex-col justify-between mr-3'>
                    <SmallCardLandscape />
                    <SmallCardLandscape />
                </div>
                <div className=''>
                    <SmallCardPortrait />
                </div>
            </div>
        </div>
    )
}