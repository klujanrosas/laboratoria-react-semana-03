import React, { Component } from 'react'

class BarradeProgreso extends Component {
  constructor(props) {
    super(props)

    this.state = {
      progreso: 0
    }
  }

  setProgreso(progreso) {
    this.setState({ progreso })
  }

  render() {
    const { progreso } = this.state
    const backgroundColor =
      progreso <= 50 ?
        'green' :
        progreso <= 80 ?
          'yellow' :
          'red'

    const style = {
      width: `${progreso}%`,
      backgroundColor,
      textAlign: 'center'
    }

    return (
      <div>
        <div style={style}>
          <h3>
            {progreso.toFixed(1)}%
          </h3>
        </div>
      </div>
    )
  }
}

export default BarradeProgreso
