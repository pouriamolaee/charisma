import { ReactElement } from "react";
import { Theme, Stack, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import en from "@src/lang/en";

interface Props {
  items: any[] | [];
  render: (item: any) => ReactElement;
}

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    backgroundColor: theme.palette.common.white,
    p: 2,
  },
  itemsWrapper: {
    overflow: "auto",
  },
}));

export default function List({ items, render }: Props) {
  const classes = useStyles();

  return (
    <Stack
      className={classes.list}
      width="400px"
      height="725px"
      p={2}
      spacing={1}
    >
      <TextField placeholder={en.SEARCH} variant="outlined" />
      <Stack className={classes.itemsWrapper}>
        {items.map((item) => render(item))}
      </Stack>
      <Button variant="contained">{en.CLEAR_LIST}</Button>
    </Stack>
  );
}
