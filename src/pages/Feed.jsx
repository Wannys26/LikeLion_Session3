import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import FeedImg from '../assets/FeedImg.jpg';
import StoryImg from '../assets/StoryImg.jpg';
import {useEffect, useState, useRef} from "react";


export const Feed = () => {
  const [feedData, setFeedData] = useState([
    {
      name: "Wannys26",
      profile: StoryImg,
      feedImg: FeedImg,
      date: "2일",
      likes: 5,
    }
  ]);

  const likeCountRef = useRef(0); // 누른 횟수 저장

  useEffect(() => {
    console.log(feedData);
  }, [feedData]);

  const handleLike = () => {
    if (likeCountRef.current >= 3) {
      console.log("더 이상 좋아요를 누를 수 없습니다.");
      return;
    }

    likeCountRef.current += 1;

    setFeedData(([feed]) => [{
      ...feed,
      likes: feed.likes + 1
    }]);
  };

  return (
    <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-[#AEAEAE]">
      <FeedHeader profile={feedData[0].profile} name={feedData[0].name} date={feedData[0].date} />
      <FeedImage feedImg={feedData[0].feedImg} />
      <FeedAction likes={feedData[0].likes} onLike={handleLike} />
    </main>
  );
};