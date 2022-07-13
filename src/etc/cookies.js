import Cookies from "universal-cookie"
 
const cookies = new Cookies()

export const initCookies = () => {
    // Check for user logged in cookie
    if(cookies.get('loggedin') === undefined) {
        console.log('"loggedin" cookie not found!')
        console.log('Setting "loggedin" cookie to false.')
        cookies.set('loggedin', false, { path: '/' })
    } else {
        console.log('Found "loggedin" cookie: ' + cookies.get('loggedin'))
    }
}

/* --- LOGGEDIN COOKIE --- */
export const getLoggedinCookie = () => { return cookies.get('loggedin') }
export const setLoggedinCookie = (value) => { cookies.set('loggedin', value, { path: '/' }) }