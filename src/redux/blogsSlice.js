import { createSlice } from '@reduxjs/toolkit';

const blogsSlice = createSlice({
    name: 'blogsSlice',
    initialState:{
        selectedBlog: localStorage.getItem('selectedBlog') ?? null,
    },
    reducers:{
        setSelectedBlog: (state,action) => {
            state.selectedBlog = action.payload
        }
    }
})

export const { setSelectedBlog } = blogsSlice.actions;
export default blogsSlice.reducer