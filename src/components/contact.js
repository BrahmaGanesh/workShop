import React, { useState } from 'react';
import Footer from './footer';
import Navbar from './header';

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [problem, setProblem] = useState("")
  const SubmitHandele=async(e)=>{
    try{
      const res= await fetch("https://raw.githubusercontent.com/BrahmaGanesh/workShop/refs/heads/main/problem.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name:name,
            email:email,
            phone:phone,
            problem:problem,
          })
        }
      )

      const result=await res.json()
      console.log(result)
    }catch (error){
      console.log(error)
    }
    e.preventDefault()
    setEmail("")
    setName("")
    setPhone("")
    setProblem("")
  }
  return (
   <>
   <Navbar/>
   <section>
    <div className='info'>
      <h2>Contact Info</h2>
      <form onSubmit={SubmitHandele}>
        <label>Name</label>
        <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter name' required></input><br/>
          <label>Name</label>
        <input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' required></input><br/>
          <label>Ph no</label>
        <input type='number' name='number' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter Number' required></input><br/>
          <label>Problem</label>
        <textarea type='text' name='problem' value={problem} onChange={(e)=>{setProblem(e.target.value)}} placeholder='Enter Problem' required></textarea><br/>
        <button>Submit</button>
      </form>
    </div>
   <div style={{}}>
          <h2 style={{}}>Our Location</h2>
          <p>5-16, 9, Gnt Rd, Mahadevaiah Nagar, Indra Nagar, Sullurupeta, Andhra Pradesh 524121</p>
          <iframe
            title="New Sri Rama Lathe Work Shop"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0319571739093!2d80.012196!3d13.6977416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d75006430e95b%3A0xd8839f27bb969b65!2sNew%20Sri%20Rama%20Lathe%20Work%20Shop!5e0!3m2!1sen!2sin!4v1717674000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, marginTop: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
   </section>
    <Footer/>
    </>
  );
};
export default Contact;
