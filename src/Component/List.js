import React from "react";
import { Main } from "./Main";

export const List = (props) => {
  //debugger;
  let state = props.commentPages;

  const list = state.comment.map((l) => <Main text={l.textcomment} />);

  let onCommentChange = (e) => {
    let text = e.target.value;
    props.onCommentCangeAC(text);
  };

  let onAddComment = () => {
    props.sendComment();
  };

  return (
    <section>
      {list}
      <textarea
        placeholder="enter text"
        value={state.newTextComment}
        onChange={onCommentChange}
      ></textarea>
      <button onClick={onAddComment}>add</button>
    </section>
  );
};
