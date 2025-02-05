import './App.css'
import { Accordion, Banner, Header, MediumCardContainer, MultiCardContainer, SearchContainer } from './Components/Container'

function App() {

  return (
    <>
      <div className="flex h-screen flex-col w-7xl">

        <div className='mb-20'>
          <Header />
        </div>


        <div className='mb-20'>
          <SearchContainer />
        </div>

        <div className='mb-20'>
          <MediumCardContainer />
        </div>

        <div className='mb-20'>
          <MultiCardContainer />
        </div>

        <div className='mb-20'>
          <Banner />
        </div>

        <div className='mb-20'>
          <Accordion />
        </div>
      </div>
    </>
  )
}

export default App
