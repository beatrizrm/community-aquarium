import { useContext, useState } from "react";
import Modal from "../../ui/Modal";
import BookGridItem from "./grid/BookGridItem";
import SimulationContext from "../../store/simulation-context";
import FishInfoPanel from "./FishInfoPanel";

const BookModal = props => {
    const tankCtx = useContext(SimulationContext);

    const [selectedFish, setSelectedFish] = useState(null);
    
    const selectFishHandler = (selectedId) => {
        const fish = tankCtx.ownedFish.find(f => f.id === selectedId);
        setSelectedFish(fish);
    }

    return (
        <Modal title="Fish" onClose={props.onClose}>
            <div className="flex gap-6 w-full max-h-90">

                {/* Lefthand grid */}
                <div className="w-3/5 grid grid-cols-4 overflow-y-auto gap-2 -mx-3 pr-3 scrollbar-thin text-sm">
                    {tankCtx.ownedFish.map(fish => (
                        <BookGridItem key={fish.id} name={fish.name} onClick={() => selectFishHandler(fish.id)} />
                    ))}
                </div>

                {/* Righthand panel */}
                <FishInfoPanel fish={selectedFish} onSell={tankCtx.sellFish} />
            </div>
        </Modal>
    );
};

export default BookModal;