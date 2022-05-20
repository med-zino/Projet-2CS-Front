import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './components/admin/Admin'
import Agent from './components/agent/Agent'
import Host from './components/host/Host'
import Login from './components/auth/login'
import SignupHost from './components/auth/signup_host'
import SignupClient from './components/auth/signup_client'
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ResetPwd from './components/auth/reset'
import { store } from './state/store'
import { Provider } from 'react-redux'
import Search from './components/products/search'
import Details from './components/products/details'
import About from './components/about'
import ForgetPassword from './components/auth/forget'

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <ToastContainer
        position='top-center'
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/search' element={<Search />} />
          <Route path='/details' element={<Details />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signuphost' element={<SignupHost />} />
          <Route path='signupclient' element={<SignupClient />} />
          <Route path='/reset' element={<ResetPwd />} />
          <Route path='/forget' element={<ForgetPassword />} />
          <Route path='admin' element={<Admin />} />
          <Route path='host' element={<Host />} />
          <Route path='agent' element={<Agent />} />

          <Route
            path='*'
            element={
              <div style={{ margin: '45vh 45vw' }}>
                <h2>404 | NOT FOUND</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
