"use client";
import { FC } from "react";
import { ActionModalButton } from "../../types";

const ButtonAlertModal: FC<ActionModalButton> = ({
  emphasis = false,
  important = false,
  label,
  onClick,
}): JSX.Element => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      style={{ outline: "none", WebkitTapHighlightColor: "transparent" }}
      type="button"
      className={`
                ${important ? "text-rose-500" : "text-blue-500"}
                ${important || emphasis ? "font-semibold" : ""}
                border-t
                border-t-gray-300
                py-3
                text-lg
                w-full
                active:bg-neutral-400/30
                active:dark:bg-neutral-500/30
                dark:border-t-gray-700 
            `}
    >
      {label}
    </button>
  );
};

export { ButtonAlertModal };
