import React from "react";
import Modals from "../Modals/Modals";
import CloseIcon from '@mui/icons-material/Close';
import s from './AddTodoModal.module.scss';

interface IProp {
    closeFunc: Function;
}

const AddTodoModal: React.FC<IProp> = ({ closeFunc }) => {
    
    const handlSubmit = () => {
        
    }

    return (
        <Modals closeFunc={closeFunc}>
            <div>
                <button type="button" onClick={closeFunc}>
                    <CloseIcon/>
                </button>
                <form className={s.addForm} >
                    <h1 className={s.addForm_title}>Add Mission</h1>
                    <label>
                        Title
                        <input type="text" name="title" required minLength={3} maxLength={50} title="Title must contain at least 3 character" />
                    </label>
                    <label>
                        Description
                        <input type="textbox" name="password" minLength={7} maxLength={150} pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="" />
                    </label>
                    <label>
                        Private
                        <input type="checkbox" name="isPrivate" value="private"/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Modals>
    )
};

export default AddTodoModal;