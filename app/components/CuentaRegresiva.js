import React from 'react'
import BarraDeProgreso from './BarradeProgreso'

class CuentaRegresiva extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inicio: Date.now(),
      transcurrido: 0,
      duracion: 20
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      500
    )
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID)
    }
  }

  tick() {
    const { duracion, inicio } = this.state
    const ahora = Date.now()
    const transcurrido = (ahora - inicio) / 1000
    this.setState({ transcurrido })

    if (transcurrido >= duracion) {
      clearInterval(this.timerID)
      this.barra.setProgreso(100)
      this.timerID = null
    } else {
      const progreso = (transcurrido * 100) / duracion
      this.barra.setProgreso(progreso)
    }
  }

  render() {
    const { transcurrido, duracion } = this.state
    return (
      <div>
        <h2>
          {transcurrido.toFixed(0)} de {duracion} segundos
        </h2>
        <BarraDeProgreso ref={(ref) => { this.barra = ref }} />
      </div>
    )
  }
}

export default CuentaRegresiva
