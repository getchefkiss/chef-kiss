import Cookies from "universal-cookie";
import demoRecipes from './placeholder-recipes.json';

const cookies = new Cookies();

export default function cookieInit() {
    console.log('--- init cookies ---');

    if(cookies.get('recipes') === undefined || cookies.get('homeArrangement', { path: 'settings/' }) === undefined) {
        console.log('cookies not found');

        //cookies.set('recipes', 0, { path: '/' });

        const defaultHomeArrangement = [ 'recomended', 'last_viewed', 'all' ];

        cookies.set('recipes', JSON.stringify(demoRecipes), { path: '/'});
        cookies.set('homeArrangement', defaultHomeArrangement, { path: 'settings/'});
    }
    else {
        console.log('found cookies');
        console.log(`\'recipes\' cookie:\n- ${JSON.stringify(cookies.get('recipes'))}`);
        console.log(`\'homeArrangement\' cookie:\n- ${cookies.get('homeArrangement', { path: 'settings/' })}`);
    }
}

/* recipes */
export function recipesIsEmpty() {
    let recipes = cookies.get('recipes');

    if(recipes === 0) { return true; }
    else { return false; }
}
export function getRecipes() {
    let recipes = cookies.get('recipes');
    return recipes;
}

/* home arrangement */
export function getHomeArrangement() {
    let homeArrangement = cookies.get('homeArrangement', { path: 'settings/' });
    return homeArrangement;
}