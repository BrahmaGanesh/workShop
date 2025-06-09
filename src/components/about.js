import Footer from "./footer"
import Navbar from "./header"

function About(){
  return(
    <>
    <Navbar/>
    <section style={styles.section}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.text}>
        With over 10 years of experience, NEW SRI RAMA LATHE WORKS offers expert lathe machining,
        motor repairs, and welding services. Trusted by locals for reliable, affordable, and quality work.
      </p>
      <a href="/about" style={styles.button}>Learn More</a>
    </section>
    <Footer/>
    </>
  )
};
const styles = {
  section: {
    backgroundColor: '#1A1A1A',
    padding: '40px 20px',
    color: '#fff',
    textAlign: 'center',
  },
  heading: {
    color: '#FFD700',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  text: {
    maxWidth: '600px',
    margin: 'auto',
    color: '#ccc',
  },
  button: {
    marginTop: '20px',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#FFD700',
    color: '#000',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '5px',
  },
};
export default About