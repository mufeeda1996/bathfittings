import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  console.log("4"-"4")
  return (
    <div>
      <FormControl variant="outlined">
        {/* <InputLabel id="language-dropdown-label">Select Language</InputLabel> */}
        <Select
          labelId="language-dropdown-label"
          id="language-dropdown"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          label="Select Language"
        >
          <MenuItem value="">
            <em>English</em>
          </MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="fr">French</MenuItem>
          {/* Add more languages as needed */}
        </Select>
      </FormControl>
      {/* <p>Selected Language: {selectedLanguage}</p> */}
    </div>
  );
}

export default LanguageDropdown;
