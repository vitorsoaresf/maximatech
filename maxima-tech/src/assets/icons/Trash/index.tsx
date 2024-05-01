import { IIconComponent } from "@interfaces/components";
import { IconComponent } from "@libs/chakra";
import { FaRegTrashAlt } from "react-icons/fa";

export const IconTrash = ({
  width = "20px",
  height = "20px",
}: IIconComponent) => {
  return <IconComponent as={FaRegTrashAlt} width={width} height={height} />;
};
