const Modal = props => {
    return (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
            
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative bg-amber-50 rounded-xl max-w-2xl w-full p-3">
                <div className="flex justify-center items-center mb-3">
                    <h2 className="text-2xl font-bold font-pop text-cyan-700 tracking-wider">
                        {props.title}
                    </h2>
                    <button className="absolute right-3 flex items-center justify-center w-8 h-8 
                        bg-red-700 text-white text-xl font-black font-elmer rounded-full
                        cursor-pointer active:translate-y-px
                    ">
                        &times;
                    </button>
                </div>
                <div className="m-3">
                    {props.children}
                </div>
            </div>

        </div>
    );
};

export default Modal;