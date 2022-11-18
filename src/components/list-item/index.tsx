import { Theme, ButtonBase, Stack, Avatar, Typography } from "@mui/material";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import { makeStyles } from "@mui/styles";

interface Props {
  onClick: () => void;
  title: string;
  subTitle: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  avatar: { width: 40, height: 40, color: theme.palette.common.white },
}));

export default function ListItem({ onClick, title, subTitle }: Props) {
  const classes = useStyles();

  return (
    <ButtonBase onClick={onClick}>
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        spacing={2}
        p="0.5rem 1rem"
      >
        <Avatar src="" className={classes.avatar}>
          <InsertPhotoRoundedIcon />
        </Avatar>
        <Stack alignItems="flex-start">
          <Typography variant="body2" textAlign="left">
            {title}
          </Typography>
          <Typography variant="caption" textAlign="left">
            {subTitle}
          </Typography>
        </Stack>
      </Stack>
    </ButtonBase>
  );
}
