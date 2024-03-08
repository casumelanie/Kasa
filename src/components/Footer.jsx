const Footer = ({ logo }) => {
  return (
    <div className="footer-banner">
      <img className="footer-logo" src={logo} alt="Logo Kasa" />
      <span className="footer-txt">© 2020 Kasa. All rights reserved</span>
    </div>
  )
}

export default Footer
