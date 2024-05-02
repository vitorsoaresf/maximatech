import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
  const navigation = useNavigate();

  const redirectPage = (path: string) => {
    navigation(`/${path}`);
  };

  return { redirectPage };
};
