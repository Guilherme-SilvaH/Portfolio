import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.sass'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider,} from '@chakra-ui/react'
import  theme  from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
