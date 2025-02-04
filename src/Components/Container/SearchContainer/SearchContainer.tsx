import { Search, SearchDropdown } from '../../Core'
import { TabButtonGroup } from '../TabButtonGroup/TabButtonGroup'


export const SearchContainer = () => {
    return (
        <>
            <div className='w-full flex flex-row justify-between p-4 bg-white rounded-lg'>
                <Search />
                <SearchDropdown />
            </div>

            <div className='w-full flex flex-row justify-between mt-4 bg-transparent'>
                <TabButtonGroup />
            </div>
        </>
    )
}