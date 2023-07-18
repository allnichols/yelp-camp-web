import Image from 'next/image'
import styles from './page.module.css'
import MainHeader from '@/components/header/main-header'

export default function Home() {
  return (
    <>
      <MainHeader />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Yelp Camp</a>
        </h1>
      </main>
    </>

  )
}
