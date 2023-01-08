import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: '',
  token: '',
  userRole: ''
};

//to call this function we have to use dispatch 
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
     const {name, userRole, token} = actions.payload
        state.name = name
        state.userRole = userRole
        state.token = token
    },
    resetDetails: (state, actions) => {
         state.name =''
         state.userRole =''
         state.token =''
     },
  }
});


export const { setUserDetails,resetDetails } = userSlice.actions;
export default userSlice.reducer;


