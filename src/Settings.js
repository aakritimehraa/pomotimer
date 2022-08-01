import ReactSlider from 'react-slider';
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
import BackButton from "./BackButton";


function Settings({setShowSettings , workMinutes , breakMinutes , setWorkMinutes, setBreakMinutes}) {
  const settingsInfo = useContext(SettingsContext);
  return(
    <div style={{textAlign:'left'}}>
      <label>work: {workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={workMinutes}
        onChange={newValue => setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={breakMinutes}
        onChange={newValue => setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton setShowSettings={setShowSettings} />
      </div>

    </div>
  );
}

export default Settings;