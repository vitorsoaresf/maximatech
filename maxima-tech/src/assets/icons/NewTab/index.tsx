import { IIconComponent } from "@interfaces/components";
import { IconComponent } from "@libs/chakra";
import { ImNewTab } from "react-icons/im";

export const IconNewTab = ({
  width = "20px",
  height = "20px",
}: IIconComponent) => {
  return <IconComponent as={ImNewTab} width={width} height={height} />;
};
