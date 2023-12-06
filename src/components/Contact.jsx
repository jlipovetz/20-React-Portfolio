import { useState } from "react"



export default function Work() {


  const [ contactInfo, setContactInfo ] = useState({name: "", email: "", question:""})

  function handleInputChange(e) {
    const clone = {...contactInfo, [e.target.name]: e.target.value}
    setContactInfo(clone)
    console.log(clone)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
  }
  

  return (
    <>
      <h2>Contact Me!</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input type='text' name='name' value={contactInfo.name} onChange={handleInputChange} /><br></br>
        <label>Email Address:</label>
        <input type='email' name='email' value={contactInfo.email} onChange={handleInputChange} /><br></br>
        <label>Quesetions:</label>
        <textarea name='question' value={contactInfo.question} onChange={handleInputChange} /><br></br>
        <button>Submit Info</button>
      </form>
    </>
  )
}