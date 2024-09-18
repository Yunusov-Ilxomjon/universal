import './header.css';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='header-container'>

            <div className="header-top">

                <div className="header-button">
                    <button style={{ width: '20px', height: '20px', rotate: ' 90deg', color: 'gray' }}>|||</button>
                    <h2 style={{ fontSize: '14px' }}>Sections</h2>
                </div>

                <div className="header-search">
                    <Image src="/header-image/search.png" alt="Search Icon" width={20} height={20} />
                    <input className='search-input' type="text" placeholder='Search...' />
                </div>

                <div className="header-subscribe">
                    <Image src="/header-image/travel.png" alt="" width={60} height={40} />
                    <button className='subscribe-btn'>Subscribe Now</button>
                    <p style={{ color: 'gray' }}>3 month for $19</p>
                </div>

                <div className="signin">
                    <Image src="/header-image/contactuser.png" alt="" width={22} height={20} />
                    <button className='button-sign'><h2 style={{ fontSize: '14px', color: '#4B5157' }}>Sign In</h2></button>
                </div>

            </div>


            <div className="header-bottom">
                <div className="header-left">\
                    <img height={75} src="data:image/jpeg;base64,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" alt="" />
                    <h2 style={{ fontSize: '14px', color: '#4B5157' }}>Boston and New York</h2>
                </div>

                <div className="header-center">
                    <a href="/"><h1 style={{ fontSize: '40px', color: '#262D33' }}>Universal</h1></a>

                </div>

                <div className="header-right">
                    <div className="data">
                        <h2 style={{ fontSize: '14px', color: '#4B5157' }}>Monday, January 1, 2018</h2>
                    </div>
                    <div className="temperature">
                        <img width={20} src="/header-image/sun.png" alt="" />
                        <h2 style={{ fontSize: '14px', color: '#4B5157' }}>- 23 °C</h2>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Header