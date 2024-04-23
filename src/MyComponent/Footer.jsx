import React from 'react'
// import './Modos.css'
const Footer = () => {
  const   footerStyle={
    position:"relative",
    top:"2vh",
    width:"100%",
    border:"2px solid green"
  }
  return (
    <>
    <footer className="bg-dark text-light py-1" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
    </>
  )
}

export default Footer;              




