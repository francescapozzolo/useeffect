import React from 'react'
import ConHook from './ConHook'

class App extends React.Component {
  state = {
    visible: false,
    numero: 1,
    pepito: 'G'
  }
  render() {
    return (
      <>
      <button onClick={() => this.setState({
        visible: !this.state.visible
      })}>Ver Componente</button>
      <button onClick={() => this.setState({
        pepito: 'J'
      })}>Modificar pepito</button>
      { this.state.visible && <ConHook numero={this.state.numero} pepito={this.state.pepito} />}
      </>
    )
  }
}

export default App
