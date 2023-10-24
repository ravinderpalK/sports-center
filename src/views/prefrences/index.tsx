import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";
import PreferedSportsAndTeams from "./PreferedSportsAndTeams";
import { fetchPrefrences } from "../../context/user_prefrences/actions";
import { usePrefrencesDispatch, usePrefrencesState } from "../../context/user_prefrences/context";


const Prefrences = (props: any) => {
  const { setIsOpen } = props;
  const prefrencesDispatch = usePrefrencesDispatch();
  const prefrencesState = usePrefrencesState();
  useEffect(() => {
    fetchPrefrences(prefrencesDispatch);
  }, [prefrencesDispatch]);

  if (prefrencesState.isLoading)
    return <div>Loading</div>

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
          <Dialog.Title as="h1" className="text-2xl font-bold leading-6 text-gray-900">Prefrences</Dialog.Title>
          <PreferedSportsAndTeams setIsOpen={setIsOpen} />
        </Dialog.Panel>
      </Transition.Child>
    </div>
  )
}

export default Prefrences;