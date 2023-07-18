import Container from "@/components/container/container";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem'}}>
          <Link href="/">
            Yelp Camp
          </Link>
        </h1>
        {children}
      </Container>
    </main>
  )
}