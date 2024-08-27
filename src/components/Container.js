import { ReactComponent as CheckBox } from '../check-box-empty.svg';
import { useState } from 'react';
import '../Task.scss';

const Task = (props) => {
    const [input, setInput] = useState('');
    function handleChange(event){
        setInput(event.target.value);
    }    
    function handleSubmit(){
        
    }
    return(
        <div className="task">
            <CheckBox />
            <input placeHolder="Digite aqui sua tarefa..." value={input.content} onChange={handleChange} ></input>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    )
};

const Container = (props) => {
    return(
        <div className="container">
            <Task />
        </div>
    );
};

export default Container; 