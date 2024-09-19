import { useState } from "react"
export function TwitterFollowCard({userName, name, isFollowing}){
    const text = isFollowing ? "Following" : "Follow"
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="Avatar" src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-div">
                    <strong>{name}</strong>
                    <span className="tw-followCard-username">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>
                    Follow
                </button>
            </aside>
        </article>

    )
}