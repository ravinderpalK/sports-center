import { useEffect } from "react";
import { useTeamsDispatch, } from "../../context/teams/context";
import { fetchTeams } from "../../context/teams/actions";
import SportAndTeamSelector from "./SportAndTeamSelector";
import { useSportState, useSportsDispatch } from "../../context/sports/context";
import { fetchSports } from "../../context/sports/action";
import { ScrollToNewsDivProps } from "../articles";


const Filter: React.FC<ScrollToNewsDivProps> = (props) => {
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
    <div className="my-1 lg:my-4 mx-3 lg:mx-4 text-xs lg:text-base">
      <h3 className="font-bold pt-1 pb-2 lg:pt-2">Favourities</h3>
      <SportAndTeamSelector scrollToNewsDiv={props.scrollToNewsDiv} />
    </div>
  )
}

export default Filter;