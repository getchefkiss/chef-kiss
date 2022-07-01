import Cookies from "universal-cookie";
import demoRecipes from './placeholder-recipes.json';

const cookies = new Cookies();

const cookieInit = () => {
    console.log('--- init cookies ---');

    if(cookies.get('recipes') === undefined ||
       cookies.get('homeArrangement', { path: 'settings/' }) === undefined ||
       cookies.get('showVersionLabel', { path: 'settings/' }) === undefined) {
        console.log('cookies not found');

        //cookies.set('recipes', 0, { path: '/' });

        const defaultHomeArrangement = [ 'recomended', 'last_viewed', 'all' ];
        const defaultShowVersionLabel = true;

        cookies.set('recipes', JSON.stringify(demoRecipes), { path: '/'});
        cookies.set('homeArrangement', defaultHomeArrangement, { path: 'settings/'});
        cookies.set('showVersionLabel', defaultShowVersionLabel, { path: 'settings/'});
    }
    else {
        console.log('found cookies');
        console.log(`\'recipes\' cookie:\n- ${JSON.stringify(cookies.get('recipes'))}`);
        console.log(`\'homeArrangement\' cookie:\n- ${cookies.get('homeArrangement', { path: 'settings/' })}`);
        console.log(`\'showVersionLabel\' cookie:\n- ${cookies.get('showVersionLabel', { path: 'settings/' })}`);
    }
}
export default cookieInit;

/* recipes */
export const recipesIsEmpty = () => {
    let recipes = cookies.get('recipes');

    if(recipes === 0) { return true; }
    else { return false; }
}
export const getRecipes = () => { return cookies.get('recipes'); }

/* home arrangement */
export const getHomeArrangement = () => { return cookies.get('homeArrangement', { path: 'settings/' });; }
export const setHomeArrangement = (newArrangement) => { cookies.set('homeArrangement', newArrangement, { path: 'settings/' }); }

/* show version label */
export const getShowVersionLabel = () => { return cookies.get('showVersionLabel', { path: 'settings/'}); }
export const setShowVersionLabel = (newArrangement) => { cookies.set('homeArrangement', newArrangement, { path: 'settings/' }); }