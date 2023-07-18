import Link from "next/link";
import styles from './main-header.module.scss';
import Container from "../container/container";
export default function MainHeader() {
    return (
        <Container>
            <header className={styles.mainHeader}>
                <h1>
                    <Link href="/">
                        Yelp Camp
                    </Link>
                </h1>
                <nav>
                    {/* <ul>
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
                    </ul> */}
                </nav>
                <div className={styles.buttonContainer}>
                    <Link href="/auth/signin">
                        Sign In
                    </Link>
                    <Link href="/auth/register" className={styles.registerBtn}>
                        Sign Up
                    </Link>
                </div>
            </header>
        </Container>
    );
}