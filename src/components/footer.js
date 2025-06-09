function Footer(){
  return(
    <>
     <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h2 style={styles.logo}>NEW SRI RAMA LATHE WORKS</h2>
          <p>Lathe Works • Motor Repair • Welding</p>
          <p style={styles.tagline}>Precision. Power. Performance.</p>
        </div>

        <div style={styles.center}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/about">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div style={styles.right}>
          <h4 style={styles.heading}>Contact</h4>
          <p>📍 Sullurpeta, Tirupati (dist) ,Ap - 524121 </p>
          <p>📞 +91-9640254545</p>
          <p>📧 katrapallibrahmaganesh@email.com</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>&copy; 2025 SRI RAMA LATHE WORK SHOP. All rights reserved.</p>
        <p>Built with ❤️ using React & Flask</p>
      </div>
    </footer>
    </>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1A1A1A',
    color: '#FFD700',
    paddingTop: '40px',
    paddingBottom: '20px',
    marginTop: '40px',
  },
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0 20px',
  },
  left: {
    flex: '1 1 300px',
    marginBottom: '20px',
  },
  center: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  right: {
    flex: '1 1 300px',
    marginBottom: '20px',
  },
  logo: {
    marginBottom: '10px',
    fontSize: '24px',
  },
  heading: {
    marginBottom: '10px',
    fontSize: '18px',
    color: '#fff',
  },
  tagline: {
    fontStyle: 'italic',
    color: '#ccc',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  bottom: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#aaa',
    fontSize: '14px',
  },
};
export default Footer