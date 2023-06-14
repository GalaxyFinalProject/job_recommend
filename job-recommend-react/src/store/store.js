import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    socialId: '',
    platformType: '',
    userLikeAddress: [],
    userLikeSkill: [],
    userLikeJob: [],
}

let userSkill = createSlice({
    name: 'skillList',
    initialState: [],
    reducers: {
        addSkill: (state, action) => {
            state.push(action.payload);
        },
        removeSkill: (state, action) => {
            state.splice(
                state.findIndex((item) => item === action.payload), 1
            );
        },
        clearLanguage: () => []
    },
})

let LoginUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { socialId, platformType, userLikeAddress, userLikeSkill, userLikeJob } = action.payload;
            state.socialId = socialId;
            state.platformType = platformType;
            state.userLikeAddress = userLikeAddress;
            state.userLikeSkill = userLikeSkill;
            state.userLikeJob = userLikeJob;
        },
        clearUser: () => initialState,
    },
})

export default configureStore({
    reducer: {
        userSkill: userSkill.reducer,
        LoginUser: LoginUser.reducer
    }
})

export const { addSkill, removeSkill, clearLanguage } = userSkill.actions;
export const { setUser, clearUser } = LoginUser.actions;