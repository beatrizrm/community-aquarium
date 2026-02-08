import TankContainer from './components/TankContainer'
import TopBar from './components/hud/TopBar'
import BottomBar from './components/hud/BottomBar'
import ShopModal from './components/modals/ShopModal';
import BookModal from './components/modals/BookModal';
import { useState } from 'react';
import SimulationProvider from './store/SimulationProvider';

import backgroundImage from './assets/images/tank/background-placeholder.png';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModalHandler = (modalId) => {
    if (activeModal === modalId) {
      closeModalHandler();
    }
    else {
      setActiveModal(modalId)
    }
  }

  const closeModalHandler = () => {
    setActiveModal(null);
  }

  return (
    <SimulationProvider>
      <div className="flex flex-col h-screen w-full bg-teal-800 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <TopBar />
          <TankContainer />
          <BottomBar onOpen={toggleModalHandler} />
        {activeModal === 'shop' && <ShopModal onClose={closeModalHandler} />}
        {activeModal === 'book' && <BookModal onClose={closeModalHandler} />}
      </div>
    </SimulationProvider>
  )
}

export default App;
