import Link from "next/link";

export default function MainHeader() {
    return (
        <header>
            <h1>
                <Link href="/">
                    Yelp Camp
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/campgrounds">
                            Campgrounds
                        </Link>
                    </li>
                    <li>
                        <Link href="/campgrounds/new">
                            New Campground
                        </Link>
                    </li>
                    <li>
                        <Link href="/register">
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link href="/logout">
                            Sign Out
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}