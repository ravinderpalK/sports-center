import React, { useState } from "react";
import { useSportState } from "../../context/sports/context";
import { useTeamsState } from "../../context/teams/context";
import { Team } from "../../context/teams/types";

export interface SelectedSport {
  name: string;
}

const SportAndTeamSelector: React.FC = () => {
  const teamsState = useTeamsState();
  const { teams } = teamsState;

  const sportsState = useSportState()
  const { sports } = sportsState;

  let selectedSport = "Cricket";
  const getTeamsBySport = (sport: string) => teams.filter((team) => team.plays == sport);
  const initialTeam = getTeamsBySport(selectedSport);

  const [selectedSportTeams, setSelectedSportTeams] = useState<Team[]>(initialTeam);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedSport = e.target.value;
    setSelectedSportTeams(getTeamsBySport(selectedSport));
  }
  return (
    <div>
      <div>
        <select onChange={handleChange} value={selectedSport}>
          {sports.map((sport) => {
            return (
              <option key={sport.name} value={sport.name}>{sport.name}</option>
            )
          })}
        </select>
      </div>
      <div>
        <select>
          {selectedSportTeams.map((team) => {
            return (
              <option key={team.id} value={team.name}>{team.name}</option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default SportAndTeamSelector;