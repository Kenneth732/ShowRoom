import React from 'react'
import './NavBar.css'
// import Logo from '/home/ken/Documents/Imgs/places/client/src/assets/logo.jpg'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='Header'>
      <div className='Header-logo'>
        <nav>
          {/* <img src={Logo} alt='logo' className='Logo' /> */}
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
          <Link to="/signin">
            <button className='btn'>SignUp</button>
          </Link>
        </nav>
        {/*  */}
        <div className='Header-Content'>
          <div className='Text-Content'>
            <h1>EIEAITLIL</h1>
            <h3>CUITI MIARCIINIID</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci neque, pellentesque eu finibus non, tincidunt id magna. Vestibulum nisi sapien, suscipit ac nisl vel, lacinia mattis tellus. Ut laoreet eleifend aliquet. Fusce accumsan iaculis condimentum. Mauris pretium magna in justo aliquet tincidunt. Nullam quam mi, sollicitudin et aliquam et, dapibus vitae lectus. Proin ante lectus, congue id nisi non, accumsan volutpat orci. Quisque sodales lorem sed ornare rhoncus. In vel imperdiet tellus.
            </p>
          </div>
          <div className='Text-Content'>
            <img src='https://lh3.googleusercontent.com/-Laai8BHEt33SaAOT_pO-Ag75ffyzHeGM0Gx0L4VffZmy-BTgWr8kXbLBoIp7h0eEktco7YoUmHaFGV7wDm3UVVhmMEDUVrYzkBFCEJArVzk2TDEbqde1cR446L7Obf9SAjXYZVSdYecNpRVGRU8qWD6cuD6YKEHkvCPb4Qo5SiFXUXApNr3pElooyL-aImjW8FBkzfUYYzjZ0zYV9oE3Dx1JnL2GaAwSnWwcHxEJ7cOOvOPTOMDIDKo0maE8UTIjmDtm9Uy0SPApYIdN1_yKO0j7pr07eiJaw5bmbzMy_v8noArSy92IS1nxYaoJlgdKhcAWRJ80pwnjcQcSFEaBGZtD6K8OU-wLRigoCOkHnvTgvg6HIkPO9ISDf-JZShcXR5bOrhicmmEARBxYrnxGFaU5dkOILdWdU1scjeNUXLNgh2Wi2Eap_yUdC2tIlEO_x0KPh0kB4siGw9yrVupdRrlws3dGb4csByqIQ_GEBd5nOU2qllVoME7ovlgYaZRH_WEUcX8np3tbpNptrkg7qAj2DFHS1BkWB4KaHkDhSNlC5zYRSak2AAbmK9E_g1fekQvmvW6j1p3W3lGm7Mj7xSi97_9aj38D44mqWMWmugNXmxMii9jeHM62r4Rz8WNQT1J3vb4iQE-HH5q4qmFwl37RPooMZ1hcr7NTzPFUg60_cVWY60W8NYv1kNI37BMMz2QPKC-im-IDIJYpgHkYnmrF-dBXVW1etanu1FxKCJ0sU0hSM_ORdF9DS-WIQPVrI09IXYZswA-js8YbYtLqR0ucLvSkuFKYDKvd_IY8U4w-ELna8Z_OTQjpNg4l46yVNT1PSOpjusY0BAeJMjYbs3ySucfTE9uLkFG8hMujd31u6TMtSAr7tfo4unJodRfm0qpBjpRGN6spjPCRzqTBA5Zp1-mWcRJQWIRMIJrLAd4amFz=w346-h346-s-no?authuser=0' className='UserImg'/>
          </div>
        </div>
      </div>
    </div>
  )
}
