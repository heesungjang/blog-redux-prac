import moment from "moment";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { firestore } from "../../firebase";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list) => ({
    post_list,
}));

const addPost = createAction(ADD_POST, (post) => ({ post }));

const editPost = createAction(EDIT_POST, (post_id, post) => ({
    post_id,
    post,
}));

const initialState = {
    list: [],
};

const initialPost = {
    title: "",
    content: "",
    author: "hee",
};

const addPostFB = (contents = "") => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post");

        postDB.add(contents).then((doc) => {
            let post = {
                ...initialPost,
                title: contents.title,
                content: contents.content,
                author: contents.author,
                id: doc.id,
            };

            dispatch(addPost(post));
            history.push("/");
        });
    };
};

const getPostFB = () => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post");

        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc) => {
                post_list.push(doc.data());
            });
            dispatch(setPost(post_list));
        });
    };
};

const getOnePostFB = (id) => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post");

        postDB
            .doc(id)
            .get()
            .then((doc) => {
                let _post = doc.data();
                dispatch(setPost([_post]));
            });
    };
};

export default handleActions(
    {
        [ADD_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list.unshift(action.payload.post);
            }),
        [SET_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list.push(...action.payload.post_list);
            }),
    },
    initialState
);

const actionCreators = {
    setPost,
    addPostFB,
    getPostFB,
    getOnePostFB,
};

export { actionCreators };
