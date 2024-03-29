import React, { useState, useEffect } from 'react';
import { MdFavorite } from 'react-icons/md';

import useAuthStore from '../store/authStore';

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDislike }: IProps) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();
  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id)

  useEffect(() => {
    if(filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false)
    }
  }, [filterLikes, likes])

  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center justify-center mt-4 cursor-pointer">
        {alreadyLiked ? (
          <div className=" bg-black rounded-full p-2 md:p-4 text-[#93FD05]" onClick={handleDislike}>
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
            <div className="p-2 bg-black rounded-full md:p-4" onClick={handleLike}>
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="font-semibold text-md">{likes?.length || 0}</p>
      </div>
    </div>
  )
}

export default LikeButton