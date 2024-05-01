import { Header } from "@components";
import { FlexComponent } from "@libs/chakra";
import { RoutesApp } from "@routes/Router";
import { CotainerMainStyled } from "./stylesMain";

export const App = () => {
  return (
    <FlexComponent {...CotainerMainStyled}>
      <Header />
      <RoutesApp />
    </FlexComponent>
  );
};
