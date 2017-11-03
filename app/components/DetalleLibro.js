import React from 'react'
import { connect } from 'react-redux'

class DetalleLibro extends React.Component {
  renderDetalle() {
    if (!this.props.libroActivo) {
      return <p style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', fontSize: '3em' }} >Seleccione un libro</p>
    }

    const { title, author } = this.props.libroActivo

    return (
      <div style={{
        display: 'flex',
        flex: 2,
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>Páginas</p>
        <p>Género</p>
      </div>
    )
  }
  render() {
    console.log('Props DetalleLibro', this.props)
    return this.renderDetalle()
  }
}

const mapStateToProps = (state) => {
  const { libroActivo } = state

  return {
    libroActivo
  }
}

const DetalleLibroConRedux = connect(
  mapStateToProps
)(DetalleLibro)

export default DetalleLibroConRedux
