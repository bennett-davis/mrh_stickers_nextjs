import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarCustom from '../components/NavbarCustom';



function MyApp({ Component, pageProps }) {

  return (
    <>
      <NavbarCustom/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
