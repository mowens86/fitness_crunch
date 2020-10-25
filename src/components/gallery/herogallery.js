import React from "react"
import galleryStyle from "./herogallery.module.css"
import galleryOne from '../../images/galleryone.jpg'
import galleryTwo from '../../images/gallerytwo.jpg'
import galleryThree from '../../images/gallerythree.jpg'
import galleryFour from '../../images/galleryfour.jpg'
import galleryFive from '../../images/galleryfive.jpg'
import gallerySix from '../../images/gallerysix.jpg'

const Gallery = () => {
  
    return (

        <section className={galleryStyle.galleryBG}>
            <div className={galleryStyle.galleryMaxWidth}>

                <h1 className={galleryStyle.galleryH1}>Gym Gallery</h1>

                <div className={galleryStyle.galleryGrid}>

                    <figure className={galleryStyle.galleryGridOne}>
                        <img className={galleryStyle.galleryImg} src={galleryOne} alt="Treadmills"/>
                        <div className={galleryStyle.galleryImgOverlay}></div>
                    </figure>

                    <figure className={galleryStyle.galleryGridTwo}>
                        <img className={galleryStyle.galleryImg} src={galleryTwo} alt="Dumbbells"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridThree}>
                        <img className={galleryStyle.galleryImg} src={galleryThree} alt="Pool"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridFour}>
                        <img className={galleryStyle.galleryImg} src={galleryFour} alt="Pool"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridFive}>
                        <img className={galleryStyle.galleryImg} src={galleryFive} alt="Pool"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridSix}>
                        <img className={galleryStyle.galleryImg} src={gallerySix} alt="Pool"/>
                    </figure>




                </div>

            </div>
        </section>

        )
    }

export default Gallery