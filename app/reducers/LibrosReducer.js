
const LIBROS = [
  {
    title: 'Harry Potter',
    author: 'Autor X'
  },
  {
    title: 'Alice in Wonderland',
    author: 'Autor Y'
  },
  {
    title: 'React JS',
    author: 'Autor Z'
  }
]

export default (state = LIBROS, action) => {
  switch (action.type) {
    default:
      return state
  }
}
