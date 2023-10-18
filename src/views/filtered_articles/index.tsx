import { useEffect } from "react";
import { useTeamsDispatch, } from "../../context/teams/context";
import { fetchTeams } from "../../context/teams/actions";
import SportAndTeamSelector from "./SportAndTeamSelector";
import { useSportsDispatch } from "../../context/sports/context";
import { fetchSports } from "../../context/sports/action";


const Filter: React.FC = () => {
  const teamsDispatch = useTeamsDispatch();
  const sportsDispatch = useSportsDispatch();
  useEffect(() => {
    fetchTeams(teamsDispatch);
    fetchSports(sportsDispatch);
  }, [teamsDispatch, sportsDispatch]);

  return (
    <div className="my-4 mx-4">
      <h3 className="font-bold py-2">Favourities</h3>
      <SportAndTeamSelector />
    </div>
  )
}

export default Filter;