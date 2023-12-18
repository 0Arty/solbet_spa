import style from "./Footer.module.scss"

const Footer = ({children}) => {

  return (
    <footer className = {style.container}>
      {children}
    </footer>
  )
};

export default Footer;
