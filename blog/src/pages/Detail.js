import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { Paper, Typography, Grid, Container } from "@material-ui/core";

const Detail = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;

    const post_list = useSelector((state) => state.post.list);
    console.log(post_list);
    const post = useSelector((state) => state.post.list[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => {
        if (!post) {
            dispatch(postActions.getOnePostFB(id));
        }
    }, []);
    return (
        <React.Fragment>
            <Container
                style={{
                    height: "90vh",
                    display: "flex",
                }}
            >
                <Grid
                    item={true}
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Container
                        style={{
                            width: "500px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h4">{post.title}</Typography>
                    </Container>
                    <Container
                        style={{
                            width: "500px",
                            display: "flex",
                            justifyContent: "center",
                            margin: "10px 0",
                        }}
                    >
                        <Typography>{post.author}</Typography>
                    </Container>
                    <Container
                        style={{
                            width: "500px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Paper
                            style={{
                                width: "300px",
                                height: "200px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {post.content}
                        </Paper>
                    </Container>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Detail;
