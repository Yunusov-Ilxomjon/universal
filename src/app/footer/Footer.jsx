import './footer.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className="subscribe">
        <h1>Subscribe now and get 20% off</h1>
        <form >
          <input type="text" placeholder='Enter your email' />
          <button className='subscrib-btn'>Subscribe</button>
        </form>
      </div>



      <div className="footer-nav">
        <div className="news-nav1">
          <h3>News</h3>
          <ul className='news-ul'>
            <li><Link href="/">Nation</Link></li>
            <li><Link href="/">World</Link></li>
            <li><Link href="/">Politics</Link></li>
            <li><Link href="/">Solar Eclipse</Link></li>
          </ul>
        </div>


        <div className="news-nav2">
          <h3>Moneys</h3>
          <ul className='news-ul'>
            <li><Link href="/">Markets</Link></li>
            <li><Link href="/">Business</Link></li>
            <li><Link href="/">Personal Finance</Link></li>
            <li><Link href="/">Retirement</Link></li>
            <li><Link href="/">Careers</Link></li>
          </ul>
        </div>


        <div className="news-nav3">
          <h3>Arts</h3>
          <ul className='news-ul'>
            <li><Link href="/">Art & Design</Link></li>
            <li><Link href="/">Movies</Link></li>
            <li><Link href="/">People</Link></li>
            <li><Link href="/">Video: Arts</Link></li>
            <li><Link href="/">Theater</Link></li>
          </ul>
        </div>


        <div className="news-nav4">
          <h3>Travel</h3>
          <ul className='news-ul'>
            <li><Link href="/">Destinations</Link></li>
            <li><Link href="/">Flights</Link></li>
            <li><Link href="/">Business Travel</Link></li>
          </ul>
        </div>


        <div className="news-nav5">
          <h3>Sports</h3>
          <ul className='news-ul'>
            <li><Link href="/">Olympics</Link></li>
            <li><Link href="/">Motor Sports</Link></li>
            <li><Link href="/">Volleyball</Link></li>
            <li><Link href="/">MMA</Link></li>
            <li><Link href="/">Cycling</Link></li>
          </ul>
        </div>


        <div className="news-nav6">
          <h3>Tech</h3>
          <ul className='news-ul'>
            <li><Link href="/">Tech</Link></li>
            <li><Link href="/">Tech Columnists</Link></li>
            <li><Link href="/">Tech Reviews</Link></li>
            <li><Link href="/">Talking Tech</Link></li>
          </ul>
        </div>
      </div>


      <div className="footer-contact">

        <div className="footer-contact-left">
          <div className="jnv">
            <h1>JNV</h1>
            </div>

          <ul>
            <li><Link href="/"><h3>Contact Us</h3></Link></li>
            <li><Link href="/"><h3>Work with Us</h3></Link></li>
            <li><Link href="/"><h3>Advertise</h3></Link></li>
            <li><Link href="/"><h3>Your Ad Choise</h3></Link></li>
          </ul>

        </div>


        <div className="footer-contact-right">

          <Link href="https://www.facebook.com" target='_blank'> <Image src="/footer-image/facebook.png" width={40} height={40} /></Link>
          <Link href="https://www.twitter.com" target='_blank'> <Image src="/footer-image/twitter.png" width={40} height={40} /></Link>
          <Link href="https://www.youtube.com" target='_blank'><Image src="/footer-image/youtube.png" width={40} height={40} /></Link>
          <Link href="https://www.instagram.com" target='_blank'><Image src="/footer-image/instagram.png" width={40} height={40} /></Link>
        </div>
      </div>

      <div className="footer-contact-bottom">
        <p style={{
          fontSize: '14px',
          color: '#939699',
          width: '750px'
        }}>
          Universal's business concept is to offer fashion and quality at the best price in a sustainable way. Universal has since it was founded in 2015 grown into one of the world's leading fashion companies.
        </p>
        <p style={{
          fontSize: '14px',
          color: '#939699',
        }}>
          © 2019 Universal UI Kit
        </p>
      </div>






    </div>
  )
}

export default Footer