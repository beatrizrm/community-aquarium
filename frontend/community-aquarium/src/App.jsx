import TankContainer from './components/TankContainer'
import TopBar from './components/hud/TopBar'
import BottomBar from './components/hud/BottomBar'
import ShopModal from './components/modals/ShopModal';
import BookModal from './components/modals/BookModal';

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <TankContainer />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
        <TopBar />
        <BottomBar />
      </div>
      <BookModal />
    </div>
  )
}

export default App;
