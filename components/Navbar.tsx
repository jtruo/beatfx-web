import Link from "next/link";

function Navbar() {
    return (
    <nav>
        <Link href="/">
            <a>
                <div className="logo"><h1>Beat FX</h1></div>
            </a>
        </Link>
        <Link href="about"><a>About</a></Link>
    </nav>);
}

export default Navbar;