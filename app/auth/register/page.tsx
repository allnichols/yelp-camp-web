import Link from "next/link";


export default function RegisterPage() {
    return (
        <main>
        <h1>Sign Up</h1>
        <form method="POST" action="/signup">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required />
            <button type="submit">Sign Up</button>
        </form>
        <p>
            Already have an account?{" "}
            <Link href="/login">
               Log In
            </Link>
        </p>
        </main>
    );
}