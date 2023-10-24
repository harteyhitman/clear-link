import React from 'react'
import Navbar from '../components/Navbar'
import PhotoGallery from '../Assets/photo-gallery.png'
import Button from '../components/Button'
import Frame from '../Assets/Frame 10.png'
import ReviewPhotos from '../Assets/Review-photos.png'
import YellowStar from '../Assets/yelow-star.png'

const UnitedSection = () => {
    return (
        <div className='first-section-container'>
            <Navbar />
            <div className="united-left-container">
                <div className="united-left">
                    <h1>Uniting the world, <br /> one video call at a time</h1>
                    <p>Experience the future of communication with
                        ClearLink – where crystal-clear
                        video conferencing meets unparalleled simplicity.</p>
                    <div className="united-btn"> <Button label="Sign up for free"
                        className="custom-button blue-btn" /> <span><img src={Frame} alt="" /> Discover AI assistant</span>
                    </div>
                    <div className="reviews">
                        <img src={ReviewPhotos} alt="" />
                        <div className="star-rating">
                            <img src={YellowStar} alt="" />
                            <img src={YellowStar} alt="" />
                            <img src={YellowStar} alt="" />
                            <img src={YellowStar} alt="" />
                            <img src={YellowStar} alt="" />
                            <span>5.0</span>
                            <p>from 3,000+ reviews</p>
                        </div>
                    </div>
                </div>
                <div className="united-right">
                    <img src={PhotoGallery} alt="" />
                </div>
            </div>

        </div>
    )
}

export default UnitedSection