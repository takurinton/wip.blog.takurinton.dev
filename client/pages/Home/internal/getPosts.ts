import { useQuery } from "urql";
import { POSTS_QUERY } from "../../../../shared/graphql/query/posts";

const initialState = {
    current: 0,
    next: 0,
    preview: 0,
    category: '',
    results: [
        {
            id: 0,
            title: '',
            contents: '',
            category: '',
            pub_date: '',
        }
    ]
}

export const getPosts = (data, variables) => {
    const [res] = useQuery({
        query: POSTS_QUERY,
        variables,
    });

    if (
        variables.category !== data.getPosts.category ||
        variables.pages !== data.getPosts.current
    ) {
        return res.data === undefined ? initialState : res.data.getPosts;
    }
    return data.getPosts
}