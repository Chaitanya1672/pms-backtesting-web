import styles from '../styles/ChooseUsSection.module.css'

export default function ChooseUsSection() {
  return (
    <section id="choose-us-section" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <div className={styles.grid}>
          <div>
            <h3>Precision-Driven Analysis</h3>
            <p>
              Our platform ensures that your strategies are tested against
              real-world market data with unmatched precision.
            </p>
          </div>
          <div>
            <h3>Streamlined Simplicity</h3>
            <p>
              Our user-friendly interface is designed to provide a seamless
              experience, allowing you to focus on refining strategies.
            </p>
          </div>
          <div>
            <h3>Actionable Insights</h3>
            <p>
              With in-depth metrics like the Sharpe ratio and max drawdown, our
              platform offers the analysis you need to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
