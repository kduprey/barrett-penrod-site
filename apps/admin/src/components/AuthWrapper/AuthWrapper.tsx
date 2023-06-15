import { Paper, Title, createStyles, rem } from "@mantine/core";
import { PropsWithChildren } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: "100dvh",
    maxWidth: rem(500),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export const AuthWrappper = ({ children }: PropsWithChildren) => {
  const { classes } = useStyles();

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
