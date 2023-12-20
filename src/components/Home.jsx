import React from 'react'
import resume from '../assets/resume.docx'

const Home = () => {
  let whatsapp_messege = "https://wa.me/917887589262? Want To Hire You"
  return (
    <div className='conainer-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column justify-content-center text-center align-items-center'>
        <h1>Hello I Im <span className='text-danger'>Vikram</span> </h1>
        <p className='my-info w-50 arginleft-50'>I am professional web developer looking for the opportunity to express my knowledge</p>
      </div>
      <div>
        <a href ={resume} className='btn btn-danger align-items-center mx-5' >Download Resume</a>
        <a href = {whatsapp_messege} className='btn btn-danger'>connect a whatsapp</a>
      </div>
      
    </div>
  )
}

export default Home
