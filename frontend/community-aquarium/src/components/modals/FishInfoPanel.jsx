const FishInfoPanel = ({ fish, onSell }) => {
    if (!fish) {
        return (
            <div className="w-2/5 rounded-lg bg-amber-100 p-3 flex flex-col gap-3" />
        );
    }

    return (
        <div className="w-2/5 rounded-lg bg-amber-100 p-3 flex flex-col gap-3">
            <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-1">
                    <h2 className="text-xl font-elmerp">{fish.name}</h2>
                    <span className="text-xs text-amber-800">{fish.species}</span>
                    <span className="text-xs text-amber-800">{fish.age} days old</span>
                    <div className="text-xs text-amber-900">
                        <span className="font-bold block">Owner(s):</span>
                        <span>{fish.owner}</span>
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
            <button className="mt-auto bg-amber-500 text-white py-1 rounded-lg flex items-center justify-center gap-2"
            onClick={() => onSell(selectedFish.id)}>
                <span className="font-elmerp">Sell</span>
                <span className="bg-black/10 px-1.5 py-0.1 text-sm font-elmerp rounded text-white/90">$45</span>
            </button>
        </div>
    );
};

export default FishInfoPanel;