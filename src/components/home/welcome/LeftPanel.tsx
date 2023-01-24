import smiliesIcon from 'assets/images/smilies.png'
import ovalIcon from 'assets/images/oval.png'

import 'components/home/welcome/LeftPanel.css'

const LeftPanel = () => {
  return(
    <div className='home--base-section'>
      <div className="home--principal-icon-row">
        <img src={smiliesIcon} alt="Two faces smiling" className="home--principal-icon" />
      </div>

      <div className="home--title-row">
        <p className="home--title-text">Welcome to <b>TARGET</b> </p>
      </div>

      <div className="home--title-row">
        <p className="home--subtitle-text"><b>Find people near you & Connect</b></p>
      </div>
      
      <div className="home--parragraphs-section">
        <p className="home--parragraph-base">
          <div className="home--parragraph-icon">
            <img src={ovalIcon} alt="Oval icon" />
          </div>
          <div>
            <span>
              Create a  target  by clicking wherever on the map, specify  the ratio and and a topic: Travel, Dating, Music, etc.
            </span>
          </div>
        </p>

        <p className="home--parragraph-base">
          <div className="home--parragraph-icon">
            <img src={ovalIcon} alt="Oval icon" />
          </div>
          <div>
          <span>
            <b>TARGET</b> will  start a chat whenever you’ve a match. You can always dismiss a conversation if you’re not interested.
          </span>
          </div>
        </p>
      </div>
      
      <div className="home--submit-btn-row">
        <a href='#'>
          <input type='button' value='Ok, got it!' className="home--submit-btn"/>
        </a>
      </div>
    </div>
  )
}

export default LeftPanel;
