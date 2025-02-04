import { FullWidthCard } from '../../Core'
import { BannerImage } from '../../../assets'

export const Banner = () => {
    return (
        <div className='w-full rounded-2xl flex'>
            <FullWidthCard banner={BannerImage} />
        </div>
    )
}