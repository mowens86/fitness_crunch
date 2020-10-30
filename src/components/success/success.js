import React from 'react'
import successStyle from "./success.module.css"

const Success = () => {
  
      return (
      <section className={successStyle.BG}>
        <div className={successStyle.MaxWidth}>
        
            <div className={successStyle.Wrapper}>
            <h1 className={successStyle.H1}>Success!</h1>
            <p className={successStyle.P}>Thank you for contacting us. Expect to hear from us within 1-2 business days.</p>
            
          </div>
        
        </div>
      </section>
        )
      }
      
      export default Success