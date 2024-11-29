import { getCompetitions } from "@/lib/api";

export default function Competitions() {
    const competitions = getCompetitions();
    console.log(competitions);
    
    return (
        <div>
            
        </div>
    )
}