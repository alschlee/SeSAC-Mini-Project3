import React from 'react';
import './AvatarPreview.css';

const AvatarPreview = ({ avatar, nickname, favoriteSong, favoriteFood, favoriteColor }) => {
    const lyricsData = {
        "Supernatural": "私とあなた \n Golden moon \n diamond stars",
        "How Sweet": "다 알고 있어 뻔한 수작일 뿐이야 \n 완전 쉬운 공식이야 \n It’s like biting an apple",
        "Bubble Gum": "눈 감아도 기억나게 \n 어디라도 따라갈래 \n You're so delicate",
        "OMG": "멀리든 언제든지 달려와 \n 바쁜 척도 없이 넌 나타나 \n 이게 말이 되니 난 물어봐",
        "Ditto": "널 보는 내 마음은 \n 어느새 여름 지나 가을 기다렸지 \n 기다렸지 all this time",
        "Attention": "가끔은 정말 헷갈리지만 분명한 건 \n Got mе looking for attention",
    };

    const lyrics = lyricsData[favoriteSong] ? lyricsData[favoriteSong].split('\n') : [];

    return (
        <div className="avatar-preview">
            <h3>✨ 캐릭터가 완성되었어요 ✨</h3>
            <div className="background">
                <img src={avatar} alt="Selected Avatar" className="selected-avatar" />
                <p>
                    I AM... <span style={{ fontWeight: 'bold' }}>{nickname}</span> 💭
                </p>
                <p>
                    My Favorite Song is... <span style={{ fontWeight: 'bold' }}>{favoriteSong}</span> 🎶
                </p>
                {favoriteSong && (
                    <div>
                        {lyrics.map((line, index) => (
                            <p key={index} style={{ margin: 5, fontSize: '0.8rem', fontWeight: 'bold', fontStyle: 'italic', color: '#708090'}}>{line}</p>
                        ))}
                    </div>
                )}
                <p>
                    My Favorite Food is... <span style={{ fontWeight: 'bold' }}>{favoriteFood}</span> 🥰
                </p>
                <p>
                    My Favorite Color is... <span style={{ fontWeight: 'bold', color: favoriteColor }}>{favoriteColor}</span> 🎨
                </p>
            </div>
        </div>
    );
};

export default AvatarPreview;