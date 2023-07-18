'use client'
import { FC } from "react";
import { Switch as HSwitch } from "@headlessui/react";

interface ISwitchProps {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

const Switch: FC<ISwitchProps> = ({ enabled, setEnabled }): JSX.Element => {
  return (
    <HSwitch
      checked={enabled}
      onChange={setEnabled}
      className={`
                ${
                  enabled
                    ? "bg-green-500"
                    : "bg-neutral-200 dark:bg-neutral-700"
                }
                border-2
                border-transparent
                cursor-pointer
                duration-200
                ease-in-out
                focus-visible:ring-2 
                focus-visible:ring-opacity-75
                focus-visible:ring-white 
                focus:outline-none
                h-8 
                inline-flex 
                relative 
                rounded-full
                shrink-0
                transition-colors
                w-14
                `}
    >
      <span
        aria-hidden="true"
        className={`
                    ${enabled ? "translate-x-6" : "translate-x-0"}
                    bg-neutral-100 
                    duration-200 
                    ease-in-out
                    h-7
                    inline-block 
                    pointer-events-none
                    ring-0 
                    rounded-full 
                    shadow-lg 
                    transform 
                    transition
                    w-7
                `}
      />
    </HSwitch>
  );
};

export { Switch };
