import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  InteractivityProps,
  LayoutProps,
  SpaceProps,
  TextDecorationProps,
  TypographyProps,
  PositionProps,
  ThemingProps,
} from "@chakra-ui/react";

export interface StyleComponents
  extends SpaceProps,
    BackgroundProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    TextDecorationProps,
    BorderProps,
    LayoutProps,
    InteractivityProps,
    PositionProps,
    ThemingProps,
    ColorProps {}

export interface IIconComponent {
  width?: string;
  height?: string;
}
