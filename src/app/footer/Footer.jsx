import './footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className="subscribe">
        <h1 style={{
          fontSize: '40px',
          color: '#262D33',

        }}>Subscribe now and get 20% off</h1>
        <form action="">
          <input type="text" placeholder='Enter your email' />
          <button className='subscrib-btn'>Subscribe</button>
        </form>
      </div>

      {/* ---------------------------- */}

      <div className="footer-nav">
        <div className="news-nav1">
          <h3>News</h3>
          <ul className='news-ul'>
            <li><a href="">Nation</a></li>
            <li><a href="">World</a></li>
            <li><a href="">Politics</a></li>
            <li><a href="">Solar Eclipse</a></li>
          </ul>
        </div>
        {/* -------------------- */}

        <div className="news-nav2">
          <h3>Moneys</h3>
          <ul className='news-ul'>
            <li><a href="">Markets</a></li>
            <li><a href="">Business</a></li>
            <li><a href="">Personal Finance</a></li>
            <li><a href="">Retirement</a></li>
            <li><a href="">Careers</a></li>
          </ul>
        </div>
        {/* -------------------- */}

        <div className="news-nav3">
          <h3>Arts</h3>
          <ul className='news-ul'>
            <li><a href="">Art & Design</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">People</a></li>
            <li><a href="">Video: Arts</a></li>
            <li><a href="">Theater</a></li>
          </ul>
        </div>
        {/* -------------------- */}

        <div className="news-nav4">
          <h3>Travel</h3>
          <ul className='news-ul'>
            <li><a href="">Destinations</a></li>
            <li><a href="">Flights</a></li>
            <li><a href="">Business Travel</a></li>
          </ul>
        </div>
        {/* -------------------- */}

        <div className="news-nav5">
          <h3>Sports</h3>
          <ul className='news-ul'>
            <li><a href="">Olympics</a></li>
            <li><a href="">Motor Sports</a></li>
            <li><a href="">Volleyball</a></li>
            <li><a href="">MMA</a></li>
            <li><a href="">Cycling</a></li>
          </ul>
        </div>
        {/* -------------------- */}

        <div className="news-nav6">
          <h3>Tech</h3>
          <ul className='news-ul'>
            <li><a href="">Tech</a></li>
            <li><a href="">Tech Columnists</a></li>
            <li><a href="">Tech Reviews</a></li>
            <li><a href="">Talking Tech</a></li>
          </ul>
        </div>
        {/* -------------------- */}

      </div>
      {/* --------------------- */}

      <div className="footer-contact">

        <div className="footer-contact-left">
          <div className="jnv"><h1 style={{
            fontSize: '20px',

          }}>JNV</h1></div>

          <ul style={{
            display: 'flex',
            gap: '30px'
          }}>
            <li><a href=""><h3>Contact Us</h3></a></li>
            <li><a href=""><h3>Work with Us</h3></a></li>
            <li><a href=""><h3>Advertise</h3></a></li>
            <li><a href=""><h3>Your Ad Choise</h3></a></li>
          </ul>

        </div>
        {/* -------------------- */}

        <div className="footer-contact-right">

          <a href="https://www.facebook.com" target='_blank'> <img src="/footer-image/facebook.png" alt="" width={40} /></a>
          <a href="https://www.twitter.com" target='_blank'> <img src="/footer-image/twitter.png" alt="" width={40} /></a>
          <a href="https://www.youtube.com" target='_blank'><img src="/footer-image/youtube.png" alt="" width={40} /></a>
          <a href="https://www.instagram.com" target='_blank'><img src="/footer-image/instagram.png" alt="" width={40} /></a>
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