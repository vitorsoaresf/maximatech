import {
  FlexComponent,
  InputComponent,
  InputGroupComponent,
  InputLeftElementComponent,
  InputRightElementComponent,
  TextComponent,
} from "@libs/chakra";
import {
  ContainerErrorMessageStyled,
  ContainerGroupInput,
  ContainerIconInputStyled,
  ContainerInputStyled,
} from "./styles";

import { forwardRef } from "@libs/chakra";
import { InputProps } from "@chakra-ui/react";

export interface IInput extends InputProps {
  value?: string | number;
  label?: string;
  iconInput?: JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "xs" | "sm" | "md" | "lg";
  actionBtRightPosition?: JSX.Element;
  errorMessage?: string;
}

export const Input = forwardRef(
  (
    {
      value,
      label,
      iconInput,
      onChange,
      size = "md",
      actionBtRightPosition,
      errorMessage = "",
      ...rest
    }: IInput,
    ref
  ) => {
    return (
      <FlexComponent {...ContainerInputStyled}>
        {label && <TextComponent fontSize="12px">{label}</TextComponent>}
        <InputGroupComponent {...ContainerGroupInput}>
          {iconInput && (
            <InputLeftElementComponent {...ContainerIconInputStyled}>
              {iconInput}
            </InputLeftElementComponent>
          )}
          <InputComponent
            value={value}
            onChange={onChange}
            size={size}
            isInvalid={!!errorMessage}
            ref={ref}
            {...rest}
          />
          {actionBtRightPosition && (
            <InputRightElementComponent>
              {actionBtRightPosition}
            </InputRightElementComponent>
          )}
        </InputGroupComponent>
        <TextComponent {...ContainerErrorMessageStyled}>
          {errorMessage}
        </TextComponent>
      </FlexComponent>
    );
  }
);
