import React, { useState } from 'react';
import './AvatarSelector.css';

const AvatarSelector = ({ onSelect }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const avatars = [
        { id: 1, src: `${process.env.PUBLIC_URL}/images/avatar1.svg` },
        { id: 2, src: `${process.env.PUBLIC_URL}/images/avatar2.svg` },
        { id: 3, src: `${process.env.PUBLIC_URL}/images/avatar3.svg` },
        { id: 4, src: `${process.env.PUBLIC_URL}/images/avatar4.svg` },
        { id: 5, src: `${process.env.PUBLIC_URL}/images/avatar5.svg` },
    ];

    const handleAvatarClick = (src) => {
        setSelectedAvatar(src);
        onSelect(src);
    };

    return (
        <div>
            <h3>step1. 캐릭터를 선택해주세요</h3>
            <div className="avatar-selector">
                {avatars.map((avatar) => (
                    <img
                        key={avatar.id}
                        src={avatar.src}
                        alt={`Avatar ${avatar.id}`}
                        className={`avatar-image ${selectedAvatar === avatar.src ? 'selected' : ''}`}
                        onClick={() => handleAvatarClick(avatar.src)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AvatarSelector;
