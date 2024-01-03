import axios from "axios"

const BASE_URL="http://localhost:2000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGUwNWE1YzZlYzI1ZmU1YjQwMzQwMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDI0MjAwMiwiZXhwIjoxNzA0NTAxMjAyfQ.ez_noL_YRpyG42LdBkZQ07kyS2r7f5W2JELeydSfSnY"

export const publicRequest= axios.create({
    baseURL: BASE_URL,
})

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`BEARER ${TOKEN}`}
})