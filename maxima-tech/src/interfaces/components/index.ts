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

export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  discount_percentage: number;
  promotional_price: number;
  image: string;
  description: string;
}
