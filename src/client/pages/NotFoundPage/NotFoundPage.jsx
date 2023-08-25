import React ,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const redirectHome = setTimeout(() => {
      navigate('/');
    },3000);
    return () => clearTimeout(redirectHome);
  },[navigate]);
  return (
    <div>
      <h1>Sorry,this page does not exit</h1>
    </div>
  )
}

export default NotFoundPage

