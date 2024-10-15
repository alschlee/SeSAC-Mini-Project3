import React, { useState } from 'react';
import './ColorPalette.css';

const ColorPalette = ({ onColorSelect }) => {
    const colors = [
        { name: 'Blue', code: '#006BFF' },
        { name: 'Pink', code: '#FF4E88' },
        { name: 'Yellow', code: '#F3C623' },
        { name: 'Green', code: '#399918' },
        { name: 'Purple', code: '#BF2EF0' },
    ];
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setSelectedColor(color.code);
        onColorSelect(color);
    };

    return (
        <div className="color-palette">
            <h4>FAVORITE COLOR</h4>
            <div className="color-options">
                {colors.map((color) => (
                    <div
                        key={color.name}
                        className={`color-option ${selectedColor === color.code ? 'selected' : ''}`}
                        style={{
                            backgroundColor: color.code,
                        }}
                        onClick={() => handleColorSelect(color)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;
