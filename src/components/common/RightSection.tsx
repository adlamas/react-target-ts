import 'components/common/RightSection.css'

import i6Icon from 'assets/images/i6.png'
import appStoreIcon from 'assets/images/appstore.png'
import facebookIcon from 'assets/images/Facebook.png'
import twitterIcon from 'assets/images/Twitter.png'

const rightSection = () => {
  return(
    <section className="main-section--right-side">
      <div className='right-image'>
        <div className='image principal-image'><img src={i6Icon} alt="Phone image showing the mobile application"/></div>
        <div className='image'><img src={appStoreIcon} alt="Download on the app store" /></div>
        <div className='image'>
          <a href='http://afakesitefb.com'>
            <img src={facebookIcon} alt="Target MVD Facebook" className="social-icon"/>
          </a>

          <a href='http://afakesitetwitter.com'>
            <img src={twitterIcon} alt="Target MVD Facebook" className="social-icon"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default rightSection;
