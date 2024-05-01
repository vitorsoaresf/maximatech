import { ReactElement } from "react";
import { IconSearch } from "./Search";
import { IconNewTab } from "./NewTab";
import { IconTrash } from "./Trash";

interface IIcon {
  [x: string]: ReactElement;
}

export const Icon: IIcon = {
  search: <IconSearch />,
  newTab: <IconNewTab />,
  trash: <IconTrash />,
};
