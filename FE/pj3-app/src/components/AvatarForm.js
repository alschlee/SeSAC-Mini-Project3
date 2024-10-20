import React from 'react';
import './AvatarForm.css';
import ColorPalette from './ColorPalette';

const AvatarForm = ({
    onSubmit,
    nickname,
    setNickname,
    favoriteSong,
    setFavoriteSong,
    favoriteFood,
    setFavoriteFood,
    setFavoriteColor,
    onReset,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const characterData = {
            nickname: nickname,
            favorite_song: favoriteSong,
            favorite_food: favoriteFood,
        };

        fetch('http://localhost:8000/create_character', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(characterData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Character created successfully:', data);
            onSubmit();
        })
        .catch(error => {
            console.error('Error creating character:', error);
        });
    };

    const songOptions = [
        "Supernatural",
        "How Sweet",
        "Bubble Gum",
        "OMG",
        "Ditto",
        "Attention",
    ];

    return (
        <>
            <h3>step2. 캐릭터를 소개해주세요</h3>

            <form className="avatar-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="NICKNAME"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                />
                <select
                    value={favoriteSong}
                    onChange={(e) => setFavoriteSong(e.target.value)}
                    required
                >
                    <option value="" disabled>FAVORITE SONG</option>
                    {songOptions.map((song, index) => (
                        <option key={index} value={song}>
                            {song}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="FAVORITE FOOD"
                    value={favoriteFood}
                    onChange={(e) => setFavoriteFood(e.target.value)}
                    required
                />
                <div className="color-palette-container">
                    <ColorPalette onColorSelect={setFavoriteColor} />
                </div>
                <div className="button-container">
                    <button type="submit" className="button">캐릭터 생성하기</button>
                    <button type="button" className="button reset-button" onClick={onReset}>캐릭터 다시 만들기</button>
                </div>
            </form>
        </>
    );
};

export default AvatarForm;
