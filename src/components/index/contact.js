import React from 'react'
import contactStyle from "../styles/contact.module.css"

const Contact = () => (
<div className={contactStyle.contactBG}>

    <div className={contactStyle.contactWrapper}>
    <h1 className={contactStyle.contactH1}>Get In Shape Today</h1>
    <p className={contactStyle.contactP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div >

      <form className={contactStyle.formStyle} action="#">

        <div className={contactStyle.inputFlex}>
          <div className={contactStyle.inputDiv}>
            <input className={contactStyle.inputBox} type="text" placeholder="Name*" required></input>
          </div>

          <div className={contactStyle.inputDiv}>
            <input className={contactStyle.inputBox} type="email" placeholder="Email*" required></input>
          </div>
        </div>

        <div className={contactStyle.inputFlex}>
          <div className={contactStyle.inputDiv}>
            <input className={contactStyle.inputBox} type="text" placeholder="Subject*" required></input>
          </div>

          <div className={contactStyle.inputDiv}>
            <input className={contactStyle.inputBox} type="tel" placeholder="Phone"></input>
          </div>
        </div>

        <div className={contactStyle.textareaDiv}>
          <textarea className={contactStyle.textareaBox} placeholder="Write your message...*" rows="6" required></textarea>
        </div>

        <div className={contactStyle.formButtonStyle}>
          <button type="submit" className={contactStyle.formButton}>Send Message</button>
        </div>
      </form>


    </div>
  </div>

</div>
  )

  export default Contact