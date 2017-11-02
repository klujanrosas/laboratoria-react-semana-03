import React from 'react'

class Tabs extends React.Component {
  state = {
    activeTabIndex: this.props.defaultTabIndex || 0
  }

  handleTabClick = (tabIndex) => {
    this.setState({
      activeTabIndex: tabIndex
    })
  }

  renderTabs() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      })
    })
  }

  renderActiveTabContent() {
    const { children } = this.props
    const { activeTabIndex } = this.state
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children
    }
    return null
  }

  render() {
    const containerStyle = {
      display: 'flex',
      height: '100vh',
      width: '100%',
      flexFlow: 'column wrap'
    }

    const tabContainerStyle = {
      height: '15%',
      width: '100%',
      display: 'flex',
      flexFlow: 'row nowrap',
    }

    const tabContentStyle = {
      width: '100%',
      height: '85%',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignContent: 'center',
      justifyContent: 'center'
    }

    return (
      <div style={containerStyle}>
        <div style={tabContainerStyle}>
          {this.renderTabs()}
        </div>
        <div style={tabContentStyle}>
          {this.renderActiveTabContent()}
        </div>
      </div>
    )
  }
}

export default Tabs
