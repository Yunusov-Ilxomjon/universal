import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link href="/universal">News</Link></li>
                <li><Link href="/universal">Opinion</Link></li>
                <li><Link href="/universal">Science</Link></li>
                <li><Link href="/universal">Life</Link></li>
                <li><Link href="/universal">Travel</Link></li>
                <li><Link href="/universal">Moneys</Link></li>
                <li><Link href="/universal">Art & Design</Link></li>
                <li><Link href="/universal">Sports</Link></li>
                <li><Link href="/universal">People</Link></li>
                <li><Link href="/universal">Health</Link></li>
                <li><Link href="/universal">Health</Link></li>
            </ul>
        </div>
    )
}

export default Navbar