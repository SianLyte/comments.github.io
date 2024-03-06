import { useQueryClient } from '@tanstack/react-query';
import { parseISO, format } from 'date-fns';
import { CommentContainer, CommentAvatar, CommentAuthorName, CommentCreatedTime, CommentText } from './Comment.styles';
import { IAuthor, IComment } from 'src/types/types';
import { getAuthor } from 'src/lib/getAuthor';
import Like from '../like/Like';
import { timeSince } from 'src/lib/date';

type CommentProps = {
    nestinglvl: number;
    author: IAuthor;
    comment: IComment;
    comments: IComment[];
}


const Comment = ({ nestinglvl, author, comment, comments }: CommentProps) => {
    const { avatar, name } = author;
    const { created, text, likes } = comment;
    const queryClient = useQueryClient();
    const authors = queryClient.getQueryData<{ name: string; avatar: string, id: number }[]>(["getAuthors"])
    return (
        <CommentContainer>
            <CommentAvatar src={avatar} alt='avatar' />
            <CommentAuthorName>{name}</CommentAuthorName>
            <CommentCreatedTime>{timeSince(created)}</CommentCreatedTime>
            <CommentText>{text}</CommentText>
            <Like commentId={comment.id} likes={likes} />

            {authors && comments.map((com) => {
                const currAuthor = getAuthor(com.author, authors);
                if (com.parent == comment.id) {
                    return (
                        <div key={com.id} style={{ "gridArea": "div" }}>
                            <Comment key={com.id} nestinglvl={nestinglvl + 1} author={currAuthor} comment={com} comments={comments} />
                        </div>)
                }
            })}
        </CommentContainer>
    )
}

export default Comment;