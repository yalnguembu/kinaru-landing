import NavLink from "./NavLink";

export default function Navbar()
{
    return (
        <nav className="navbar flex items-center gap-3">
            <ul className="flex gap-5 items-center text-black">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about-us">About Us</NavLink></li>
                <li><NavLink href="/pricing">Pricing</NavLink></li>
                <li><NavLink href="/reviews">Reviews</NavLink></li>
                <li><NavLink href="/blog">Blog</NavLink></li>
                <li><NavLink href="/contact">Contact</NavLink></li>
            </ul>
            <NavLink href="#" className="btn-action">Download</NavLink>
        </nav>
    )
}