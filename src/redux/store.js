import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let store = {
    _state:{
        profilePage: {
            posts: [
                {id: 1, message: 'First random post', likesCount: 20},
                {id: 2, message: 'Second random post', likesCount: 15},
                {id: 3, message: 'Ale ejji', likesCount: 50}
            ],
            newPostText: ''
        },
        messagesPage: {
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
            ],
            newMessageText: ''
        }
    },
    _callSubscriber(){
        console.log('State changed');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);

    }
};




window.store = store;
export default store;