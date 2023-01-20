import smiliesIcon from 'assets/images/smilies.png'

const leftPanel = () => {
  return(
    <div>
      <img src={smiliesIcon} alt="Two faces smiling" />

      <p>Welcome to TARGET </p>
      <p>Find people near you & Connect</p>
      
      <p>
        Create a  target  by clicking wherever on the map, specify  the ratio and and a topic: Travel, Dating, Music, etc.
      </p>
      
      <p>TARGET will  start a chat whenever you’ve a match.  You can always dismiss a conversation if you’re not interested.</p>

      <p>
        <input type='button' value='Ok, got it!'/>
      </p>
    </div>
  )
}

export default leftPanel;