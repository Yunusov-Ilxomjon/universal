import Link from "next/link";
import "./header.css";
import Image from "next/image";



const Header = () => {
    return (
        <div className="header-container">

            <div className="header-top">

                <div className="header-button">
                    <button>|||</button>
                    <h2>Sections</h2>
                </div>

                <div className="header-search">
                    <Image src="/header-image/search.png" alt="Search Icon" width={20} height={20} />
                    <input className="search-input" type="text" placeholder="Search..." />
                </div>

                <div className="header-subscribe">
                    <Image src="/header-image/travel.png" alt="" width={60} height={40} />
                    <button className="subscribe-btn">Subscribe Now</button>
                    <p>3 month for $19</p>
                </div>

                <div className="signin">
                    <Image src="/header-image/contactuser.png" alt="" width={22} height={20} />
                    <button className="button-sign">
                        <h2>Sign In</h2>
                    </button>
                </div>
            </div>


            <div className="header-bottom">
                <div className="header-left">
                    <Image height={84} width={100} src="/header-image/head.jpg" alt="" />
                    <h2>Boston and New York</h2>
                </div>

                <div className="header-center">
                    <Link href="/"><h1>Universal</h1></Link>
                </div>

                <div className="header-right">
                    <h2>Monday, January 1, 2018</h2>
                    <div className="temperature">
                        <Image height={20} width={20} src="/header-image/sun.png" alt="" />
                        <h2>- 23 °C</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header