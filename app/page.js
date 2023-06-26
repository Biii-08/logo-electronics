import Image from 'next/image'
import HomePage from './modules/mainpage/Homepage'
import Productcard from './modules/mainpage/Productcard'
import Carditem from './components/Carditem'


export default function Home() {
  return (
    <div  className="bg-[#380D41]" >
        
        <HomePage/>
        <Carditem/>
        <Productcard/>

    

    </div>

  )
}