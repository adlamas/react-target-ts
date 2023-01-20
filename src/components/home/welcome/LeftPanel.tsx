import smiliesIcon from 'assets/images/smilies.png'
import ovalIcon from 'assets/images/oval.png'

const leftPanel = () => {
  return(
    <div style={{width: '80%', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={smiliesIcon} alt="Two faces smiling" style={{width: '30%'}} />
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <p style={{textAlign: 'center'}}>Welcome to TARGET </p>
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <p style={{textAlign: 'center'}}>Find people near you & Connect</p>
      </div>
        
      <p style={{textAlign: 'left', display: 'flex'}}>
        <div style={{marginRight: '0.2em'}}>
          <img src={ovalIcon} alt="Oval icon" />
        </div>
        <div>
          Create a  target  by clicking wherever on the map, specify  the ratio and and a topic: Travel, Dating, Music, etc.
        </div>
      </p>

      <p style={{textAlign: 'left', display: 'flex'}}>
        <div style={{marginRight: '0.2em'}}>
          <img src={ovalIcon} alt="Oval icon" />
        </div>
        <div>
          TARGET will  start a chat whenever you’ve a match. You can always dismiss a conversation if you’re not interested.
        </div>
      </p>
      
      <p style={{textAlign: 'center'}}>
        <input type='button' value='Ok, got it!'/>
      </p>
    </div>
  )
}

export default leftPanel;