import TankContainer from './components/TankContainer'
import TopBar from './components/hud/TopBar'
import BottomBar from './components/hud/BottomBar'
import Modal from './ui/Modal';
import ShopModal from './components/modals/ShopModal';
import BookModal from './components/modals/BookModal';
import { useState } from 'react';
import SimulationProvider from './store/SimulationProvider';

import backgroundImage from './assets/images/tank/background-placeholder.png';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [infoModalFields, setInfoModalFields] = useState({
    title: "",
    message: "",
  });

  const toggleModalHandler = modalId => {
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

  const showInfoModal = (message, success) => {
    setInfoModalFields({
        title: success ? "Success" : "Error",
        message: message
    });
    toggleModalHandler("info");
  }

  return (
    <SimulationProvider>
      <div className="flex flex-col h-screen w-full bg-teal-800 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <TopBar />
          <TankContainer />
          <BottomBar onOpen={toggleModalHandler} />
        {activeModal === 'shop' && <ShopModal onClose={closeModalHandler} onCompleteAction={showInfoModal}/>}
        {activeModal === 'book' && <BookModal onClose={closeModalHandler} />}
        {activeModal === 'info' && <Modal onClose={closeModalHandler} title={infoModalFields.title}>{infoModalFields.message}</Modal>}
      </div>
    </SimulationProvider>
  )
}

export default App;
