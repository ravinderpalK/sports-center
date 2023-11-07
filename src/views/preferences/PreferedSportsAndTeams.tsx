import { useSportState } from "../../context/sports/context";
import { useTeamsState } from "../../context/teams/context";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePreferencesDispatch, usePreferencesState } from "../../context/user_preferences/context";
import { updatePreferences } from "../../context/user_preferences/actions";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";

type Inputs = {
  sports: string[];
  teams: string[];
}

const PreferedSportsAndTeams = (props: any) => {
  const { setIsOpen } = props;
  const sportsState = useSportState();
  const teamsState = useTeamsState();
  const allSports = sportsState.sports;
  const allTeams = teamsState.teams;

  const prefrencesState = usePreferencesState();
  const prefrencesDispatch = usePreferencesDispatch();

  let defaultSports = prefrencesState.preferences.sports;
  let defaultTeams = prefrencesState.preferences.teams;

  const { register, handleSubmit } = useForm<Inputs>({ defaultValues: { sports: defaultSports, teams: defaultTeams } });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const user_prefrences = {
      preferences: data,
    }
    updatePreferences(prefrencesDispatch, user_prefrences);
    setIsOpen(false);
  }

  return (
    <div className="flex min-h-full items-center justify-center p-4 text-center h-screen">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Dialog.Panel className={`w-3/5 bg-white overflow-auto p-8 rounded-2`}>
          <Dialog.Title className="text-2xl font-bold leading-6 text-gray-900">Prefrences</Dialog.Title>
          <form className="m-4 " onSubmit={handleSubmit(onSubmit)}>
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
                <button type="button" onClick={() => setIsOpen(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded mr-2">Cancel</button>
                <button type="submit" className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded ">Save</button>
              </div>
            </div>
          </form>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  )
}
export default PreferedSportsAndTeams;