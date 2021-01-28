import Nav from '../components/nav'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div>
      <div className="text-center">
        <Image width="300" height="300" src="/images/morcego.png"/>
        <div className="p-4">          
          <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
            How to became a Morcego in London
          </h1>
          <h2 className="text-3xl text-gray-700 py-4">
            and make money 
          </h2>
          
        </div>
        <div className="grid gap-4 p-4">
            <a className="text-lg px-6 py-4 border-2 hover:bg-blue-900 border-blue-700 bg-blue-700 rounded text-white mr-4">What's that?</a>
            <a className="text-lg px-6 py-4 border-2 hover:bg-gray-700 hover:text-white border-gray-700 rounded mr-4">I'm already a Morcego</a>            
          </div>
             
      </div>      
    </div>
  )
}
