import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import SignInForm from "@/components/forms/auth/SignInForm";

export default function SigninPage() {
    return <SignInForm />;
}