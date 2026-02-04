import Modal from "../../ui/Modal";
import NamedGridItem from "./grid/NamedGridItem";

const DUMMY_FISH = [
    {
        id: '1',
        name: 'Lil\' Fish',
        species: 'Guppy',
        owner: 'u1',
        days: 88, /* replace with birthdate later */
    },
    {
        id: '2',
        name: 'McFish',
        species: 'Guppy',
        owner: 'u2',
        days: 63,
    },
    {
        id: '3',
        name: 'Filet-O-Fish',
        species: 'Tetra',
        owner: 'u3',
        days: 5,
    },
    {
        id: '4',
        name: 'Fishy',
        species: 'Tetra',
        owner: 'u4',
        days: 63,
    },
    {
        id: '5',
        name: 'Fisher Price',
        species: 'Angelfish',
        owner: 'u5',
        days: 37,
    },
    {
        id: '6',
        name: 'Not A Fish',
        species: 'Angelfish',
        owner: 'u2',
        days: 89,
    },
    {
        id: '7',
        name: 'Fish',
        species: 'Betta',
        owner: 'u3',
        days: 22,
    },
    {
        id: '8',
        name: 'Fisherman',
        species: 'Betta',
        owner: 'u4',
        days: 6,
    },
    {
        id: '9',
        name: 'DaFish',
        species: 'Betta',
        owner: 'u8',
        days: 90,
    },
]

const BookModal = props => {
    const fishGrid = (
        <div className="w-3/5 grid grid-cols-4 overflow-y-auto gap-2 -mx-3 pr-3 scrollbar-thin text-sm">
            {DUMMY_FISH.map(fish => <NamedGridItem key={fish.id} name={fish.name} />)}
        </div>
    );

    return (
        <Modal title="Fish" onClose={props.onClose}>
            <div className="flex gap-6 w-full max-h-90">
                {fishGrid}

                {/* Righthand panel */}
                <div className="w-2/5 rounded-lg bg-amber-100 p-3 flex flex-col gap-3">
                    
                    {/* Fish info */}
                    <div className="flex gap-3">
                        <div className="flex-1 flex flex-col gap-1">
                            <h2 className="text-xl font-elmerp">Lil' Fish</h2>
                            <span className="text-xs text-amber-800">Guppy</span>
                            <span className="text-xs text-amber-800">88 days old</span>
                            <div className="text-xs text-amber-900">
                                <span className="font-bold block">Owner(s):</span>
                                <span>user1, user2</span>
                            </div>
                        </div>

                        <div className="flex-1 aspect-square bg-white rounded-lg" />
                    </div>

                    {/* Family tree */}
                    <div className="bg-white/40 rounded p-2 text-center">
                        <div className="text-sm text-amber-800 font-bold">Lineage</div>
                        <div className="flex items-center justify-center gap-2 text-xs">
                            <span>Parent A</span>
                            <span className="text-amber-500">+</span>
                            <span>Parent B</span>
                        </div>
                    </div>

                    {/* Sell button */}
                    <button className="mt-auto bg-amber-500 text-white py-1 rounded-lg flex items-center justify-center gap-2">
                        <span className="font-elmerp">Sell</span>
                        <span className="bg-black/10 px-1.5 py-0.1 text-sm font-elmerp rounded text-white/90">$45</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default BookModal;