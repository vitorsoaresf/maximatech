import { IIconComponent } from "@interfaces/components";
import { IconComponent } from "@libs/chakra";
import { CiSearch } from "react-icons/ci";

export const IconSearch = ({
  width = "20px",
  height = "20px",
}: IIconComponent) => {
  return <IconComponent as={CiSearch} width={width} height={height} />;
};
