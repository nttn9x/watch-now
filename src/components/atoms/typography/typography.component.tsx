import clsx from "clsx";
import React from "react";

type DefaultVariantMappingType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h6"
  | "body"
  | "body2";

interface DefaultVariantMappingProps {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h6: string;
  body: string;
  body2: string;
}

const defaultVariantMapping: DefaultVariantMappingProps = {
  h1: "h1",
  h2: "h6",
  h3: "h6",
  h4: "h4",
  h6: "h6",
  body: "p",
  body2: "p",
};

type ColorTransformationsType = "textPrimary" | "textSecondary";

interface ColorTransformationsProps {
  textPrimary: string;
  textSecondary: string;
}

const colorTransformations: ColorTransformationsProps = {
  textPrimary: "text-white",
  textSecondary: "text-white/70",
};

const variantTransformations: DefaultVariantMappingProps = {
  h1: "text-6xl font-extrabold",
  h2: "text-4xl font-bold",
  h3: "text-3xl font-semibold",
  h4: "text-2xl font-medium",
  h6: "text-xl",
  body: "text-base",
  body2: "text-sm",
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
  variant: "body",
  color: "textPrimary",
};

export default Typography;
