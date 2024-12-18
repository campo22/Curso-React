import { useState } from "react";

export function TwitterfollowCart({ children, userName, inicialIsFollowing }) {

    const [isFollowingState, setIsFollowingState] = useState(inicialIsFollowing);

    const text = isFollowingState ? 'Siguiendo' : 'Seguir';

    const buttonClassName = isFollowingState
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowingState(!isFollowingState);
    };

    const imageUrl = `https://unavatar.io/${userName}`;

    return (
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={imageUrl} alt="el avatar de Diver" />

                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
};
