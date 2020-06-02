import React, {Component} from 'react'

export default class ContentTMS extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: '',
        },
      ],
      src: '',
      active: false,
    }
  }
  componentDidMount() {
    this.fetchList()
  }
  fetchList = async () => {
    try {
      const URL =
        'https://api.github.com/repos/ArepaTech/liftit-mails/contents/changeLogAPP'
      const response = await fetch(URL)
      const data = await response.json()
      this.setState({
        data: data,
      })
    } catch (error) {}
  }

  render() {
    return (
      <div className='content-app'>
        <ul className='content-app__ul'>
          {this.state.data.map((list) => (
            <li
              key={list.name}
              onClick={() => {
                this.setState({src: list.name, active: true})
              }}
              className={this.state.active ? 'is-active' : ''}
            >
              {list.name}
            </li>
          ))}
        </ul>
        {this.state.src && (
          <iframe
            src={`https://arepatech.github.io/liftit-mails/changeLogAPP/${this.state.src}`}
            title='iframe'
          ></iframe>
        )}
      </div>
    )
  }
}
