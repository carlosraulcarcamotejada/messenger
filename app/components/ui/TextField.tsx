"use client";
import {
  FC,
  useState,
  useCallback,
  ElementType,
  ChangeEvent,
  FocusEvent,
} from "react";
import { TextFieldType } from "../types";
import {
  EyeSlashFill as EyeSlash,
  EyeFill as Eye,
  XCircleFill as XCircle,
} from "../heroIcons";

interface ITextFieldProps {
  block?: boolean;
  icon?: ElementType;
  id: string;
  innerRef: (ref: HTMLInputElement | null) => void;
  isClear?: boolean;
  isDisable?: boolean;
  isTransparent?: boolean;
  label?: string;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  setTextField: () => void;
  type?: TextFieldType;
  value: string;
}

const TextField: FC<ITextFieldProps> = ({
  block,
  icon: Icon,
  id,
  innerRef,
  isClear,
  isDisable,
  isTransparent,
  label,
  onBlur,
  onChange,
  placeholder,
  required = false,
  setTextField,
  type,
  value,
}): JSX.Element => {
  const [hidePassword, setHidePassword] = useState<TextFieldType>("password");

  const toggleHidePassword = useCallback(() => {
    setHidePassword((currentHidePassword) =>
      currentHidePassword === "password" ? "text" : "password"
    );
  }, []);

  return (
    <div
      className={`
                  flex 
                  relative 
                  ${isTransparent ? "opacity-40 dark:opacity-50" : ""} 
                  ${block ? "w-full" : ""}
                `}
    >
      {(label || Icon) && (
        <label
          htmlFor={id}
          className={`

                      ${isClear ? "bg-white" : "bg-neutral-200"}
                      ${isClear ? "dark:bg-neutral-700" : "dark:bg-neutral-900"}

                      border-black
                      flex
                      h-10
                      items-center
                      justify-center
                      relative
                      rounded-l-lg
                      dark:text-white
                      `}
        >
          {label && !Icon && <>{label}</>}
          {Icon && !label && (
            <span className="ml-2.5">
              <Icon />
            </span>
          )}
        </label>
      )}

      <input
        id={id}
        name={id}
        disabled={isDisable}
        required={required}
        placeholder={label ? "" : placeholder}
        type={type === "password" ? hidePassword : type}
        style={{ outline: "none", WebkitTapHighlightColor: "transparent" }}
        onBlur={onBlur}
        onChange={onChange}
        ref={innerRef}
        className={`
                    ${block ? "w-full" : ""}

                    ${type === "text" ? "pr-4" : ""}
                    ${type === "password" ? "pr-10" : ""}
                    ${type === "text-clearable" ? "pr-10" : ""}


                    ${isClear ? "bg-white" : "bg-neutral-200"}
                    ${isClear ? "dark:bg-neutral-700" : "dark:bg-neutral-900"}


                    ${label || Icon ? "rounded-r-lg" : "rounded-lg"}
                    ${label || Icon ? "pl-2" : "pl-4"}

                    h-10
                    transition
                    dark:text-white     
                  `}
      />

      {(type === "text-clearable" ||
        (type === "password" && value.length > 0)) &&
        value.length > 0 && (
          <div
            onClick={() => {
              type === "password" && toggleHidePassword();
              type === "text-clearable" && setTextField();
            }}
            className={`
                      absolute
                      bg-transparent           
                      duration-200
                      flex
                      h-10
                      items-center
                      justify-center
                      right-0                 
                      rounded-xl
                      text-neutral-500
                      top-0
                      transition
                      w-10
                      dark:text-neutral-400
                      `}
          >
            {hidePassword === "password" && type === "password" && <EyeSlash />}
            {hidePassword === "text" && type === "password" && <Eye />}
            {type === "text-clearable" && <XCircle />}
          </div>
        )}
    </div>
  );
};

export { TextField };
