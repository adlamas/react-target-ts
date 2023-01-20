import smiliesIcon from 'assets/images/smilies.png'
import ovalIcon from 'assets/images/oval.png'

import 'components/home/welcome/LeftPanel.css'

const leftPanel = () => {
  return(
    <div className='home--base-section'>
      <div className="home--principal-icon-row">
        <img src={smiliesIcon} alt="Two faces smiling" className="home--principal-icon" />
      </div>

      <div className="home--title-row">
        <p className="home--title-text">Welcome to <b>TARGET</b> </p>
      </div>

      <div className="home--title-row">
        <p className="home--subtitle-text">Find people near you & Connect</p>
      </div>
      
      <div className="home--parragraphs-section">
        <p className="home--parragraph-base">
          <div className="home--parragraph-icon">
            <img src={ovalIcon} alt="Oval icon" />
          </div>
          <div>
            Create a  target  by clicking wherever on the map, specify  the ratio and and a topic: Travel, Dating, Music, etc.
          </div>
        </p>

        <p className="home--parragraph-base">
          <div className="home--parragraph-icon">
            <img src={ovalIcon} alt="Oval icon" />
          </div>
          <div>
            <b>TARGET</b> will  start a chat whenever you’ve a match. You can always dismiss a conversation if you’re not interested.
          </div>
        </p>
      </div>
      
      <div className="home--submit-btn-row">
        <input type='button' value='Ok, got it!' className="home--submit-btn"/>
      </div>
    </div>
  )
}

export default leftPanel;