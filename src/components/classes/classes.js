import React from 'react'
import classStyle from "./classes.module.css"
import classBobby from '../../images/classbobby.jpg'
import classLuca from '../../images/classluca.jpg'
import classJennifer from '../../images/classjennifer.jpg'
import classDirk from '../../images/classdirk.jpg'
import classRebecca from '../../images/classrebecca.jpg'
import classLydia from '../../images/classlydia.jpg'


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
                    <p className={classStyle.classP2}>12 PM - 1 PM | 3 PM - 4 PM | 7 PM - 8 PM</p>
                    <a href="/" className={classStyle.classButton}>Message Instructor</a>
                </div>
            </figure>

            <figure className={classStyle.classFigure}>
                <div className={classStyle.classImg}>
                    <img className={classStyle.classImg} src={classLuca} alt="Luca Miskowitzovitch" />
                </div>
                <div className={classStyle.classContentWrapper}>
                    <h3 className={classStyle.classH3}>Luca Miskowitzovitch - Weight Trainer</h3>
                    <p className={classStyle.classWhite}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h4 className={classStyle.classH4}>Class Times</h4>
                    <p className={classStyle.classP}>Sun - Wed - Sat</p>
                    <p className={classStyle.classP2}>12 PM - 1 PM | 3 PM - 4 PM | 7 PM - 8 PM</p>
                    <a href="/" className={classStyle.classButton}>Message Instructor</a>
                </div>
            </figure>

            <figure className={classStyle.classFigure}>
                <div className={classStyle.classImg}>
                    <img className={classStyle.classImg} src={classJennifer} alt="Jennifer Love" />
                </div>
                <div className={classStyle.classContentWrapper}>
                    <h3 className={classStyle.classH3}>Jennifer Love - Aerobics Instructor</h3>
                    <p className={classStyle.classWhite}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h4 className={classStyle.classH4}>Class Times</h4>
                    <p className={classStyle.classP}>Tues - Thurs</p>
                    <p className={classStyle.classP2}>12 PM - 1 PM | 3 PM - 4 PM | 7 PM - 8 PM</p>
                    <a href="/" className={classStyle.classButton}>Message Instructor</a>
                </div>
            </figure>

            <figure className={classStyle.classFigure}>
                <div className={classStyle.classImg}>
                    <img className={classStyle.classImg} src={classDirk} alt="Dirk Jambaliya" />
                </div>
                <div className={classStyle.classContentWrapper}>
                    <h3 className={classStyle.classH3}>Dirk Jambaliya - Rock Climbing Instructor</h3>
                    <p className={classStyle.classWhite}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h4 className={classStyle.classH4}>Class Times</h4>
                    <p className={classStyle.classP}>Tues - Thurs</p>
                    <p className={classStyle.classP2}>10 AM - 11 AM | 1 PM - 2 PM | 4 PM - 5 PM</p>
                    <a href="/" className={classStyle.classButton}>Message Instructor</a>
                </div>
            </figure>

            <figure className={classStyle.classFigure}>
                <div className={classStyle.classImg}>
                    <img className={classStyle.classImg} src={classRebecca} alt="Recebba Cornsyrup" />
                </div>
                <div className={classStyle.classContentWrapper}>
                    <h3 className={classStyle.classH3}>Recebba Cornsyrup - Dance Instructor</h3>
                    <p className={classStyle.classWhite}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h4 className={classStyle.classH4}>Class Times</h4>
                    <p className={classStyle.classP}>Fri - Sat</p>
                    <p className={classStyle.classP2}>10 AM - 11 AM | 1 PM - 2 PM | 4 PM - 5 PM</p>
                    <a href="/" className={classStyle.classButton}>Message Instructor</a>
                </div>
            </figure>

            <figure className={classStyle.classFigure}>
                <div className={classStyle.classImg}>
                    <img className={classStyle.classImg} src={classLydia} alt="Lydia Stretchalot" />
                </div>
                <div className={classStyle.classContentWrapper}>
                    <h3 className={classStyle.classH3}>Lydia Stretchalot - Yoga Instructor</h3>
                    <p className={classStyle.classWhite}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h4 className={classStyle.classH4}>Class Times</h4>
                    <p className={classStyle.classP}>Wed - Thurs</p>
                    <p className={classStyle.classP2}>10 AM - 11 AM | 1 PM - 2 PM | 4 PM - 5 PM</p>
                    <a href="/" className={classStyle.classButton}>Message Instructor</a>
                </div>
            </figure>
        
        </div>

    </div>

    </div>
    </section>
    )
}

  export default Class