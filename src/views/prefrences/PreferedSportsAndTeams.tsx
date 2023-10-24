import React from "react";
import { useSportState } from "../../context/sports/context";
import { useTeamsState } from "../../context/teams/context";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePrefrencesDispatch, usePrefrencesState } from "../../context/user_prefrences/context";
import { updatePrefrences } from "../../context/user_prefrences/actions";

type Inputs = {
  sports: string[];
  teams: string[];
}

const PreferedSportsAndTeams: React.FC = () => {
  const sportsState = useSportState();
  const teamsState = useTeamsState();
  const allSports = sportsState.sports;
  const allTeams = teamsState.teams;

  const prefrencesState = usePrefrencesState();
  const prefrencesDispatch = usePrefrencesDispatch();

  let defaultSports = prefrencesState.prefrences.sports;
  let defaultTeams = prefrencesState.prefrences.teams;

  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({ defaultValues: { sports: defaultSports, teams: defaultTeams } });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const user_prefrences = {
      preferences: data,
    }
    updatePrefrences(prefrencesDispatch, user_prefrences);
  }
  return (
    <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-left">
        <h2 className="text-xl font-bold">Favourite Sports</h2>
        <div className="grid grid-cols-3 gap-x-32">
          {allSports.map((sport) => (
            <div key={sport.id} className="flex items-baseline mt-1">
              <label htmlFor={`${sport.id}`} className="">{sport.name}</label>
              <input {...register("sports")} type="checkbox" id={`${sport.id}`} value={sport.name} className="ml-auto w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
      <div className="text-left mt-4">
        <h2 className="text-xl font-bold">Favourite Teams</h2>
        <div className="grid grid-cols-3 gap-x-32">
          {allTeams.map((team) => (
            <div key={team.id} className="flex items-baseline mt-1">
              <label htmlFor={`${team.id}`} className="">{team.name}</label>
              <input {...register("teams")} type="checkbox" id={`${team.id}`} value={team.name} className="ml-auto w-4 h-4" />
            </div>
          ))}
        </div>
        <div className="mt-8 float-right">
          <button type="submit" className="bg-gray-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </div>
    </form>
  )
}
export default PreferedSportsAndTeams;