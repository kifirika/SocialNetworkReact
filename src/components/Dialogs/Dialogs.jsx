import React from 'react';
import s from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/messagesReducer';
import { Field, reduxForm, reset } from 'redux-form';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name}/>);
    let messagesElements = state.messages.map(message => <Message id={message.id} key={message.id} message={message.message}/>);
    let newMessageText = state.newMessageText;

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    };

    // if (!props.isAuth) {
    //     return <Redirect to={'/login'}/>
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.messagesItem}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>     
            </div>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            
        </div>
    )
};

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dialogAddMessageForm'));
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messagesAreaPlusButton}>
                <Field component='textarea' name='newMessageBody' placeholder='Введите сообщение'/>
                <button></button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm',
    onSubmitSuccess: afterSubmit
})(AddMessageForm);


export default Dialogs; 