import './App.css'

function App() {
  return (
    <main className="coming-soon">
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <section className="card">
        <p className="badge">WgSoft · React Lab</p>
        <h1>Estamos construyendo algo pro 🚀</h1>
        <p className="subtitle">
          Esta web está en construcción. Muy pronto vas a ver aquí proyectos React
          con enfoque real: código limpio, performance y experiencia moderna.
        </p>

        <div className="actions">
          <a href="https://wgsoft.com.co" target="_blank" rel="noreferrer">
            Ir a wgsoft.com.co
          </a>
          <a
            href="https://github.com/williamgarciadev/learn-react"
            target="_blank"
            rel="noreferrer"
          >
            Ver repositorio
          </a>
        </div>

        <small>© {new Date().getFullYear()} WgSoft · Bogotá, Colombia</small>
      </section>
    </main>
  )
}

export default App
