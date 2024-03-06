import { useQueryClient } from '@tanstack/react-query';
import getCommentsRequest from 'src/api/comments/getCommentsRequest';
import { usePagination } from 'src/hooks/pagination.hook';
import Comment from '../comment/Comment';
import { IAuthorFromServer, IComment, ICommentPagination, UsePaginationProps } from 'src/types/types';
import { getAuthor } from 'src/lib/getAuthor';
import { ChatContainer } from './Chat.styles';
import { InfiniteLoader2, PaginationButton } from '../button/Button';
import Info from '../info/Info';
import { toast } from 'react-toastify';

const getComments = async ({ pageParam }: { pageParam: number }) => {
    return await getCommentsRequest(pageParam);
}

const usePagingationOptions: UsePaginationProps<ICommentPagination> = {
    queryFn: getComments,
    initialPageParam: 1,
    getNextPageParam(data) {
        return data.pagination.page + 1
    }
}

const Chat = () => {
    const queryClient = useQueryClient();
    const authors = queryClient.getQueryData<IAuthorFromServer[]>(["getAuthors"]);

    const { data, fetchNextPage, isFetchingNextPage, isLoading } = usePagination<ICommentPagination>(usePagingationOptions);
    const paginationInfo = data?.pages[data?.pages.length - 1].pagination
    return (
        <>
            <Info authors={authors} data={data} />
            <ChatContainer>
                {authors &&
                    <div>{data?.pages.map((page) => page.data.map((comment: IComment) => {
                        const author = getAuthor(comment.author, authors);
                        if (!comment.parent) {
                            return <Comment nestinglvl={0} author={author} comment={comment} comments={page.data}
                                key={comment.id} />
                        }
                    }))}
                    </div>}
                <PaginationButton $curPage={paginationInfo?.page} $totalPages={paginationInfo?.total_pages}
                    disabled={isFetchingNextPage || isLoading} onClick={() => fetchNextPage()}>
                    {isFetchingNextPage || isLoading ? <InfiniteLoader2 width={16} height={16} /> : "Загрузить еще"}
                </PaginationButton>
            </ChatContainer>
        </>
    )
}

export default Chat