import { Paper, Title, createTheme, rem } from "@mantine/core";
import { PropsWithChildren } from "react";
import classes from "./AuthWrapper.module.css";

export const AuthWrappper = ({ children }: PropsWithChildren) => {
  return (
    <div className={classes.wrapper}>
      <Paper
        className={classes.form}
        radius={0}
        p={20}
        style={{
          justifyItems: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title order={1} className={classes.title} ta="center" mt="md" mb={50}>
          BPVS Admin
        </Title>
        {children}
      </Paper>
    </div>
  );
};
