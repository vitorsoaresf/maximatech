import { ButtonComponent } from "@libs/chakra";
import { PagingStyled } from "./styles";
import { theme } from "@styles";

interface IPaging {
  label: string;
  onClick: () => void;
}

export const Paging = ({ label, onClick }: IPaging) => {
  return (
    <ButtonComponent
      onClick={onClick}
      _hover={{
        backgroundColor: theme.palette.black,
        color: theme.palette.white,
      }}
      {...PagingStyled}
    >
      {label}
    </ButtonComponent>
  );
};
