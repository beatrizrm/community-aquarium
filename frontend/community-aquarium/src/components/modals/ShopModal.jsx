import { useRef, useState, useContext } from "react";
import Modal from "../../ui/Modal";
import Pill from "../../ui/Pill";
import ShopGridItem from "./grid/ShopGridItem";
import { SHOP_DATA } from "../../data/shopData";
import { VARIANT_DATA } from "../../data/variantData";
import SimulationContext from "../../store/simulation-context";

const ShopModal = ({ onClose, onCompleteAction }) => {
    const simCtx = useContext(SimulationContext);
    const nameInputRef = useRef();

    const [selectedFish, setSelectedFish] = useState(null);
        
    const selectFishHandler = shopFish => {
        setSelectedFish(shopFish);
    }

    const submitBuyHandler = event => {
        event.preventDefault();

        if (simCtx.coins >= selectedFish.price) {
            const fishName = nameInputRef.current.value.trim();
            const newFish = {
                name: fishName,
                variant: selectedFish.variant,
                owner: "u1",
                age: 0,
            }
            simCtx.buyFish(newFish, selectedFish.price);

            onCompleteAction("Fish purchased!", true);
        }
        else {
            onCompleteAction("Not enough coins!", false);
        }
    }
    
    const buyDrawer = selectedFish && (
        <form className="flex justify-between" onSubmit={submitBuyHandler}>
            <div>
                <label htmlFor="fishName">Name:</label>
                <input type="text" id="fishName" ref={nameInputRef} />
            </div>
            <Pill type="submit" className="bg-red-500">Buy</Pill>
        </form>
    );

    return (
        <Modal title="Shop" onClose={onClose} footer={buyDrawer}>
            <div className="flex gap-3 justify-center mb-4">
                <Pill className="bg-blue-400">Fish</Pill>
                <Pill className="bg-orange-400">Decor</Pill>
                <Pill className="bg-lime-500">Tanks</Pill>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 overflow-y-auto gap-4 max-h-90 -mx-3 pr-3 scrollbar-thin">
                {SHOP_DATA.map(sdata => {
                    const variantInfo = VARIANT_DATA[sdata.variant];
                    return (
                        <ShopGridItem key={sdata.variant} name={variantInfo.name} price={sdata.price} 
                            image={variantInfo.sprite} onClick={() => selectFishHandler(sdata)}
                        />
                    );
                })}
            </div>
        </Modal>
    );
};

export default ShopModal;