import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App() {
    return(
        <>
            <TwitterFollowCard userName="jeronimoszs">
            Jeronimo Betancur Duque
            </TwitterFollowCard>           
            <TwitterFollowCard userName="Betancito">
            Jeronimo Betancur Duque
            </TwitterFollowCard>
            <TwitterFollowCard userName="anthonymartinez" name="Anthony Martinez">
            Anthony Martinez
            </TwitterFollowCard>
        </>
    )
}