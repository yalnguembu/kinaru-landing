import NavLink from "./NavLink";

export default function Navbar()
{
    return (
        <nav className="navbar">
            <ul className="flex gap-5 items-center">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about-us">About Us</NavLink></li>
                <li><NavLink href="/pricing">Pricing</NavLink></li>
                <li><NavLink href="/reviews">Reviews</NavLink></li>
                <li><NavLink href="/blog">Blog</NavLink></li>
                <li><NavLink href="/contact">Contact</NavLink></li>
                <li><NavLink href="#" className="transition duration-300 bg-primary hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary rounded-lg text-white px-3 py-2">Download</NavLink></li>
            </ul>
        </nav>
    )
}