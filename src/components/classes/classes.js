import React from 'react'
import classStyle from "./classes.module.css"
import classBobby from '../../images/classbobby.jpg'


const Class = () => {


  
return (
    <section className={classStyle.classBG}>
<div className={classStyle.classMaxWidth}>

    <div className={classStyle.classWrapper}>
    <h1 className={classStyle.classH1}>Qualified Instructors & Amazing Classes</h1>
    
    <div className={classStyle.classGrid}>

        <figure className={classStyle.classFigure}>
            <div className={classStyle.classImg}>
                <img className={classStyle.classImg} src={classBobby} alt="Bobby Bushay" />
            </div>
            <div className={classStyle.classContentWrapper}>
                <h3 className={classStyle.classH3}>Bobby Bushay - Water Instructor</h3>
                <p className={classStyle.classWhite}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h4 className={classStyle.classH4}>Class Times</h4>
                <p className={classStyle.classP}>Mon - Tues - Friday</p>
                <p className={classStyle.classP}>12 PM - 1 PM | 3 PM - 4 PM | 7 PM - 8 PM</p>
            </div>
        </figure>
      
    </div>

  </div>

</div>
</section>
  )
}

  export default Class