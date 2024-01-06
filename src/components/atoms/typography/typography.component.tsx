import clsx from "clsx";
import React from "react";

type DefaultVariantMappingType = "h1" | "h2" | "h3" | "h6" | "body";

interface DefaultVariantMappingProps {
  h1: string;
  h2: string;
  h3: string;
  h6: string;
  body: string;
}

const defaultVariantMapping: DefaultVariantMappingProps = {
  h1: "h1",
  h2: "h6",
  h3: "h6",
  h6: "h6",
  body: "p",
};

type ColorTransformationsType =
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
  textSecondary: "text-white/70",
  error: "error.main",
};

const variantTransformations: DefaultVariantMappingProps = {
  h1: "text-6xl font-extrabold",
  h2: "text-4xl font-bold",
  h3: "text-3xl font-semibold",
  h6: "text-xl",
  body: "text-base",
};

const transformDeprecatedVariant = (variant: DefaultVariantMappingType) => {
  return variantTransformations[variant] || variant;
};

const transformDeprecatedColors = (color: ColorTransformationsType) => {
  return colorTransformations[color] || color;
};

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: DefaultVariantMappingType;
  color?: ColorTransformationsType;
  className?: string;
}

function Typography({ variant, color, children, className }: TypographyProps) {
  const element = defaultVariantMapping[variant!];
  const classVariant = transformDeprecatedVariant(variant!);
  const classText = transformDeprecatedColors(color!);

  return React.createElement(
    element,
    { className: clsx(classVariant, classText, className) },
    children
  );
}

Typography.defaultProps = {
  variant: "inherit",
  color: "textPrimary",
};

export default Typography;
