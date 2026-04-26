import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>MyProduct</h2>
        <button className="btn">Get Started</button>
      </nav>

      <section className="hero">
        <h1>Deploy Websites in One Click 🚀</h1>
        <p>
          An autonomous AI agent that handles your entire deployment process —
          no configs, no headaches.
        </p>
        <button className="cta">Try Now</button>
      </section>

      <section className="features">
        <div className="card">
          <h3>⚡ Fast</h3>
          <p>Deploy your site instantly with zero manual setup.</p>
        </div>
        <div className="card">
          <h3>🤖 Autonomous</h3>
          <p>The AI agent takes care of everything for you.</p>
        </div>
        <div className="card">
          <h3>🔒 Reliable</h3>
          <p>Secure and consistent deployment every time.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 MyProduct. Built with ❤️</p>
      </footer>
    </div>
  );
}

export default App;