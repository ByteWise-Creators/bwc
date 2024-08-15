import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimateContact from './Contexts/AnimateContact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimateContact>
    <App />
  </AnimateContact>
)
