import React from "react";
import { createStyles, Group, Paper, Text } from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.md,
  },
  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },
  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4],
  },
  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const StatsSection = (props) => {
  const { title, icon: Icon, value, diff } = props;
  const { classes } = useStyles();
  const DiffIcon = diff > 0 ? IconArrowUpRight : IconArrowDownRight;

  return (
    <Paper withBorder p="md" radius="md" className={classes.root}>
      <Group position="apart">
        <Text size="xs" color="dimmed" className={classes.title}>
          {title}
        </Text>
        <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
      </Group>
      <Group align="flex-end" spacing="xs" mt={25}>
        <Text className={classes.value}>{value}</Text>
        <Text color={diff > 0 ? "teal" : "red"} fz="sm" fw={500} className={classes.diff}>
          <span>{diff}%</span>
          <DiffIcon size="1rem" stroke={1.5} />
        </Text>
      </Group>

      <Text fz="xs" c="dimmed" mt={7}>
        Compared to previous month
      </Text>
    </Paper>
  );
};

export default StatsSection;
