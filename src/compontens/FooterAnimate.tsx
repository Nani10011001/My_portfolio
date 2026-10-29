
import Footer from './Footer'

const FooterAnimate = () => {
  return (
    <div
      className='relative  h-screen  '
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
       
      <div className='w-full fixed inset-x-0 bottom-0 z-50'>
        <Footer />
      </div>
    </div>
  )
}

export default FooterAnimate
