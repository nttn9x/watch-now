import clsx from "clsx";
import React from "react";

type DefaultVariantMappingType = "primary";

interface DefaultVariantMappingProps {
  primary: string;
}

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: DefaultVariantMappingType;
}

const variantTransformations: DefaultVariantMappingProps = {
  primary: "bg-primary-500 hover:bg-primary-800 text-white",
};

const transformDeprecatedVariant = (color: DefaultVariantMappingType) => {
  return variantTransformations[color] || color;
};

function Button({ variant, className, ...rest }: ButtonProps) {
  const classVariant = transformDeprecatedVariant(variant!);
  return (
    <button
      data-testid="button"
      className={clsx("rounded-md px-2 py-2", classVariant, className)}
      {...rest}
    ></button>
  );
}

Button.defaultProps = {
  variant: "primary",
} as Required<ButtonProps>;

export default Button;
