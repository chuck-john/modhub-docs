import React, { useReducer, useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import V1 from './V1'
import versionReducer from './versionReducer'

const initialState = window.location.pathname.replace('/', '')
const versions = [
  { value: '',   text: 'Select Version' },
  { value: 'v1', text: 'V1' }
]

export default function App() {
  const [version, dispatch] = useReducer(versionReducer, initialState)
  const [currentVersion, setVersion] = useState(version)

  function changeVersion(event: any) {
    const newVersion = event.target.value
    dispatch({ type: 'CHANGE_VERSION', version: newVersion })
    setVersion(newVersion)
  }

  return (
    <div>
      <nav>
        <select value={currentVersion} onChange={changeVersion}>
          {versions.map((version, index) => (
            <option key={index} value={version.value}>{version.text}</option>
          ))}
        </select>
      </nav>

      <Router>
        <Redirect to={'/' + version}/>

        <Switch>
          <Route exact path='/'   component={Home}/>
          <Route exact path='/v1' component={V1}/>
        </Switch>
      </Router>
    </div>
  )
}
