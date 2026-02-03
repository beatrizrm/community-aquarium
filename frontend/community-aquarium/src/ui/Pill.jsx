const Pill = props => {
    const isClickable = !!props.onClick;

    const Element = isClickable ? 'button' : 'div';

    const base = "inline-flex items-center justify-center rounded-full text-md px-3 py-1 select-none font-elmerp";

    const style = isClickable 
        ? "cursor-pointer active:translate-y-px" 
        : "";

    const colors = !props.className
        ? "text-black bg-white" 
        : `text-white ${props.className}`;

    return (
        <Element onClick={props.onClick} className={`${base} ${style} ${colors}`}>
            {props.children}
        </Element>
    );
};

export default Pill;
