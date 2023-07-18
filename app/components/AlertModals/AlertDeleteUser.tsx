"use client";
import { FC } from "react";
import { AlertModal } from "../ui";
import { ActionModalButton } from "../types";
import { useAlertDeleteUser } from "@/app/hooks";

const AlertDeleteUser: FC = (): JSX.Element => {
  const { isOpen, onClose } = useAlertDeleteUser();

  const title = "Delete User";

  const actions: ActionModalButton[] = [
    {
      label: "Delete",
      onClick: () => {
        console.log("Deleting user 47y43hrhjb34");
        onClose();
      },
      important: true,
    },
    // {
    //   label: "Deactivate",
    //   onClick() {
    //     console.log("Desactivating user 47y43hrhjb34");
    //     onClose();
    //   },
    // },
  ];

  const bodyText = "Do you really want to delete the user?";

  return (
    <AlertModal
      actions={actions}
      bodyText={bodyText}
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    />
  );
};

export { AlertDeleteUser };
