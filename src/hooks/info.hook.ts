import { InfiniteData } from "@tanstack/react-query";
import { useEffect } from "react";
import { useGlobalContext } from "src/components/context/context";
import { IComment, ICommentPagination } from "src/types/types";

export const useInfo = (data: undefined | InfiniteData<ICommentPagination, unknown>) => {
    const { setTotalLikes, totalLikes, setTotalComments, totalComments } = useGlobalContext();
    useEffect(() => {
        data?.pages[data.pages.length - 1].data.forEach((comment) => {
            setTotalLikes(total => total + parseInt(comment.likes));
            setTotalComments(total => total + 1);
        });
    }, [data?.pageParams?.length])

    return { totalLikes, totalComments }
}