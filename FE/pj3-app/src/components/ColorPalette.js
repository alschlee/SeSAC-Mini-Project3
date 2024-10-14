import React, { useState } from 'react';
import './ColorPalette.css';

const ColorPalette = ({ onColorSelect }) => {
    const colors = ['blue', 'pink', 'gold', 'green', 'purple'];
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        onColorSelect(color);
    };

    return (
        <div className="color-palette">
            <h4>FAVORITE COLOR</h4>
            <div className="color-options">
                {colors.map((color) => (
                    <div
                        key={color}
                        className="color-option"
                        style={{ 
                            backgroundColor: color,
                            border: selectedColor === color ? '2px solid #000' : '2px solid transparent'
                        }}
                        onClick={() => handleColorSelect(color)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;