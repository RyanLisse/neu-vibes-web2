import React, { useState, useEffect, useRef } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
// import '@vidstack/player/hydrate.js';

import { Video } from '../types';

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if(playing) {
      videoRef?.current?.pause();
      setPlaying(false);
    } else {
      videoRef?.current?.play();
      setPlaying(true);
    }
  }

  useEffect(() => {
    if(videoRef?.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted])

  return (
    <div className="flex flex-col pb-6 border-b-2 border-gray-200">
      <div>
        <div className="flex gap-3 p-2 font-semibold rounded cursor-pointer ">
          <div className="w-10 h-10 md:w-16 md:h-16">
            <Link href={`/profile/${post.postedBy._id}`}>
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt="profile photo"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
          <Link href={`/profile/${post.postedBy._id}`}>
            <div className="flex items-center gap-2">
                <p className="flex items-center gap-2 font-bold md:text-md text-slate-50">
                {post.postedBy.userName} {` `}
                <GoVerified className="text-blue-400 text-md"/>
              </p>
                <p className="hidden text-xs font-medium text-gray-500 capitalize md:block">{post.postedBy.userName}</p>
            </div>
          </Link>
          </div>
        </div>
      </div>

      <div className="relative flex gap-4 lg:ml-20">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="rounded-3xl">
          <Link href={`/detail/${post._id}`}>
            <video
              loop
              ref={videoRef}
              className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[580px] w-[250px] rounded-2xl cursor-pointer bg-gray-900 "
              src={post.video.asset.url}
            >
            </video>
          </Link>

          {isHover && (
            <div className="absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3">
              {playing ? (
                <button onClick={onVideoPress}>
                  <BsFillPauseFill className="text-2xl text-slate-50 lg:text-4xl" />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                    <BsFillPlayFill className="text-2xl text-slate-50 lg:text-4xl" />
                </button>
              )}
              {isVideoMuted ? (
                <button onClick={() => setIsVideoMuted(false)}>
                  <HiVolumeOff className="text-2xl text-slate-50 lg:text-4xl" />
                </button>
              ) : (
                <button onClick={() => setIsVideoMuted(true)}>
                    <HiVolumeUp className="text-2xl text-slate-50 lg:text-4xl" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoCard