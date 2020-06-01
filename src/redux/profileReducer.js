import { profileAPI } from "../api/api";

const   ADD_POST = 'ADD-POST',
        SET_USER_PROFILE = 'SET_USER_PROFILE',
        TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
        SET_STATUS = 'SET_STATUS',
        SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {

    posts: [
    {id: 1, message: 'First random post', likesCount: 20},
    {id: 2, message: 'Second random post', likesCount: 15},
    {id: 3, message: 'Ale ejji', likesCount: 50}
    ],
    profile: null,
    isFetching: false,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
        let id = state.posts[state.posts.length - 1].id + 1;
        let message = action.newPostBody;
        let likesCount = 0;
        return {
            ...state,
            posts: [...state.posts, {id, message, likesCount}]
        }
        case SET_USER_PROFILE: {
            return {
            ...state,
            profile: action.profile
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: 
            return state;
    }
};

// Action creators

export const addPostActionCreator = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    };
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};export const sevePhotoSeccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    };
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    };
};
// Thunk-s 

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async(dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const savePhoto = (file) => async(dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(sevePhotoSeccess(response.data.data.photos));
    }
};
export const saveDataProfile = (profile) => async(dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
};

export default profileReducer;