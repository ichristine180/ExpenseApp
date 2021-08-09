import AsyncStorage from '@react-native-async-storage/async-storage';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT'


export const AutoAuthenticate = (userId, token, email) => {
    // AsyncStorage.removeItem('user')
    return { type: AUTHENTICATE, userId: userId, token: token, email: email };
};
export const logout = () => {
    AsyncStorage.removeItem('user')
    return { type: LOGOUT };
}
export const authenticate = (email, password, isLogin) => {
    return async dispatch => {
        try {
            let api = '';
            if (!isLogin) {
                api = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRGtn49D2culdLb5NoMm89m6ngztQ6A4s';
            } else {
                api = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRGtn49D2culdLb5NoMm89m6ngztQ6A4s'
            }
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            })
            if (!response.ok) {
                const res = await response.json()
                // console.log(res)
                throw new Error(res.error.message)
            }
            const resData = await response.json();
            dispatch(AutoAuthenticate(resData.localId, resData.idToken, resData.email))
            const experationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000)
            authStorage(resData.email, resData.idToken, resData.localId, experationDate)
        } catch (error) {
            throw error
        }
    }
}

const authStorage = (email, token, userId, experationDate) => {
    AsyncStorage.setItem('user', JSON.stringify({
        email: email,
        token: token,
        userId: userId,
        expireDate: experationDate.toISOString()
    }))
}