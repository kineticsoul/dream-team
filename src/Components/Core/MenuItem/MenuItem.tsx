import { MenuItemProps } from '../../../types/types'



export const MenuItem = ({ item }: { item: MenuItemProps }) => {
    return (
        <div className='flex flex-row items-center content-center'>
            <img className='mr-1 w-6' src={item.icon} />
            <span className='uppercase font-semibold text-xs'>{item.label}</span>
        </div>
    )
}