import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/users/usersSlice';
import UserNames from './UserList';

const ViewUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch(users);

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error ? (
        <div>
          Error:
          {error}
        </div>
      ) : null}
      {!isLoading && users.length ? (
        <ul>
          {
            users.map((user) => (<UserNames key={user.id.value} user={user} />))
          }
        </ul>
      ) : null}
    </>
  );
};

export default ViewUsers;
