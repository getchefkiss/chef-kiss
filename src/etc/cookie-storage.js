import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function cookieInit() {
    console.log('--- init cookies ---');

    if(cookies.get('recipes') === undefined) {
        console.log('\'recipes\' cookie not found');

        //cookies.set('recipes', 0, { path: '/' });
        const demoRecipes = {
            'Recipe 1': {
                'title': 'Recipe 1',
                'description': 'Recipe 1 description',
                'ingredients': [ '1', '2', '3', '4', '5' ],
                'time': 30,
                'type': 0
            },
            'Recipe 2': {
                'title': 'Recipe 2',
                'description': 'Recipe 2 description',
                'ingredients': [ '1', '2', '3', '4', '5' ],
                'time': 30,
                'type': 0
            },
            'Recipe 3': {
                'title': 'Recipe 3',
                'description': 'Recipe 3 description',
                'ingredients': [ '1', '2', '3', '4', '5' ],
                'time': 30,
                'type': 0
            },
            'Recipe 4': {
                'title': 'Recipe 4',
                'description': 'Recipe 4 description',
                'ingredients': [ '1', '2', '3', '4', '5' ],
                'time': 30,
                'type': 0
            },
            'Recipe 5': {
                'title': 'Recipe 5',
                'description': 'Recipe 5 description',
                'ingredients': [ '1', '2', '3', '4', '5' ],
                'time': 30,
                'type': 0
            },
        }

        cookies.set('recipes', JSON.stringify(demoRecipes), { path: '/'})
    }
    else {
        console.log('found \'recipes\' cookie');
        console.log(`\'recipes\' cookie:\n- ${JSON.stringify(cookies.get('recipes'))}`);
    }
}

export function recipesIsEmpty() {
    let recipes = cookies.get('recipes');

    if(recipes === 0) { return true; }
    else { return false; }
}
export function getRecipes() {
    let recipes = JSON.parse(cookies.get('recipes'));
    return recipes;
}