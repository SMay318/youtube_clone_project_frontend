import React from 'react';


function CommentTable(props){
    return(
        <div className='table'>
            <table>
                <tr>
                    <th>Comment</th>
                </tr>
                {props.comments.map((comment) => {
                    return (
                        <tr>
                            <td>{comment.comment}</td>
                        </tr>

                    )
                })}
            </table>
        </div>
    )
}
export default CommentTable;