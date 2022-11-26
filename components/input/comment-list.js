import classes from './comment-list.module.css';

function CommentList({ comments, eventId }) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {comments && comments[eventId] && comments[eventId].map((comment, key) => (
        <li key={key}>
        <p>{comment.text}</p>
        <div>
          By <address>{comment.name}</address>
        </div>
      </li>
      ))}
      
      
    </ul>
  );
}

export default CommentList;
