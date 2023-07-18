"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./SignInForm.module.scss";

export default function SignInForm() {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {


            console.log('client', data.get('email'), data.get('password'));
        } catch (error) {
            console.error("An unexpected error", error);
        }
    }

    return (
        <div className={styles.form_container}>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account?{" "}
                <Link href="/register">
                    Sign Up
                </Link>
            </p>
        </div>

    );
}

export async function getServerSideProps(context: any) {
    return {
        props: {
            // props for your component
        },
    };
}