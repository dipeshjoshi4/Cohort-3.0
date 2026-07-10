import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'
import FormBetter from './FormBetter.jsx'
import Optimal from './Optimal.jsx'

// createRoot(document.getElementById('root')).render(<App />)

//?Brute Approch Explain
// createRoot(document.getElementById('root')).render(<Form />)

//?Better Approch Explain
// createRoot(document.getElementById('root')).render(<FormBetter />)

//?Optimal Approch Explain
createRoot(document.getElementById('root')).render(<Optimal />)
