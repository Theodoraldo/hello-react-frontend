import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/greetings/greetingSlice';
import 'bulma/css/bulma.css';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greetings, error, loading } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <div>
      <div className="container" style={{ width: '60%', marginTop: '15%', borderRadius: '5px' }}>
        <div>
          <h2 className="title has-text-danger-dark has-background-danger-light p-3">Greetings</h2>
        </div>
        <div className="subtitle has-text-success-dark has-background-success-light p-3">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {greetings && <p>{greetings.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Greetings;
