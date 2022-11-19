import { ReactNode } from "react";
import { Theme, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  onClick: () => void;
  children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  pill: {
    "&": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      margin: 5,
      padding: "0 12px",
      width: "fit-content",
      height: "2rem",
      borderRadius: "1rem",
      display: "flex",
      alignItems: "center",
    },
  },
  pillLabel: {
    maxWidth: "20rem",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));

export default function Pill({ onClick, children }: Props) {
  const classes = useStyles();

  return (
    <ButtonBase onClick={onClick} className={classes.pill}>
      <span className={classes.pillLabel}>{children}</span>
    </ButtonBase>
  );
}
