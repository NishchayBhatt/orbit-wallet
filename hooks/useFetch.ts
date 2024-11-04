import { QueryFunction, useQuery } from "@tanstack/react-query"
type optionsType = {
    queryKey: Array<string>,
    queryFn: QueryFunction<any, string[], any>,

}

export const useFetch = (options: optionsType) => {
    const response = useQuery({
        queryKey: options.queryKey,
        queryFn: options.queryFn,
    })


    return { ...response }
}