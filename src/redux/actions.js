
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    dispatch({ type: 'FETCH_POSTS_REQUEST'});
    try{
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: result.data});
    } catch (err){
        dispatch({type: 'FETCH_POSTS_FAILURE', payload: err.message});
    }
}