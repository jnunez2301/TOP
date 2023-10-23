

const About = () => {
  return (
    <section
     className="info-section"
     style={{
      textAlign: 'center',
      lineHeight: '1.8rem',
      }}>
      <h2>About</h2>
      <br />
      <p>This page was built and written by Jhonatan Nunez FullStack Developer
        <br />
        Using MongoDB, Express, React and NodeJS
        <br />
        You can contact me on
        <br />
        <br />
        <a 
        style={{color: 'blue'}}
        href="https://www.linkedin.com/in/jnunez99/"
        target="_blank"
        rel="noreferrer">Linkedin</a>
        <br />
        <a 
        style={{color: 'blue'}}
        href="https://github.com/jnunez2301"
        target="_blank"
        rel="noreferrer"
        >GitHub</a>

      </p>
      </section>
  )
}

export default About