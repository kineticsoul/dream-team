import { MediumCardProps } from '../../../types/types'
import { Button } from '../Button/Button'

export const MediumCard = ({ card }: { card: MediumCardProps }) => {
    return (
        <div className={`w-full relative flex flex-row text-start overflow-hidden bg-cover bg-center h-72 rounded-2xl ${card.background}`}>
            <div className={`flex rounded-bl-4xl absolute right-0 w-5/12  ${card.cardTaglineBackground}`}>
                <span className={`py-3 px-5 ${card.cardTaglineColor} flex flex-row font-semibold uppercase text-sm`} >
                    <img className='mr-2' src={card.cardTaglineIcon} />
                    {card.cardTagline}
                </span>
            </div>
            <div className='flex flex-col p-10'>
                <div className={`w-72 text-start ${card.cardTextColor}`}>
                    <h1 className='font-extrabold text-4xl mb-3'>
                        {card.header}
                    </h1>
                    <span className='font-normal text-xl uppercase'>{card.subtitle}</span>
                </div>
                <div className='mt-5'>
                    < Button />
                </div>
            </div>
            <div>
                <img src={card.character} />
            </div>
        </div>
    )
}