const CommentBox = ({ avatar }) => {
  return (
    <div className="flex gap-4">
      <img src={avatar} alt="userProfile" />
    </div>
  );
};

export default CommentBox;
