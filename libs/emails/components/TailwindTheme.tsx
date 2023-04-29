import { Tailwind } from "@react-email/components";
import React, { PropsWithChildren } from "react";

export const TailwindTheme = ({ children }: PropsWithChildren) => (
  <Tailwind
    config={{
      theme: {
        fontFamily: {
          sans: ["Montserrat", "Arial", "sans-serif"],
        },
        extend: {
          colors: {
            primary: "#364249",
            secondary: "#E3F2FC",
          },
          listStyleType: {
            square: "square",
          },
        },
      },
    }}
  >
    {children}
  </Tailwind>
);
