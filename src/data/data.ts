import { MediumCardProps, MenuItemProps, TabButtonProps } from '../types/types'
import { FireIcon, JackpotIcon, LiveCasinoIcon, MegawaysIcon, SlotsIcon, StarWhiteIcon, TableGamesIcon, CharacterChickenImage, CharacterAlienLadyImage, StarBlackIcon, RedTigerIcon, FreePlayIcon, ScratchCardsIcon, GameProviderIcon } from '../assets'


// Tab Button Group data
export const tabButtonsData: TabButtonProps[] = [{
    text: 'Popular',
    icon: FireIcon
},
{
    text: 'New',
    icon: StarWhiteIcon
},
{
    text: 'Jackpots',
    icon: JackpotIcon
},
{
    text: 'Slots',
    icon: SlotsIcon
},
{
    text: 'Live Casino',
    icon: LiveCasinoIcon
},
{
    text: 'Table Games',
    icon: TableGamesIcon
},
{
    text: 'Megaways',
    icon: MegawaysIcon
}]


// Content for Accordion
export const accordionData = [{
    header: "There’s bonus money in my JackPot Lounge account, but when I try to play a game, I get a message saying I have insufficient funds. What’s this about?",
    content: "The promotion from which you took your bonus offer determines how the bonus money can be used within the casino. Some bonus money may only be used on certain games, like slots or scratch cards. If you have any questions regarding this, please get in touch with our Live Chat team who will be able to assist you and pin point which games the bonus is applicable too."
},
{
    header: "My withdrawal is still pending – why?",
    content: "The promotion from which you took your bonus offer determines how the bonus money can be used within the casino. Some bonus money may only be used on certain games, like slots or scratch cards. If you have any questions regarding this, please get in touch with our Live Chat team who will be able to assist you and pin point which games the bonus is applicable too."
},
{
    header: "Help! I forgot my password.",
    content: "Well that sucks... Sorry, Please chat to us via the Live Chat and we will get you back to the fun"
}]



// Data for the MediumCard component
export const mediumCardData: MediumCardProps[] = [{
    background: 'bg-white',
    cardTagline: "What's the new update",
    cardTaglineBackground: 'bg-gradient-to-r from-custom-orange-gradient-start to-custom-dark-gradient-end',
    cardTaglineIcon: StarWhiteIcon,
    cardTaglineColor: 'text-white',
    cardTextColor: 'text-black',
    character: CharacterAlienLadyImage,
    header: 'Get your latest offers',
    subtitle: 'On book of dead',
}, {
    background: 'bg-gradient-to-b from-custom-orange-gradient-start to-custom-dark-gradient-end',
    cardTagline: "New games to play",
    cardTaglineIcon: StarBlackIcon,
    cardTextColor: 'text-white',
    cardTaglineColor: 'text-black',
    character: CharacterChickenImage,
    cardTaglineBackground: 'bg-white',
    header: 'New games for your enjoyment',
    subtitle: 'On book of dead',
}]


//  Data for navigation menu
export const navigationMenuData: MenuItemProps[] = [
    {
        label: 'New',
        icon: StarWhiteIcon
    },
    {
        label: 'Popular',
        icon: FireIcon
    },
    {
        label: 'Jackpots',
        icon: JackpotIcon
    },
    {
        label: 'Slots',
        icon: SlotsIcon
    },
    {
        label: 'Live Casino',
        icon: LiveCasinoIcon
    },
    {
        label: 'Table Games',
        icon: TableGamesIcon
    },
    {
        label: 'Red Tiger',
        icon: RedTigerIcon
    },
    {
        label: 'Scratch Cards',
        icon: ScratchCardsIcon
    },
    {
        label: 'Megaways',
        icon: MegawaysIcon
    },
    {
        label: 'Free Play',
        icon: FreePlayIcon
    },
    {
        label: 'Game Provider',
        icon: GameProviderIcon
    },
]