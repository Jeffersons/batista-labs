export default function Home() {
  return (
    <main className="container">
      <section>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>
          Hello, I’m Jefferson
        </h1>
        <p style={{ maxWidth: 600, marginTop: 16, lineHeight: 1.6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent vel dolor vel velit posuere tristique. 
          Curabitur non ipsum eget ligula facilisis convallis.
        </p>
      </section>

      <section style={{ marginTop: 48 }}>
        <h2 style={{ color: 'var(--color-secondary)', marginBottom: 16 }}>
          Experience
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <h3>BatistaLabs — Senior React Developer</h3>
            <p className="muted">2024 — Present</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing elit.</li>
              <li>Proin sit amet ligula non sapien faucibus commodo.</li>
            </ul>
          </div>

          <div>
            <h3>NindoFast — Senior Mobile Developer</h3>
            <p className="muted">2020 — 2024</p>
            <ul>
              <li>Vivamus porta, turpis a varius egestas, enim purus.</li>
              <li>Fusce faucibus augue in purus pretium elementum.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
