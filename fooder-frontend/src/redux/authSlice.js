import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: null,
    isAdmin: JSON.parse(localStorage.getItem('user')) || false,
}

console.log(initialState.user);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.userDetails
            state.token = action.payload.token
            state.isAdmin = action.payload.isAdmin
        },
        register: (state, action) => {
            state.user = action.payload.userDetails
            state.token = action.payload.token
            state.isAdmin = action.payload.isAdmin

        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAdmin = null
            localStorage.clear()
        }
    }
})

export const { login, register, logout } = authSlice.actions

export default authSlice.reducer