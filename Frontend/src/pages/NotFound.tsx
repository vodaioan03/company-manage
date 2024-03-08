import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound(){
  return (
    <main className='flex flex-col items-center justify-center sm:pb-20' >
        <h1>Oooops!</h1>
        <h3>Something went wrong!</h3>
        <h3><strong>Error 404 </strong>- Page not found</h3>
        <Link to='/' className='mt-4'>
          <Button text="Go back"/>
        </Link>
    </main>
  )
}