import React from 'react';
import { setShowVersionLabel } from '../etc/cookie-storage';

const Settings = () => {

  const showVersionLabelChange = (e) => {
    setShowVersionLabel(e.target.value);
  }

  return (
    <>
      <h1 className='serif'>Settings</h1>
      <strong>TESTING</strong>

      <h3 className='title-3'>Home Arrangement</h3>

      <p>Section 1</p>
      <select>
        <option>Recipe of the day</option>
        <option>Last viewed</option>
        <option>All recipes</option>
      </select>

      <p>Section 2</p>
      <select>
        <option>Recipe of the day</option>
        <option>Last viewed</option>
        <option>All recipes</option>
      </select>

      <p>Section 3</p>
      <select>
        <option>Recipe of the day</option>
        <option>Last viewed</option>
        <option>All recipes</option>
      </select>

      <h3 className='title-3'>Show Version Label</h3>

      <input type="checkbox" name="showVersionLabelCheckbox" id="showVersionLabel" onChange={showVersionLabelChange} />
    </>
  );
}

export default Settings;