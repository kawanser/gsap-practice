import React from 'react'

const App = () => {
  return (
    <>
      <section className="hero font-display">
        <div className="hero-header">
          <h1>Kawanser</h1>
          <p>Learning one day at a time</p>
        </div>

        <div className="animated-icons">
          <div className="animated-icon icon-1">
            <img src="/images/icon1.png" alt="icon1" />
          </div>
          <div className="animated-icon icon-2">
            <img src="/images/icon2.png" alt="icon2" />
          </div>
          <div className="animated-icon icon-3">
            <img src="/images/icon3.png" alt="icon3" />
          </div>
          <div className="animated-icon icon-4">
            <img src="/images/icon4.png" alt="icon4" />
          </div>
          <div className="animated-icon icon-5">
            <img src="/images/icon5.png" alt="icon5" />
          </div>
        </div>

        <h1 className="animated-text">
          <div className="placeholder-icon"></div>
          <span className="text-segment">Show up</span>
          <div className="placeholder-icon"></div>
          <span className="text-segment">everyday.</span>
          <span className="text-segment">Learn new things.</span>
          <div className="placeholder-icon"></div>
          <span className="text-segment">For every effort</span>
          <div className="placeholder-icon"></div>
          <span className="text-segment">something will bloom.</span>
          <div className="placeholder-icon"></div>
          <span className="text-segment">Keep moving forward.</span>
        </h1>
      </section>

      <section className="outro">
          <h1>Do not break.</h1>
      </section>
    </>
  )
}

export default App