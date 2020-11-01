import React from "react";
import { GlobalStyles } from "twin.macro"
import { UserProvider } from "../components/context/User"

function MyApp({ Component, pageProps }) {

  return (<>
    <UserProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </UserProvider>
  </>
  )
}

export default MyApp
