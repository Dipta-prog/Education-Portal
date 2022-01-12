import React from "react";

const ReplyCommentList = ({ studentsCommentsdata }) => {
  return (
    <div>
      {studentsCommentsdata.commentss.map((c) => (
        <>
          <p>{c.replyComment}</p>
        </>
      ))}
    </div>
  );
};

export default ReplyCommentList;
