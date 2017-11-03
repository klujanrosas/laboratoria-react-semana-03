import React from 'react'
import { connect } from 'react-redux'

import ItemLibro from './ItemLibro'

class ListaLibros extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div style={{
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column nowrap'
      }}
      >
        {this.props.libros.map(libro => {
          return (
            <ItemLibro key={libro.title} libro={libro} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { libros } = state

  return {
    libros,
  }
}

const ListaLibrosConRedux = connect(
  mapStateToProps
)(ListaLibros)

export default ListaLibrosConRedux
