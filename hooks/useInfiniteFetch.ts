import { QueryFunction, useInfiniteQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query"

type optionsType = {
    queryKey: Array<string>,
    queryFn: QueryFunction<any, string[], any>,
    initialPageParam: any,
    getNextPageParam: any

}

export const useInfiniteFetch = (options: optionsType) => {
    const response = useSuspenseInfiniteQuery({
        queryKey: options.queryKey,
        queryFn: options.queryFn,
        initialPageParam: options.initialPageParam,
        getNextPageParam: options.getNextPageParam
    })


    return { ...response }
}