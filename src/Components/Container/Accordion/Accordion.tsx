
import { AccordionItem } from '../../Core'
import { accordionData } from '../../../data/data'



export const Accordion = () => {
    return (
        <div className='w-full'>
            {accordionData.map((data, key) => (
                <AccordionItem key={key} header={data.header} content={data.content} />
            ))}
        </div>
    )
}