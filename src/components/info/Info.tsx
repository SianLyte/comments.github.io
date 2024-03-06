import { IAuthorFromServer, ICommentPagination } from "src/types/types";
import greyLike from "../../assets/grey-like.svg";
import { BorderContainer, CommentsCounter, InfoContainer, Like, LikesCounter, LikesCounterContainer } from './Info.styles'
import { useInfo } from 'src/hooks/info.hook';
import { InfiniteData } from "@tanstack/react-query";

interface InfoProps {
    data: undefined | InfiniteData<ICommentPagination, unknown>;
    authors: IAuthorFromServer[] | undefined
}

const Info = ({ data, authors }: InfoProps) => {
    const { totalComments, totalLikes } = useInfo(data);

    return (
        <InfoContainer>
            <BorderContainer>
                <CommentsCounter>{authors ? totalComments : 0} комментариев</CommentsCounter>
                <LikesCounterContainer>
                    <Like src={greyLike} />
                    <LikesCounter>{authors ? totalLikes : 0}</LikesCounter>
                </LikesCounterContainer>
            </BorderContainer>
        </InfoContainer>
    )
}

export default Info