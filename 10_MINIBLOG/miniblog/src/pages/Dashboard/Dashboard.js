import style from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Dashboard = () => {

  const {user} = useAuthValue();

  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard;