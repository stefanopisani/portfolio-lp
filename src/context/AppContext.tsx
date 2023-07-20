import { Dispatch, SetStateAction, createContext } from "react";
type Props = {
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
  navigation: boolean;
  setNavigation: Dispatch<SetStateAction<boolean>>;
};
const props: Props = {
  menuActive: false,
  setMenuActive: () => false,
  navigation: false,
  setNavigation: () => false,
};
const AppContext = createContext(props);

export default AppContext;
