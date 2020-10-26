import React from "react"
import galleryStyle from "./herogallery.module.css"
import galleryOne from '../../images/galleryone.jpg'
import galleryTwo from '../../images/gallerytwo.jpg'
import galleryThree from '../../images/gallerythree.jpg'
import galleryFour from '../../images/galleryfour.jpg'
import galleryFive from '../../images/galleryfive.jpg'
import gallerySix from '../../images/gallerysix.jpg'
import gallerySeven from '../../images/galleryseven.jpg'
import galleryEight from '../../images/galleryeight.jpg'
import galleryNine from '../../images/gallerynine.jpg'

const Gallery = () => {
  
    return (

        <section className={galleryStyle.galleryBG}>
            <div className={galleryStyle.galleryMaxWidth}>

                <h1 className={galleryStyle.galleryH1}>Gym Gallery</h1>

                <div className={galleryStyle.galleryGrid}>

                    <figure className={galleryStyle.galleryGridOne}>
                        <div className={galleryStyle.galleryImgWrapper}>
                            <img className={galleryStyle.galleryImg} src={galleryOne} alt="Treadmills"/>
                        </div>
                    </figure>

                    <figure className={galleryStyle.galleryGridTwo}>
                        <img className={galleryStyle.galleryImg} src={galleryTwo} alt="Dumbbells"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridThree}>
                        <img className={galleryStyle.galleryImg} src={galleryThree} alt="Pool"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridFour}>
                        <img className={galleryStyle.galleryImg} src={galleryFour} alt="Tanning"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridFive}>
                        <img className={galleryStyle.galleryImg} src={galleryFive} alt="Aerobics"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridSix}>
                        <img className={galleryStyle.galleryImg} src={gallerySix} alt="Basketball"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridSeven}>
                        <img className={galleryStyle.galleryImg} src={gallerySeven} alt="Rock Climbing"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridEight}>
                        <img className={galleryStyle.galleryImg} src={galleryEight} alt="Bench Press"/>
                    </figure>

                    <figure className={galleryStyle.galleryGridNine}>
                        <img className={galleryStyle.galleryImg} src={galleryNine} alt="Protein Shakes"/>
                    </figure>

                </div>

            </div>
        </section>

        )
    }

export default Gallery