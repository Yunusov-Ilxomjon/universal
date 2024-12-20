import "./navbar.css"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link href="/universal">News</Link></li>
                <li><Link href="/">Opinion</Link></li>
                <li><Link href="/universal">Science</Link></li>
                <li><Link href="/">Life</Link></li>
                <li><Link href="/universal">Travel</Link></li>
                <li><Link href="/">Moneys</Link></li>
                <li><Link href="/">Art & Design</Link></li>
                <li><Link href="/universal">Sports</Link></li>
                <li><Link href="/">People</Link></li>
                <li><Link href="/universal">Health</Link></li>
                <li><Link href="/">Health</Link></li>
            </ul>
        </div>
    )
}

export default Navbar