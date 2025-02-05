import { useState } from 'react'
import { NavigationMenu } from '../NavigationMenu/NavigationMenu'
import { MenuIcon } from '../../../assets'
import { Drawer } from '../../Core'



export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-full'>
            <div className='w-full p-4 justify-between flex flex-row bg-gradient-to-r from-custom-orange-gradient-start to-custom-dark-gradient-end h-20'>
                <div className='w-54 flex-row flex justify-between items-center'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <img className='w-6 mr-10' src={MenuIcon} />
                    </button>
                    <div>
                        <p className='text-left font-bold text-2xl leading-6'>Dream Spins <span className='text-custom-orange-gradient-end'>Casino</span></p>
                    </div>
                </div>
            </div>
            <div className='w-full h-1.5 bg-gradient-to-r from-custom-orange-gradient-start to-custom-orange-gradient-end'></div>
            <NavigationMenu />

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}