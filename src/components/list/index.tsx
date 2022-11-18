import { ChangeEvent, ReactElement, useState } from "react";
import { Theme, Stack, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { removeAllPills } from "@src/scripts/redux/slices/pills";
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
    overflowY: "scroll",
  },
}));

export default function List({ items, render }: Props) {
  const classes = useStyles();

  const [filteredItems, setFilteredItems] = useState(items);
  const dispatch = useDispatch();

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredItems((prevItems) =>
      prevItems.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <Stack
      className={classes.list}
      width="400px"
      height="725px"
      p={2}
      spacing={1}
    >
      <TextField placeholder={en.SEARCH} variant="outlined" onChange={search} />
      <Stack className={classes.itemsWrapper}>
        {filteredItems.map((item) => render(item))}
      </Stack>
      <Button variant="contained" onClick={() => dispatch(removeAllPills())}>
        {en.CLEAR_LIST}
      </Button>
    </Stack>
  );
}
