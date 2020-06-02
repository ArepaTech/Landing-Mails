import React from 'react'
import Header from './assets/components/Layout/Header'
import Footer from './assets/components/Layout/Footer'
import Content from './assets/components/Content'
import '../src/assets/styles/index.scss'
import {Element} from 'react-scroll'
function App() {
  return (
    <div className='App container is-fluid'>
      <div className='columns is-centered'>
        <Element name='top'>
          <div className='column max-width-960'>
            <Header />
            <Content />
            <Footer />
          </div>
        </Element>
      </div>
    </div>
  )
}

export default App
