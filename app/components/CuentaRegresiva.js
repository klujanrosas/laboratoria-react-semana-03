import React from 'react'
import BarraDeProgreso from './BarraDeProgreso'

class CuentaRegresiva extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inicio: Date.now(), // millisegundos
      transcurrido: 0,
      duracion: 20 // segundos
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
    const transcurrido = (ahora - inicio) / 1000 // convertirlo a segundos

    // actualizar mi ESTADO
    this.setState({ transcurrido })

    if (transcurrido >= duracion) {
      clearInterval(this.timerID)
      this.ReferenciaBarraDeProgreso.setProgreso(100)
      this.timerID = null
    } else {
      const progreso = (transcurrido * 100) / duracion // calculo progreso
      this.ReferenciaBarraDeProgreso.setProgreso(progreso)
    }
  }

  render() {
    const { transcurrido, duracion } = this.state
    return (
      <div>
        <h2>
          {transcurrido.toFixed(0)} de {duracion} segundos
        </h2>
        <BarraDeProgreso ref={(referencia) => {
          this.ReferenciaBarraDeProgreso = referencia
        }}
        />
      </div>
    )
  }
}

export default CuentaRegresiva
