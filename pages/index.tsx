import Head from "next/head";
import { Theme, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  useGetAllPostsQuery,
  useGetAllUsersQuery,
} from "@src/generated/graphql";
import List from "@src/components/list";
import ListItem from "@src/components/list-item";
import PillList from "@src/components/pill-list";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    backgroundColor: theme.palette.background.default,
  },
  list: {
    backgroundColor: theme.palette.common.white,
    p: 2,
  },
}));

export default function Home() {
  const classes = useStyles();
  const { data: usersData, isLoading: isUsersDataLoading } =
    useGetAllUsersQuery();
  const { data: postsData, isLoading: isPostDataLoading } =
    useGetAllPostsQuery();

  return (
    <Stack
      className={classes.app}
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Head>
        <title>Charisma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="row" spacing="50px">
        <List
          items={usersData?.users?.data ?? []}
          render={(user) => (
            <ListItem
              key={user.id}
              onClick={() => {}}
              title={user.name}
              subTitle={user.email}
            />
          )}
        />
        <List
          items={postsData?.posts?.data ?? []}
          render={(post) => (
            <ListItem
              key={post.id}
              onClick={() => {}}
              title={post.title}
              subTitle={post.body}
            />
          )}
        />
        <PillList />
      </Stack>
    </Stack>
  );
}
