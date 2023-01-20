import menu from 'assets/images/menu.png'
import Map from 'components/common/Map'
import LeftPanel from 'components/home/welcome/LeftPanel'
import 'components/home/general.css';
import 'components/common/general.css';

const Welcome = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <section className="home--main-section">
          <section className="home--left-panel">
            <div className="hamburguer-menu">
              <img src={menu} alt="menu" />
            </div>
            <div className="input-section">
              <LeftPanel/>
            </div>
          </section>
          <section className="home--map">
            <Map />
          </section>
        </section>
      </body>
    </div>
  );
}

export default Welcome;