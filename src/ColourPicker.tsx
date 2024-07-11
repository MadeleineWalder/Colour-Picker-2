import React, { useState, ChangeEvent } from "react";

const ColourPicker: React.FC = () => {

    const [color, setColor] = useState<string>("#FFFFFF");

    function handleColorChange(event: ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>{color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
};

export default ColourPicker;
