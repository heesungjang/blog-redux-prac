import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { makeStyles } from "@material-ui/core/styles";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const PostList = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post);

    React.useEffect(() => {
        if (post_list.list.length < 2) {
            dispatch(postActions.getPostFB());
        }
    }, []);
    const { history } = props;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>작성자</TableCell>
                        <TableCell align="right">제목</TableCell>
                        <TableCell align="right">내용</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {post_list.list.map((row, idx) => (
                        <TableRow
                            key={idx}
                            onClick={() => {
                                history.push(`/detail/${row.id}`);
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.author}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.content}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PostList;
