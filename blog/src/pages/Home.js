import React from "react";
import PostList from "../Component/PostList";

import { Paper, Typography, Button, Grid, Container } from "@material-ui/core";

const Home = (props) => {
    const { history } = props;

    return (
        <React.Fragment>
            <Container>
                <Paper variant="outlined" square style={{ padding: "20px" }}>
                    <Typography variant="h3" gutterBottom>
                        게시판 만들기
                    </Typography>
                    <Typography>아주 간단한 게시판을 만들어봅니다.</Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: "20px 0" }}
                        onClick={() => {
                            history.push("/write");
                        }}
                    >
                        글쓰기
                    </Button>
                </Paper>
            </Container>
            <Container>
                <Grid style={{ marginTop: "20px" }}>
                    <PostList history={history} />
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;
