import React from 'react';
import Reply from '../Reply/Reply';


function CommentTable(props){
    return(
        <div className='table'>
            <table>
                <tr>
                    <th>Comment</th>
                    <th></th>
                    <th>Likes</th>
                    <th>dislikes</th>
                </tr>
                {props.comments.map((comment) => {
                    return (
                        <tr>
                            <td>{comment.comment}</td>
                            <td><button onClick={() => props.getReplies(comment.id)}>View Replies</button></td>
                            <td>{comment.likes}</td>
                            <td><button onClick={() => props.like(comment)}>Like</button></td>
                            <td>{comment.dislikes}</td>
                            <td><button onClick={() => props.dislike(comment)}>Dislike</button></td>
                            <td><Reply comment_pk={comment.id} createReply={props.addReply}/></td>
                        </tr>

                    )
                })}
            </table>
        </div>
    )
}
export default CommentTable;