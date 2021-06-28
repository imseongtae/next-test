import styles from './Hello.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>hello world!</h2>        
      </main>
    </div>
  )
}
