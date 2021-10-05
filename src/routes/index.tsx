import React from 'react';
import { View } from 'react-native';
import { RootState } from '../store/reducers';
import { IUser } from '../store/reducers/user';
import { useAppSelector } from '../hooks/redux';
import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';


const Routes: React.FC = () => {

  const logged: IUser[] = useAppSelector((state: RootState) => state.user?.data);

  return logged ? <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;