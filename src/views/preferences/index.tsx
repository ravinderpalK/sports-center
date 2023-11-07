import { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import PreferencesContainer from "./PreferencesContainer";

const Prefrences = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} >
        {props.button}
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <PreferencesContainer setIsOpen={setIsOpen} />
          </div>
        </Dialog>
      </Transition>
    </>)
}

export default Prefrences;