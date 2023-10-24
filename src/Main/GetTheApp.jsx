import AppleStore from '../Assets/Applestore.png'
import Google from '../Assets/Googlestore.png'
const GetTheApp = () => {
  return (
    <div>
        <div className="getapp-header">
            <h3 style={{color: '#004EEB'}}>Get the app</h3> <br />
            <img src={AppleStore} alt="" /> <br /> <br />
            <img src={Google} alt="" />
        </div>
    </div>
  )
}

export default GetTheApp