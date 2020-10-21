import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import whyStyle from "../styles/why.module.css"

const Why = () => (
      <div className={whyStyle.whyWrapper}>
        <h1 className={whyStyle.whyH1}>Why Choose Us?</h1>
        <p className={whyStyle.whyP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className={whyStyle.whyFlex}>

          <div className={whyStyle.whyBox}>
            <div className={whyStyle.whyIcon}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <h3 className={whyStyle.whyH3}>Top-Notch Equipment</h3>
            <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
          </div>

          <div className={whyStyle.whyBox}>
            <div className={whyStyle.whyIcon}>
            <FontAwesomeIcon icon={faStar} />
            </div>
            <h3 className={whyStyle.whyH3}>Qualified Instructors</h3>
            <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
          </div>

          <div className={whyStyle.whyBox}>
            <div className={whyStyle.whyIcon}>
            <FontAwesomeIcon icon={faClock} />
            </div>
            <h3 className={whyStyle.whyH3}>Open 24 Hours</h3>
            <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
          </div>

          <div className={whyStyle.whyBox}>
            <div className={whyStyle.whyIcon}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </div>
            <h3 className={whyStyle.whyH3}>Additional Benefits</h3>
            <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
          </div>

        </div>
      </div>
  )

  export default Why