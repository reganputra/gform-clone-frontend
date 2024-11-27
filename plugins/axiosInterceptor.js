import { Promise } from "core-js"

export default function({$axios, redirect ,store}) {
$axios.onRequest(config => {
    if(store.state.auth.accessToken) {
        config.headers['Authorization'] = `Bearer ${store.state.auth.accessToken}`
    }
})
    $axios.onResponseError(async error => {
        try {
            if(error.response.data.message === 'refresh token is expired' || error.response.data.message === 'invalid refresh token' ){
                throw new Error('LOGOUT')
            }

            if(error.response.status === 500 && error.response.data.message === 'access token is expired'){
                alert('access token is expired')
                let refreshToken = store.state.auth.refreshToken

                const response = await $axios.$post('/refresh-token', {'refreshToken': refreshToken})
                if(!response) {throw new Error('LOGOUT')}

                // menyimpan token baru ke store/auth
                store.commit('auth/setAccessToken', response.accessToken)
                store.commit('auth/setRefreshToken', response.refreshToken)

                // request ulang accessToken
                let originalRequest = error.config
                originalRequest.headers['Authorization'] = `Bearer ${response.accessToken}`
                return $axios(originalRequest)
            } else {
               return Promise.reject(error)
            }

        } catch (error) {
            if(error.message === 'LOGOUT')
            return redirect('/logout')
        }
    })
}