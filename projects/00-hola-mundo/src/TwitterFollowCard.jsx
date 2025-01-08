import { useState } from "react"
export function TwitterFollowCard({children, userName}){
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? "Following" : "Follow"
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="Avatar" src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-div">
                    <strong>{children}</strong>
                    <span className="tw-followCard-username">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleFollow}>
                    {text}
                </button>
            </aside>
        </article>

    )
}