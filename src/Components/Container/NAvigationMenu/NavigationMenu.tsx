import { navigationMenuData } from '../../../data/data'
import { MenuItem } from '../../Core'

export const NavigationMenu = () => {
    return (
        <div className='w-full bg-custom-navigation-background px-1 flex flex-row justify-between py-4'>
            {navigationMenuData.map((item, key) => (
                <MenuItem key={key} item={item} />
            ))}
        </div>
    )
}