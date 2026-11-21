import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.badge}>🔥 #1 Trending Drama</span>

        <h1 className={styles.title}>
          My Billionaire's
          <br />
          Secret Daughter
        </h1>

        <p className={styles.description}>
          Twenty years after being abandoned, Ava returns with one goal...
          expose the family that betrayed her.
        </p>

        <div className={styles.meta}>
          <span>⭐ 4.9</span>
          <span>🎬 10 Episodes</span>
          <span>⏱ 2–3 min each</span>
        </div>

        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            ▶ Continue Watching
          </button>

          <button className={styles.secondaryButton}>
            + My List
          </button>
        </div>
      </div>
    </section>
  );
}