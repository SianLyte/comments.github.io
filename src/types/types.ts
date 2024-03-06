export interface IAuthor {
    author: number;
    avatar: string;
    name: string;
}

export interface IAuthorFromServer {
    name: string;
    avatar: string,
    id: number
}


export interface IComment {
    id: number,
    created: string,
    text: string,
    author: number,
    parent: number | null,
    likes: string,
}

export interface ICommentPagination {
    pagination: PaginationInfo,
    data: IComment[]
}

export interface UsePaginationProps<T> {
    queryFn: any;
    initialPageParam: number;
    getNextPageParam: (data: T) => number
}

export interface PaginationInfo {
    page: number,
    size: number,
    total_pages: number
}