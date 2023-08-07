import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AuthRouteProps {
  children: React.ReactNode;
}

export default function AuthRoute(props: AuthRouteProps) {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const authCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
      console.log({ user });
      console.log('User is signed in.');
    } else {
      setLoading(false);
      console.log('User is not logged in');

      navigate('/signin');
    }
  });

  useEffect(() => {
    authCheck();

    return () => authCheck();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
