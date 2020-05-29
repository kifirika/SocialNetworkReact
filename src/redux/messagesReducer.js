const   SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

    dialogs: [
        {id: 1, name:'Иван'},
        {id: 2, name:'Евгений'},
        {id: 3, name:'Дарья'},
        {id: 4, name:'Оксана'},
        {id: 5, name:'Денис'},
    ],
    messages: [
        {id: 1, message:'First message'},
        {id: 2, message:'Second message'},
        {id: 3, message:'Third message'},
        {id: 4, message:'Fourth message'},
        {id: 5, message:'Fifth message'},
    ]

};

const messagesReducer = (state = initialState, action) => {

    switch(action.type) { 
        case SEND_MESSAGE: 
        let text = action.newMessageBody;
        let id = state.messages[state.messages.length - 1].id + 1;
        return {
            ...state,
            messages: [...state.messages, {id, message: text}]
        }      
        default: 
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    };
};

export default messagesReducer;