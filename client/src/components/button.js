function button({text,onClick}){
    return(
        <button onClick={onClick}>
            {text}
        </button>
    );
}

export default button;