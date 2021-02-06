const ADD_COMMENT = "ADD-COMMENT";
const APDATE_NEW_COMMENT_TEXT = "APDATE-NEW-COMMENT-TEXT";

let initionalState = {
  comment: [{}],
  newTextComment: "",
};

const commentReduser = (state = initionalState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      let newComment = {
        id: 55,
        textcomment: state.newTextComment,
      };
      let stateCopy = { ...state };
      stateCopy.comment = [...state.comment];
      stateCopy.comment.push(newComment);
      stateCopy.newTextComment = "";
      return stateCopy;
    }
    case APDATE_NEW_COMMENT_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newTextComment = action.newTextComment;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addCommentAC = () => ({ type: ADD_COMMENT });
export const onCommentCangeAC = (text) => ({
  type: APDATE_NEW_COMMENT_TEXT,
  newTextComment: text,
});

export default commentReduser;
