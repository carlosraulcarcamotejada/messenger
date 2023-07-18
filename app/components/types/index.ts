export type ActionModalButton = {
  emphasis?: boolean;
  important?: boolean;
  label: string;
  onClick: () => void;
};

export type TextFieldType = "password" | "text" | "number" | "text-clearable";
