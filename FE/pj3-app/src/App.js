import React, { useState } from 'react';
import AvatarSelector from './components/AvatarSelector';
import AvatarForm from './components/AvatarForm';
import AvatarPreview from './components/AvatarPreview';
import './App.css';

const App = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [nickname, setNickname] = useState('');
    const [favoriteSong, setFavoriteSong] = useState('');
    const [favoriteFood, setFavoriteFood] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [loading, setLoading] = useState(false);
    const [lyrics, setLyrics] = useState('');

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    const handleFormSubmit = () => {
        setLoading(true);
        setShowPreview(false);

        setTimeout(() => {
            setLoading(false);
            setShowPreview(true);
        }, 2000);
    };

    const handleReset = () => {
        setSelectedAvatar(null);
        setNickname('');
        setFavoriteSong('');
        setFavoriteFood('');
        setFavoriteColor('');
        setLyrics('');
        setShowPreview(false);
    };

    return (
        <>
            <div className="header-container">
                <h2>Welcome To Bunnies House!</h2>
                <h2>Bunnies House에 초대할 캐릭터를 만들어보세요</h2>
            </div>

            <div className="app-container">
                <AvatarSelector onSelect={handleAvatarSelect} />
                {selectedAvatar && (
                    <div className="settings-preview-container">
                        <div className="avatar-settings">
                            <AvatarForm
                                onSubmit={handleFormSubmit}
                                nickname={nickname}
                                setNickname={setNickname}
                                favoriteSong={favoriteSong}
                                setFavoriteSong={setFavoriteSong}
                                favoriteFood={favoriteFood}
                                setFavoriteFood={setFavoriteFood}
                                setFavoriteColor={setFavoriteColor}
                                onReset={handleReset}
                                setLyrics={setLyrics}
                            />
                        </div>
                        <div className="avatar-preview">
                            {loading && <div className="loading-animation">••• 캐릭터 로딩중 •••</div>}
                            {showPreview && (
                                <div className="avatar-preview-container fade-in">
                                    <AvatarPreview
                                        avatar={selectedAvatar}
                                        nickname={nickname}
                                        favoriteSong={favoriteSong}
                                        favoriteFood={favoriteFood}
                                        favoriteColor={favoriteColor}
                                        lyrics={lyrics}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default App;