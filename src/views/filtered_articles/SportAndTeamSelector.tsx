import React, { useEffect, useState } from "react";
import { useSportState } from "../../context/sports/context";
import { useTeamsState } from "../../context/teams/context";
import FilteredArticles from "./FilteredArticles";


const SportAndTeamSelector: React.FC = () => {
  const sportsState = useSportState()
  const { sports } = sportsState;

  const [selectedSport, setSelectedSport] = useState<string>("Cricket");
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  const teamsState = useTeamsState();
  const { teams } = teamsState;
  const getTeamsBySport = (sport: string) => teams.filter((team) => team.plays == sport);

  const handleSportChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSport(e.target.value);
  }
  const selectedSportTeams = getTeamsBySport(selectedSport);
  console.log(selectedSportTeams[0]?.name);
  let initialSelectedTeam = selectedSportTeams[0]?.name;

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeam(e.target.value);
  }
  useEffect(() => {
    setSelectedTeam(initialSelectedTeam);
  }, [initialSelectedTeam])

  return (
    <div>
      <div>
        <div className="mt-2">
          <select onChange={handleSportChange} value={selectedSport} className="bg-white border-2 border-gray-400 px-1 py-1">
            {sports.map((sport) => {
              return (
                <option key={sport.name} value={sport.name}>{sport.name}</option>
              )
            })}
          </select>
        </div>
        <div className="mt-2">
          <select onChange={handleTeamChange} className="bg-white border-2 border-gray-400 px-1 py-1">
            {Array.isArray(selectedSportTeams) && selectedSportTeams.map((team) => {
              return (
                <option key={team.id} value={team.name}>{team.name}</option>
              )
            })}
          </select>
        </div>
      </div>
      <div>
        <FilteredArticles selectedSport={selectedSport} selectedTeam={selectedTeam} />
      </div>
    </div>
  )
}

export default SportAndTeamSelector;