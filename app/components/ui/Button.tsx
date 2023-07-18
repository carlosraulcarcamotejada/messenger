import { FC, ElementType } from "react";
import { Spinner } from ".";

interface IButtonProps {
  block?: boolean;
  isDisable?: boolean;
  isRounded?: boolean;
  label: string;
  leftIcon?: ElementType;
  onClick?: () => void;
  righIcon?: ElementType;
  type?: "button" | "submit";
  variant: "primary" | "outline" | "secondary";
}

const Button: FC<IButtonProps> = ({
  block,
  isDisable,
  isRounded,
  leftIcon: LeftIcon,
  label,
  onClick,
  righIcon: RighIcon,
  type = "button",
  variant,
}): JSX.Element => {
  return (
    <button
      onClick={() => {
        if (typeof onClick === "function") {
          onClick();
        }
      }}
      disabled={isDisable}
      type={type}
      style={{ outline: "none", WebkitTapHighlightColor: "transparent" }}
      className={`
                ${block ? "w-full" : ""}
                ${variant === "primary" ? "bg-blue-600 " : ""}
                ${variant === "primary" ? "text-white" : ""}
           

                ${variant === "secondary" ? "bg-gray-300/40" : ""}
                ${variant === "secondary" ? "text-blue-600" : ""}
          

                ${variant === "outline" ? "border" : ""}
                ${variant === "outline" ? "border-blue-600" : ""}
                ${variant === "outline" ? "text-blue-600" : ""}
   
                ${isRounded ? "rounded-full" : "rounded-lg"}

                h-10
                active:opacity-80
                transition
                disabled:cursor-not-allowed
                disabled:opacity-70
                `}
    >
      <div className="flex items-center justify-center px-6">
        {isDisable ? (
          <Spinner size={25} />
        ) : (
          <div className="flex items-center justify-center">
            <div>{LeftIcon && <LeftIcon />}</div>
            <div>{label}</div>
            <div>{RighIcon && <RighIcon />}</div>
          </div>
        )}
      </div>
    </button>
  );
};

export { Button };
