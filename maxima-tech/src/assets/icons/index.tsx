import { ReactElement } from "react";
import { IconSearch } from "./Search";

interface IIcon {
  [x: string]: ReactElement;
}

export const Icon: IIcon = {
  search: <IconSearch />,
};
