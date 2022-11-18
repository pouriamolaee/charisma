import { ChangeEvent, useEffect, useState } from "react";
import { Theme, Stack, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { addPill, removeAllPills } from "@src/scripts/redux/slices/pills";
import ListItem from "@src/components/list-item";
import en from "@src/lang/en";

interface Props {
  items: any[] | [];
  formatItem: (item: any) => any;
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

export default function List({ items, formatItem }: Props) {
  const classes = useStyles();
  const [filteredItems, setFilteredItems] = useState<any[] | []>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0) return;
    setFilteredItems(items);
  }, [items]);

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredItems(
      items.filter((item) =>
        formatItem(item)
          .title.toLowerCase()
          .includes(e.target.value.toLowerCase())
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
        {filteredItems.map((item) => {
          const formattedItem = formatItem(item);
          return (
            <ListItem
              key={formattedItem.id}
              onClick={() =>
                dispatch(
                  addPill({ id: formattedItem.id, title: formattedItem.title })
                )
              }
              title={formattedItem.title}
              subTitle={formattedItem.subTitle}
            />
          );
        })}
      </Stack>
      <Button variant="contained" onClick={() => dispatch(removeAllPills())}>
        {en.CLEAR_LIST}
      </Button>
    </Stack>
  );
}
