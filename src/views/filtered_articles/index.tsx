import { useEffect } from "react";
import { useTeamsDispatch, } from "../../context/teams/context";
import { fetchTeams } from "../../context/teams/actions";
import SportAndTeamSelector from "./SportAndTeamSelector";
import { useSportState, useSportsDispatch } from "../../context/sports/context";
import { fetchSports } from "../../context/sports/action";


const Filter: React.FC = () => {
  const teamsDispatch = useTeamsDispatch();
  const sportsDispatch = useSportsDispatch();
  const sportsState = useSportState();
  useEffect(() => {
    fetchTeams(teamsDispatch);
    fetchSports(sportsDispatch);
  }, [teamsDispatch, sportsDispatch]);

  if (sportsState.isLoading)
    return <div>Lading</div>
  return (
    <div className="my-4 mx-4 text-xs lg:text-base">
      <h3 className="font-bold py-2">Favourities</h3>
      <SportAndTeamSelector />
    </div>
  )
}

export default Filter;