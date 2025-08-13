import { createSlice } from '@reduxjs/toolkit';

const selectedBlog = typeof window !== 'undefined' ? localStorage.getItem('selectedBlog') ?? null : null;
const blogsSlice = createSlice({
    name: 'blogsSlice',
    initialState:{
        selectedBlog: selectedBlog,
    },
    reducers:{
        setSelectedBlog: (state,action) => {
            state.selectedBlog = action.payload
        }
    }
})

export const { setSelectedBlog } = blogsSlice.actions;
export default blogsSlice.reducer