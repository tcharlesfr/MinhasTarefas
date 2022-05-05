import './AddTask.css';
import Button from './Button'
import {useState} from 'react'


const AddTask = ({handleTaskAdd}) => {

    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {  //pega o titulo do input
       setInputData(e.target.value); //coloca no inputData
    };

    const handleAddTaskClick = () => {
        handleTaskAdd(inputData); //passa o inputData para handleTaskAdd
        setInputData("");
    };

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputChange} //chama a funcao handleInputChange
                value={inputData} 
                className="add-task-input" 
                type="text" 
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;