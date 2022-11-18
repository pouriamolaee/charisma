import { Theme, ButtonBase, Stack, Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  onClick: () => void;
  title: string;
  subTitle: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    backgroundColor: theme.palette.background.default,
  },
  avatar: { width: 40, height: 40 },
}));

export default function ListItem({ onClick, title, subTitle }: Props) {
  const classes = useStyles();

  return (
    <ButtonBase onClick={onClick}>
      <Stack
        className={classes.listItem}
        width="100%"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Avatar src="" className={classes.avatar} />
        <Stack>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="caption">{subTitle}</Typography>
        </Stack>
      </Stack>
    </ButtonBase>
  );
}
