import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/universal">News</a></li>
                <li><a href="/universal">Opinion</a></li>
                <li><a href="/universal">Science</a></li>
                <li><a href="/universal">Life</a></li>
                <li><a href="/universal">Travel</a></li>
                <li><a href="/universal">Moneys</a></li>
                <li><a href="/universal">Art & Design</a></li>
                <li><a href="/universal">Sports</a></li>
                <li><a href="/universal">People</a></li>
                <li><a href="/universal">Health</a></li>
                <li><a href="/universal">Health</a></li>
            </ul>
        </div>
    )
}

export default Navbar