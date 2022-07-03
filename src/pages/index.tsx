import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";

import VideoCard from '@components/VideoCard';
// import { BASE_URL } from '../utils';
import { Video } from 'types';
import NoResults from '@components/NoResults';

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col h-full gap-10 videos'>
      {videos.length
        ? videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        ))
        : <NoResults text={`No Videos`} />}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/post");

  return {
    props: {
      videos: data
    }
  };
};
export default Home;
