
// reselect - прослойка для

export const getAuth = (state) => {
    return state.auth.isAuth;
};

export const getProfile = (state) => {
    return state.profilePage.profile;
};

export const getStateStatus = (state) => {
    return state.profilePage.status;
};
