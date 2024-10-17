import React, { useState, useEffect } from 'react';
import './AvatarSelector.css';

const AvatarSelector = ({ onSelect }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [userName, setUserName] = useState('');

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

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(data => setUserName(data.name))
            .catch(error => console.error('Error fetching user name:', error));
    }, []);

    return (
        <div>
            <h3>step1. <span style={{ color: '#708090' }}>{userName}</span> 님의 캐릭터를 선택해주세요</h3>
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
