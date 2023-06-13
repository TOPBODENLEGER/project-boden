import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { menuSlice } from "@/state/statsMenu";
import { useMemo } from "react";

const rootAction = {
  ...menuSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
