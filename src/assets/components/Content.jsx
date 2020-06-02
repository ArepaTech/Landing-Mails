import React, {Component} from 'react'
import ContentTMS from '../components/ContentTMS'
import ContentAPP from '../components/ContentAPP'
import ContentBACK from '../components/ContentBACK'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      activeApp: false,
      activeBack: false,
    }
  }
  handleClick = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  handleClickApp = () => {
    this.setState({
      activeApp: !this.state.activeApp,
    })
  }
  handleClickBack = () => {
    this.setState({
      activeBack: !this.state.activeBack,
    })
  }
  render() {
    return (
      <div className='content'>
        <h1>Change Log LIFTIT</h1>
        <p>
          Equipo, en los siguientes links encontrarán las últimas
          actualizaciones de nuestro producto, sus características, alcances y
          materiales tipo tutorial para su adecuado uso y aprovechamiento, los
          cuales pueden consultar en cualquier momento durante su operación
          diaria.
        </p>
        <div className='columns'>
          <div
            className={`column is-4 ${
              this.state.active ? 'show-ul' : 'hide-ul'
            }`}
          >
            <div
              className='card-button card-button--tms'
              onClick={this.handleClick}
            >
              <h2>TMS</h2>
            </div>

            <ContentTMS />
          </div>
          <div
            className={`column is-4 ${
              this.state.activeApp ? 'translate show-ul' : 'hide-ul'
            }`}
          >
            <div
              className='card-button card-button--app'
              onClick={this.handleClickApp}
            >
              <h2>
                App <br /> Conductores
              </h2>
            </div>

            <ContentAPP />
          </div>
          <div
            className={`column is-4 ${
              this.state.activeBack ? 'translateBack show-ul' : 'hide-ul'
            }`}
          >
            <div
              className='card-button card-button--back'
              onClick={this.handleClickBack}
            >
              <h2>BackOffice</h2>
            </div>
            <ContentBACK />
          </div>
        </div>
      </div>
    )
  }
}
