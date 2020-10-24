import React from 'react'
import contactStyle from "../styles/contact.module.css"


const Contact = () => {


  
return (
<div className={contactStyle.contactBG}>

    <div className={contactStyle.contactWrapper}>
    <h1 className={contactStyle.contactH1}>Get In Shape Today</h1>
    <p className={contactStyle.contactP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div >

      <form className={contactStyle.formStyle} method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">

        <div className={contactStyle.inputFlex}>
          <div className={contactStyle.inputDiv}>
            <input className={contactStyle.inputBox} type="text" name="name" placeholder="Name*" required></input>
          </div>

          <div className={contactStyle.inputDiv}>
            <input className={contactStyle.inputBox} type="email" name="email" placeholder="Email*" required></input>
          </div>
        </div>

        <div className={contactStyle.inputFlex}>
          <div className={contactStyle.inputDiv}>
            <input className={contactStyle.inputBox} type="text" name="subject" placeholder="Subject*" required></input>
          </div>

          <div className={contactStyle.inputDiv}>
            <input className={contactStyle.inputBox} type="tel" name="phone" placeholder="Phone"></input>
          </div>
        </div>

        <div className={contactStyle.textareaDiv}>
          <textarea className={contactStyle.textareaBox} name="message" placeholder="Write your message...*" rows="6" required></textarea>
        </div>

        <div className={contactStyle.formButtonStyle}>
          <button type="submit" className={contactStyle.formButton}>Send Message</button>
        </div>
      </form>


    </div>
  </div>

</div>
  )
}

  export default Contact