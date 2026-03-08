import { useContext, useState } from "react";
import Modal from "../../ui/Modal";
import BookGridItem from "./grid/BookGridItem";
import SimulationContext from "../../store/simulation-context";
import FishInfoPanel from "./FishInfoPanel";
import { VARIANT_DATA } from "../../data/variantData";

const BookModal = props => {
    const simCtx = useContext(SimulationContext);

    const [selectedFish, setSelectedFish] = useState(null);
    
    const selectFishHandler = (selectedId) => {
        const fish = simCtx.ownedFish.find(f => f.id === selectedId);
        setSelectedFish(fish);
    }

    return (
        <Modal title="Fish" onClose={props.onClose}>
            <div className="flex gap-6 w-full max-h-90">

                {/* Lefthand grid */}
                <div className="w-3/5 grid grid-cols-4 overflow-y-auto gap-2 -mx-3 pr-3 scrollbar-thin text-sm">
                    {simCtx.ownedFish.map(fish => (
                        <BookGridItem key={fish.id} name={fish.name}
                            image={VARIANT_DATA[fish.variant].sprite} onClick={() => selectFishHandler(fish.id)}
                        />
                    ))}
                </div>

                {/* Righthand panel */}
                <FishInfoPanel fish={selectedFish} onSell={simCtx.sellFish} />
            </div>
        </Modal>
    );
};

export default BookModal;