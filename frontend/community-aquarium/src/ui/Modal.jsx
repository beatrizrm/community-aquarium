const Modal = props => {
    return (
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-full max-w-2xl bg-amber-50 rounded-xl p-3
        ">
            <div className="flex justify-center items-center mb-3">
                
                <h2 className="text-2xl font-bold font-pop text-cyan-700 tracking-wider">
                    {props.title}
                </h2>

                <button className="absolute right-3 flex items-center justify-center w-8 h-8 
                    bg-red-700 text-white text-xl font-black font-elmer rounded-full
                    cursor-pointer active:translate-y-px
                " onClick={props.onClose}>
                    &times;
                </button>
                
            </div>
            
            <div className="m-3">
                {props.children}
            </div>
        </div>
    );
};

export default Modal;