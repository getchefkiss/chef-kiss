import Cookies from "universal-cookie"

const cookie = new Cookies()

let recipeHistory = { }

export const initRecipeHistory = (myRecipes) => {

    if(cookie.get('recipeHistory', { path: '/' }) === undefined) {
        console.log('Recipe history not found.')
        cookie.set('recipeHistory', {
        }, { path: '/' })
    } else {
        console.log(`Recipe history found!\n${cookie.get('recipeHistory', { path: '/' })}`)
    }
}
export const addPoint = (recipeID) => {
    
}
export const getHistory = () => { return cookie.get('recipeHistory', { path: '/' }) }