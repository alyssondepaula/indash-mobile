import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async (quote: string, filter?: {}) => {
    const { data } = await axios.get(`https://cloud.iexapis.com/stable/stock/${quote.toLowerCase()}/quote`, {
     params: {
         token: 'pk_b53e449cd3d4462cbefa48d985a0ccb9'
     }

    });
    return data;
};

const useQuote = async (quote: string, filter?: {}) => useQuery([ 'quote', quote, filter ], await fetchPosts(quote, filter));
export default useQuote;