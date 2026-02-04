import TankContainer from './components/TankContainer'
import TopBar from './components/hud/TopBar'
import BottomBar from './components/hud/BottomBar'
import ShopModal from './components/modals/ShopModal';
import BookModal from './components/modals/BookModal';
import { useState } from 'react';
import GameProvider from './store/GameProvider';

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
    <GameProvider>
      <div className="relative h-screen w-full overflow-hidden">
        <TankContainer />
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          <TopBar />
          <BottomBar onOpen={toggleModalHandler} />
        </div>
        {activeModal === 'shop' && <ShopModal onClose={closeModalHandler} />}
        {activeModal === 'book' && <BookModal onClose={closeModalHandler} />}
      </div>
    </GameProvider>
  )
}

export default App;
