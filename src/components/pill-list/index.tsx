import { RootState } from "@src/scripts/redux/store";
import { Theme, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { removePill } from "@src/scripts/redux/slices/pills";
import Pill from "../pill";
import en from "@src/lang/en";

const useStyles = makeStyles((theme: Theme) => ({
  pillList: {
    backgroundColor: theme.palette.common.white,
    p: 2,
    overflow: "scroll",
  },
}));

export default function PillList() {
  const classes = useStyles();
  const { pills } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <Stack className={classes.pillList} width="400px" height="725px" p={2}>
      {pills.length !== 0 && (
        <Typography variant="body2">{en.TAP_TO_DELETE}</Typography>
      )}
      <Stack direction="row" flexWrap="wrap">
        {pills.map((pill) => (
          <Pill
            key={pill.id + pill.title}
            onClick={() => dispatch(removePill(pill.id))}
          >
            {pill.title}
          </Pill>
        ))}
      </Stack>
    </Stack>
  );
}
