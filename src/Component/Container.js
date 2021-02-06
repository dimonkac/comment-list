import { connect } from "react-redux";
import { List } from "./List";
import { addCommentAC, onCommentCangeAC } from "../Redux/comment-reduser";

let mapStateToProps = (state) => {
  return {
    commentPages: state.commentPages,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendComment: () => {
      dispatch(addCommentAC());
    },
    onCommentCangeAC: (text) => {
      dispatch(onCommentCangeAC(text));
    },
  };
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(List);
