import React from "react";
import {
    Paper,
    Typography,
    Button,
    Grid,
    Container,
    OutlinedInput,
    InputLabel,
    TextField,
} from "@material-ui/core";

import { useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [textField, setTextField] = React.useState("");
    const dispatch = useDispatch();

    const add = (e) => {
        const contents = {
            title,
            author,
            content: textField,
        };
        if (contents) {
            dispatch(postActions.addPostFB(contents));
        }
    };

    return (
        <Container
            style={{
                height: "90vh",
                display: "flex",
            }}
        >
            <Grid
                xs={12}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Container style={{ width: "500px" }}>
                    {" "}
                    <InputLabel htmlFor="component-outlined">제목</InputLabel>
                    <OutlinedInput
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        label="title"
                        fullWidth
                    />
                </Container>
                <Container style={{ width: "500px", marginTop: "10px" }}>
                    {" "}
                    <InputLabel htmlFor="component-outlined">작성자</InputLabel>
                    <OutlinedInput
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        label="Name"
                        fullWidth
                    />
                </Container>
                <Container style={{ width: "500px", marginTop: "10px" }}>
                    <InputLabel htmlFor="component-outlined">내용</InputLabel>
                    <TextField
                        style={{ width: "450px" }}
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        variant="outlined"
                        value={textField}
                        onChange={(e) => setTextField(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "10px" }}
                        onClick={add}
                    >
                        Primary
                    </Button>
                </Container>
            </Grid>
        </Container>
    );
};

export default PostWrite;
