import React, { useState } from 'react';
import './AvatarSelector.css';

const AvatarSelector = ({ onSelect }) => { 
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const avatars = [
        { id: 1, src: '/images/avatar1.jpg' },
        { id: 2, src: '/images/avatar2.jpg' },
        { id: 3, src: '/images/avatar3.jpg' },
        { id: 4, src: '/images/avatar4.jpg' },
        { id: 5, src: '/images/avatar5.jpg' },
    ];

    const handleAvatarClick = (src) => {
        setSelectedAvatar(src);
        onSelect(src);
    };

    const data = "이진경";

    return (
        <div>
            <h3>step1. <span style={{ color: '#708090' }}>{data}</span>  님의 캐릭터를 선택해주세요</h3>
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