import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import CredentialsForm from "@/components/forms/credentialsFrom";

export default function SigninPage() {
    return <CredentialsForm />;
}