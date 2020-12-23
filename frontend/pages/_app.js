
import {AppProps} from 'next/app'
import CreateGlobalStyle from '../styles/estilo/global'
function MyApp({ Component, pageProps }) {
  return (
      <div>
            <Component {...pageProps} />
            <CreateGlobalStyle/>
      </div>
    
  )
}

export default MyApp
