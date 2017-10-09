import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Category from './Category'

/* Home component */
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

/* Product component */
const Products = () => {
  return (
    <div>
      <h2>Products</h2>
    </div>
  )
}

/* App component */
class App extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-light'>
          <ul className='nav navbar-nav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/category'>Category</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/category' component={Category} />
          <Route path='/products' component={Products} />
        </Switch>
      </div>
    )
  }
}

export default App
