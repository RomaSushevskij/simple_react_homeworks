import axios, {AxiosResponse} from 'axios'

export type PostResponseType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
    error:string
}

export const requestAPI = {
    requestCreate(success: boolean) {
        return axios.post<any, AxiosResponse<PostResponseType>, { success: boolean }>(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
            .then(response => {
                return {data: response.data, status: response.status}
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                const data = error.response ? error.response.data : error.message
                const status = error.response && error.response.status
                return {data: data, status: status}
            })
    }
}
