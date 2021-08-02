import Link from "next/link";

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/#/landing">
                    <a>Landing</a>
                </Link>
            </li>
            <li>
                <Link href="/#/tv">
                    <a>tv</a>
                </Link>
            </li>
            <li>
                <Link href="/#/watch">
                    <a>watch</a>
                </Link>
            </li>
            
        </ul>
    )
}

export default Navigation;