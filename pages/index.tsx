import { dehydrate, QueryClient, UseQueryResult } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AxioFetch from '../services/Fetch'
import useFetchQuery from '../services/GetRequest'
import styles from '../styles/Home.module.css'
export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["test"], () => AxioFetch('todos/1'));
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
  };
};
export type FetchType = {
  completed: boolean;
  id: number,
  title: string,
  userId: string
}
const Home: NextPage = () => {
  const { isLoading, isFetching, data: depositData, isError, isSuccess, error } = useFetchQuery<FetchType>('todos/1', 'test');
  console.log(depositData, "depositData");
  return (
    <>
      <h1>fwefowhefiwefiewhfwiefj</h1>
      <h1 className='text-center bg-black text-yellow-900'>Hello</h1>
      <ul>
        <li >{depositData?.title}</li>

      </ul>
    </>
  )
}

export default Home
