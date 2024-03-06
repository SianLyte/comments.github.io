import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import getCommentsRequest from "src/api/comments/getCommentsRequest";
import { useGlobalContext } from "src/components/context/context";
import { UsePaginationProps } from "src/types/types";



export function usePagination<T>({ queryFn, initialPageParam, getNextPageParam }: UsePaginationProps<T>) {
    const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<T>({
        queryKey: ["getComments"],
        queryFn,
        initialPageParam,
        getNextPageParam,
        retry(failureCount, error) {
            return failureCount < 5;
        },
    })

    useEffect(() => {
        if (isError) toast("Something went wrong. Please try again.", { type: "error" });
    }, [isError])

    return { data, isError, isLoading, fetchNextPage, isFetchingNextPage };
}