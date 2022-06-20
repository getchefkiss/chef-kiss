import packageJson from '../../package.json';

/* --- Version Types (package.json) ---
 * W -> Work in progress
 * T -> Test
 * S -> Small change
 * B -> Beta
 * P -> Production
 */
const getVersionType = () => {
    const version = packageJson.version;
    let type = 'Unknown';

    if(version.includes('W'))      { type = 'Work in progress'; }
    else if(version.includes('T')) { type = 'Test'; }
    else if(version.includes('S')) { type = 'Small change'; }
    else if(version.includes('B')) { type = 'Beta'; }
    else if(version.includes('P')) { type = 'Production'; }

    return type;
}

export default getVersionType;