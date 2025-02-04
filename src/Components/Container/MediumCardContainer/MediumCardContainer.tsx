import { MediumCard } from '../../Core/Cards/MediumCard'
import { mediumCardData } from '../../../data/data'



export const MediumCardContainer = () => {
    return (
        <div className='w-full justify-between flex flex-row'>
            {mediumCardData.map((card, key) => (
                <div className='w-[49%]' key={key}>
                    <MediumCard key={key} card={card} />
                </div>
            ))}
        </div>
    )
}