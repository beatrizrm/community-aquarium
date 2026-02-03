const CircleButton = props => {
    return <button className="bg-white w-9 h-9 rounded-full cursor-pointer active:translate-y-px">{props.children}</button>;
};

export default CircleButton;
