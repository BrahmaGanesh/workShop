import React from 'react';
const HeroSection = () => {
  return (
   <>
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>NEW SRI RAMA LATHE WORKS</h1>
        <p style={styles.subheading}>Lathe Works • Motor Repair • Welding</p>
        <a href="#services" style={styles.button}>Explore Services</a>
      </div>
    </section>
     <section className="gallery">
      <h2>Our Shop Opening Showcase</h2>
      <div className="image-grid">
        <div className="image-card card1">Image 1</div>
        <div className="image-card card2">Image 2</div>
        <div className="image-card card3">Image 3</div>
        <div className="image-card card4">Image 4</div>
        <div className="image-card card5">Image 5</div>
        <div className="image-card card6">Image 6</div>
      </div>
    </section>
    </>
  );
};

const styles = {
  hero: {
    backgroundImage: `url(../images/shops.jpg)`, // replace with your image
    backgroundSize: '',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    height: '80vh',
    position: 'relative',
    color: '#FFD700',
    width:"100vw",
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '10px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#FFD700',
    color: '#000',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '5px',
  },
};

export default HeroSection;
