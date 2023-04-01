import React,{useState} from "react";


const InputArea= (props) => {
    const [inputText, setInputText] = useState('');
    const changeHandler = (event) => {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    return(
        <div className="form">
            <input type="text" onChange={changeHandler} value={inputText}/>
            <button onClick={()=>{
                props.onAdd(inputText);
                setInputText("");
            }}><span>Add</span></button>
        </div>
    )
}


export default InputArea;