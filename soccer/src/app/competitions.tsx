import { getCompetitions } from "@/lib/api";
import axios from "axios";

export default async function Competitions() {
    const competitions = await getCompetitions()
    console.log(competitions);
    
    
    return (
        <div>
            {}
        </div>
    )
}