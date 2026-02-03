import Modal from "../../ui/Modal";
import Pill from "../../ui/Pill";
import ShopGridItem from "./grid/ShopGridItem";

const ShopModal = props => {
    return (
        <Modal title="Shop">
            <div className="flex gap-3 justify-center mb-4">
                <Pill className="bg-blue-400">Fish</Pill>
                <Pill className="bg-orange-400">Decor</Pill>
                <Pill className="bg-lime-500">Tanks</Pill>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 overflow-y-auto gap-4 max-h-90 -mx-3 pr-3 scrollbar-thin">
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
                <ShopGridItem name="Tilapia" price="50" />
            </div>
        </Modal>
    );
};

export default ShopModal;