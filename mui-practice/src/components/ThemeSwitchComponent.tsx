
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useThemeSwitcher } from '../hooks/useThemeSwitcher';

export default function ThemeSwitchComponent() {
  const { themeName, setThemeName } = useThemeSwitcher();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeName(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Theme</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={themeName}
        onChange={handleChange}
      >
        <FormControlLabel value="mui" control={<Radio />} label="MUI Default" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="custom" control={<Radio />} label="Custom" />
        <FormControlLabel value="pragma" control={<Radio />} label="Pragma" />
      </RadioGroup>
    </FormControl>
  );
}