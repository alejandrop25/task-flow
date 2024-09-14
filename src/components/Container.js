import { ReactComponent as CheckBox } from '../check-box-empty.svg';
import { useState } from 'react';
import '../Task.scss';

const NewTask = ({text}) => {
    <div className="task" >
        <CheckBox /> <span>{text}</span>
    </div>
};


const Task = (props) => {
    const [components, setComponents] = useState([]);
    const [input, setInput] = useState('');
    function handleChange(event){
        setInput(event.target.value);
    }
        
    const handleSubmit = (e) => {
        setComponents([...components, <NewTask key={components.length} text={input} />])
    };
    return(
        <div>
        <div className="task">
            <CheckBox />
            <input placeHolder="Digite aqui sua tarefa..." value={input} onChange={handleChange} ></input>
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            {components}
        </div>
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