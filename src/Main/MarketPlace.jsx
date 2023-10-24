import MarketPlaceImg from '../Assets/sponsors-img.png'
import Curly from '../Assets/curly-arrow.png'
import CrystalClear from '../Assets/crystal-clear.png'
import GroupVideoCalls from '../Assets/group-video-calls.png'
const MarketPlace = () => {
    return (
        <div>
            <div className="marketplace-header">
                <p>Join 1,500+ companies already
                    video conferencing the ClearLink way</p>
                <img src={MarketPlaceImg} alt="" />
            </div>
            <div className="why-curly">
                <div className="why">
                    <p className='advantage'>The ClearLink Advantage</p>
                    <h2>Why choose ClearLink?</h2>
                    <p className='advantage down-low'>In a world where connection is everything,
                        ClearLink takes the lead.
                        Our <br /> cutting-edge
                        video conferencing app offers:</p>
                </div>
                 <img src={Curly} alt="" />
            </div>
           <div className="video-calls">
            <div className="crystal-clear"><img src={CrystalClear} alt="" /></div>
            <div className="group-video"><img src={GroupVideoCalls} alt="" /></div>
           </div>
        </div>
    )
}

export default MarketPlace