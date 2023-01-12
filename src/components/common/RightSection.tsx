import i6Icon from 'assets/images/i6.png'
import appStoreIcon from 'assets/images/appstore.png'
import facebookIcon from 'assets/images/Facebook.png'
import twitterIcon from 'assets/images/Twitter.png'

function rightSection() {
  return(
    <section className="main-section--right-side">
      <div className='right-image'>
        <div className='image principal-image'><img src={i6Icon} alt="i6"/></div>
        <div className='image'><img src={appStoreIcon} alt="appstore" /></div>
        <div className='image'>
          <img src={facebookIcon} alt="facebook" className="social-icon"/>
          <img src={twitterIcon} alt="twitter" className="social-icon"/>
        </div>
      </div>
    </section>
  )
}

export default rightSection;
