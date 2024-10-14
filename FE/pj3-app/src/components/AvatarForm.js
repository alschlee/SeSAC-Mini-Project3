import React from 'react';
import './AvatarForm.css';
import ColorPalette from './ColorPalette';

const data = "이진경" /* 백엔드에서 받아 올 data */

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
            <h3>step2. <span style={{ color: '#708090' }}>{data}</span>  님의 캐릭터를 소개해주세요</h3>

            <form className="avatar-form" onSubmit={(e) => { onSubmit(e); }}>
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