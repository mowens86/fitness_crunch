import React from 'react'
import fourStyle from "./404.module.css"

const Four = () => {
  
      return (
      <section className={fourStyle.BG}>
        <div className={fourStyle.MaxWidth}>
        
            <div className={fourStyle.Wrapper}>
            <h1 className={fourStyle.H1}>404: Not Found</h1>
            <p className={fourStyle.P}>You just hit a route that doesn&#39;t exist... the sadness.</p>
            
          </div>
        
        </div>
      </section>
        )
      }
      
      export default Four