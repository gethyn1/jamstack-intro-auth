import React from 'react'
import { IdentityContextProvider } from 'react-netlify-identity-widget'

import { Link } from 'gatsby'
import './layout.css'

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://gethyn1-jamstack-intro-auth.netlify.com">
    <header>
      <Link to="/">JAM stack app</Link>
    </header>
    <main>
      {children}
    </main>
  </IdentityContextProvider>
)

export default Layout
