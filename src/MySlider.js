import { useState } from "react";
import './Slider.scss';
function MySlider() {
    const [value, setValue] = useState(128);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return(
        <div className="myslider">
            <div className="slider-group">
                <input type="range" min="0" max="255" value={value} onChange={handleChange} />
                <span>{value}</span>
            </div>
        </div>
    );
}

export default MySlider;