import Nav from '../components/nav'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div>
      <div className="text-center">
        <Image width="300" height="300" src="/images/morcego.png"/>
        <div className="p-4">          
          <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
            How to became a Morcego in London and make some money
          </h1>
        </div>
        <Image width="300" height="300" src="/images/2r6D.gif"/>     
      </div>      
    </div>
  )
}
