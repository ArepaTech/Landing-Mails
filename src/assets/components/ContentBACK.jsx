import React, {Component} from 'react'
import {Link, Element} from 'react-scroll'
import scroll from '../static/images/btn-scroll-to-top.svg'

export default class ContentBACK extends Component {
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
        'https://api.github.com/repos/ArepaTech/liftit-mails/contents/changeLogBackOffice'
      const response = await fetch(URL)
      const data = await response.json()
      this.setState({
        data: data,
      })
    } catch (error) {}
  }
  resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px'
  }
  render() {
    return (
      <div className='content-tms content-tms--backoffice'>
        <ul className='content-tms__ul'>
          {this.state.data.map((list) => (
            <li key={list.name}>
              <Link
                to='mail'
                offset={-160}
                spy={true}
                smooth={true}
                duration={1000}
                className={
                  this.state.active === this.state.src ? 'is-active' : ''
                }
                onClick={() => {
                  this.setState({src: list.name, active: list.name})
                }}
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
        <Element name='mail'>
          {this.state.src && (
            <iframe
              src={`https://arepatech.github.io/liftit-mails/changeLogBackOffice/${this.state.src}`}
              title='iframe'
            ></iframe>
          )}
          {this.state.src && (
            <Link
              to='top'
              offset={-160}
              spy={true}
              smooth={true}
              duration={1000}
              className='scroll-to-top'
            >
              <figure>
                <img src={scroll} alt='' />
              </figure>
            </Link>
          )}
        </Element>
      </div>
    )
  }
}
