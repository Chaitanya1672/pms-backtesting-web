import React from 'react'

const ChooseUsSection = () => {
  return (
    <section id="choose-us-section" style={{ padding: '0' }}>
      <div
        style={{
          padding: '60px 20px',
          backgroundColor: '#f1f1f1',
          margin: 'auto',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '40px',
          }}
        >
          Why Choose Us?
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
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

export default ChooseUsSection
