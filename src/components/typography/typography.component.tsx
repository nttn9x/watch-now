import React, { DetailedHTMLProps } from "react";

const styles = {
  root: "text",
};

type DefaultVariantMappingType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit";

interface DefaultVariantMappingProps {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  subtitle1: string;
  subtitle2: string;
  body1: string;
  body2: string;
  inherit: string;
}

const defaultVariantMapping: DefaultVariantMappingProps = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p",
};

type ColorTransformationsType =
  | "primary"
  | "primary"
  | "textPrimary"
  | "secondary"
  | "textSecondary"
  | "error";

interface ColorTransformationsProps {
  primary: string;
  textPrimary: string;
  secondary: string;
  textSecondary: string;
  error: string;
}

const colorTransformations: ColorTransformationsProps = {
  primary: "primary.main",
  textPrimary: "text-white",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main",
};

const transformDeprecatedColors = (color: ColorTransformationsType) => {
  return colorTransformations[color] || color;
};

interface TypographyProps {
  variant?: DefaultVariantMappingType;
  color?: ColorTransformationsType;
  children: React.ReactNode;
}

function Typography({ variant, color, children }: TypographyProps) {
  const element = defaultVariantMapping[variant!];
  const className = transformDeprecatedColors(color!);

  return React.createElement(element, { className }, children);
}

Typography.defaultProps = {
  variant: "inherit",
  color: "textPrimary",
};

export default Typography;
