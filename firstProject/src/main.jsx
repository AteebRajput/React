import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import {App , Hello} from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Fragment>
    <App />
    <Hello />
  </Fragment>
)
