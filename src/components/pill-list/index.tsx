import { useSelector } from "react-redux";
import { Theme, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Pill from "../pill";
import en from "@src/lang/en";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  pillList: {
    backgroundColor: theme.palette.common.white,
    p: 2,
    overflow: "scroll",
  },
}));

export default function PillList({}: Props) {
  const classes = useStyles();
//   const pills = useSelector((state) => state.pills);

  return (
    <Stack className={classes.pillList} width="400px" height="725px" p={2}>
      <Typography variant="body2">{en.TAP_TO_DELETE}</Typography>

      <Stack direction="row" flexWrap="wrap">
        <Pill onClick={() => {}}>mor_sdf</Pill>
        <Pill onClick={() => {}}>mor_ssdfsdafsadfdf</Pill>
        <Pill onClick={() => {}}>df</Pill>
        <Pill onClick={() => {}}>sdfdsf</Pill>
        <Pill onClick={() => {}}>sdfdsf dfdf</Pill>
        <Pill onClick={() => {}}>sdfsdf FDDSF</Pill>
        <Pill onClick={() => {}}>sdfsdf sdfsdfds</Pill>
      </Stack>
    </Stack>
  );
}
