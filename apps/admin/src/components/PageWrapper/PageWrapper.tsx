import {
  AppShell,
  Burger,
  Footer,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { PropsWithChildren, useState } from "react";
import { NavbarNested } from "../Navbar/Navbar";

export const PageWrapper = ({ children }: PropsWithChildren) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarNested />}
    >
      {children}
    </AppShell>
  );
};
