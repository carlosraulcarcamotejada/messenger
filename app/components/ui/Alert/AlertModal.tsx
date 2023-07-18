"use client";
import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ButtonAlertModal } from "./ButtonAlertModal";
import { ActionModalButton } from "../../types";

interface IAlertModal {
  actions: ActionModalButton[];
  bodyText: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const AlertModal: FC<IAlertModal> = ({
  isOpen,
  onClose,
  title,
  bodyText,
  actions,
}): JSX.Element => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/5" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0"
            >
              <Dialog.Panel
                className="
                            backdrop-blur-2xl
                            flex 
                            flex-col 
                            rounded-2xl
                            w-4/5
                          bg-white/30 
                          dark:bg-neutral-700/30
                            overflow-x-hidden 
                            "
              >
                <Dialog.Panel
                  className="
                            w-full 
                            max-w-md 
                            transform 
                            overflow-hidden 
                            rounded-t-2xl 
                            p-6 
                            text-left 
                            align-middle 
                            transition-all
                            "
                >
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium text-center leading-6 text-black dark:text-white"
                  >
                    {title}
                  </Dialog.Title>
                  <Dialog.Description
                    as="p"
                    className="mt-2 text-center font-light text-sm text-black dark:text-white"
                  >
                    {bodyText}
                  </Dialog.Description>
                </Dialog.Panel>
                <Dialog.Panel
                  as="div"
                  className={`flex ${
                    actions.length > 1 ? "flex-col-reverse" : ""
                  } rounded-b-2xl`}
                >
                  <ButtonAlertModal label="Cancel" onClick={onClose} />

                  <div
                    className={`
                                ${
                                  actions.length > 1
                                    ? ""
                                    : `last:border-l 
                                     last:border-l-gray-300
                                     dark:last:border-l-gray-700`
                                }
                                w-full
                                `}
                  >
                    {actions.map((action) => (
                      <ButtonAlertModal key={action.label} {...action} />
                    ))}
                  </div>
                </Dialog.Panel>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { AlertModal };
