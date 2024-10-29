import "./CommentBlock.scss";

const CommentBlock = () => {
  return (
    <div className="CommentBlock">
      <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
      <div className="comment__description">
        <a href="#" className="comment__owner">
          Карина Савина
        </a>
        <p className="comment__text">Это текст комментария...</p>
        <a href="#" className="reply">
          Ответить
        </a>
      </div>
      <span className="date">25 марта</span>
      <svg className="icon icon-like" viewBox="0 0 23 23">
        {/* SVG path here */}
      </svg>
    </div>
  );
};

export default CommentBlock;