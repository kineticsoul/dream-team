import { TabButton } from '../../Core'
import { tabButtonsData } from '../../../data/data'

export const TabButtonGroup = () => {
    return (
        <div className='w-full flex flex-row justify-between'>
            {tabButtonsData.map((button, key) => (
                <TabButton key={key} text={button.text} icon={button.icon} />
            ))}
        </div>
    )
}