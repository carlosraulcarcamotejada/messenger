import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { close, open } from "../store/alertDeleteUserModalSlice";

const useAlertDeleteUser = () => {
  const dispatch: AppDispatch = useDispatch();
  const alertDeleteUserModal = useSelector((state: RootState) => state.alertDeleteUserModal);

  const onOpen = () => {
    dispatch(open());
  };

  const onClose = () => {
    dispatch(close());
  };


  return {
    //PROPERTIES
    ...alertDeleteUserModal,
    //METHODS
    onOpen,
    onClose,
  };
};

export { useAlertDeleteUser };
