import ClearLink from '../Assets/clearlink-logo.png'
import GetTheApp from './GetTheApp'
import MiddleFooter from './MiddleFooter'

const BeforeFooter = () => {
  return (
    <div className='before-footer'>
       <div className="clearlink-footer">
        <img src={ClearLink} alt="" />
        <p>ClearLink is your gateway to effortless, high- <br />quality 
            video conferencing. Join us in <br /> shaping 
            the future of communication!</p>
       </div>
       <MiddleFooter />
       <GetTheApp />
    </div>
  )
}

export default BeforeFooter