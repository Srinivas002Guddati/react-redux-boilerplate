
import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/actions';

import { selectPosts, selectError, selectLoading } from './redux/selector';


function App() {

const dispatch = useDispatch();

const posts = useSelector(selectPosts);
console.log("posts", posts);
const loading = useSelector(selectLoading);
const error = useSelector(selectError);

const fullState = useSelector(state => state);
console.log('Redux state:', fullState);

  useEffect(()=>{
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      { loading && <p>Loading...</p>}
      {error&& <p>Error: {error}</p>}
      <ul>
        {posts?.map(post=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

