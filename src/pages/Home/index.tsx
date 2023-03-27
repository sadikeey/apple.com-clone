import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const bgHero: string = 'https://www.apple.com/v/home/ay/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_largetall_2x.jpg'

const Home: React.FC = () => {
  return (
    <section id='home' className='py-11 flex flex-col items-center w-full'>
      <p className='text-sm w-full px-6 pt-5 py-3 md:py-3 text-center'>Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.<Link  to='/iphone' className='text-blue-600'> Shop iPhone<FiChevronRight className='inline' /></Link></p>
      <div className='h-[100px] bg-red-400'>
        <img className='' src={bgHero} alt='hero-img' />
      </div>
    </section>
  )
}

export default Home
