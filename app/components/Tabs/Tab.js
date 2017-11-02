import React from 'react'

const Tab = ({ isActive, onClick, tabIndex, title = 'default' }) => {
  const tabStyle = {
    display: 'flex',
    flex: 1,
    borderBottom: `2px solid ${isActive ? 'blue' : 'transparent'}`,
    fontSize: '3em',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div
      style={tabStyle}
      onClick={(evt) => {
        evt.preventDefault()
        onClick(tabIndex)
      }}
    >
      {title}
    </div>
  )
}

export default Tab
