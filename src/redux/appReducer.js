import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
  isLoading: false
}

const AppReducer = createSlice({
  name: 'appReducer',
  initialState, 
  reducers: {
    app_loading: (state, {payload}) => ({
      ...state, isLoading: payload !== "close" ? true : false
    })
  }
}) 


export const { show_modal, show_notice, step_modal, app_loading, update_agency } = AppReducer.actions
export default AppReducer.reducer