import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App() {
    return(
        <>
            <TwitterFollowCard isFollowing userName="jeronimoszs" name="Jeronimo Betancur Duque" />
            <TwitterFollowCard isFollowing={false} userName="Betancito" name="Jeronimo betancur Duque" />
            <TwitterFollowCard userName="anthonymartinez" name="Anthony Martinez" />
        </>
    )
}