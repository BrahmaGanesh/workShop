import React, { useEffect, useState } from 'react';
import Footer from './footer';
import Navbar from './header';

const ServicesPreview = () => {
 const [services, setServices] = useState([])

 useEffect(() => {
  try{
    fetch("http://localhost:5000/services")
    .then((res)=>{return res.json()})
    .then((data)=>{
      setServices(data)
    })
  }catch(error){
    console.log(error)
  }
},[])


  return (<>
  <Navbar/>
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Services</h2>
      <div  style={styles.grid}>
        {services.map((service, i) => (
          <>
          <div id="card" key={i} style={styles.card}>
            <img id='image' src={service.image} alt={service.title}/>
            <div id="card-det">
              <h3>{service.title}</h3>
            <p style={styles.cardDesc}>{service.desc}</p>
            </div>
          </div>
          </>
        ))}
      </div>
      {/* <a href="/services" style={styles.button}>See All Services</a> */}
    </section>
    <Footer/>
    </>
  );
};

const styles = {
  section: {
    backgroundColor: '#0F0F0F',
    padding: '40px 20px',
    color: '#fff',
    textAlign: 'center',
    height:"80%"
  },
  heading: {
    color: '#FFD700',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#1F1F1F',
    padding: '0px',
    alignContent:"center",
    borderLeft: '4px solid #FFD700',
    borderRadius: '8px',
    maxWidth: '250px',
    maxHeight:"600px",
    overflow:"hidden",
  },
  cardDesc: {
    color: '#ccc',
  },
};

export default ServicesPreview;
