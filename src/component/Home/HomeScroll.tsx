import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeScroll.css";
import { UserProfile } from "../../models/Profile";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  adaptiveHeight: false,
  variableHeight: false,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        centerMode: true,
        verticalSwiping: true,
        infinite: false,
        dots: false,
      },
    },
  ],
};

interface Props {
  profiles: UserProfile[];
  onDislike: (id: string) => void;
  onLike: (id: string) => void;
}

const HomeScroll: FC<Props> = ({ profiles, onLike, onDislike }) => {
  const [isLiked, setIsLiked] = useState("undecided");
  return (
    <Slider {...settings}>
      {profiles.map((profile, index) => (
        <div className="center" key={index}>
          <div className="slider">
            <img
              className="sliderimage"
              src={profile.profilePhoto || ""}
              alt={`Slide ${index}`}
            />
            <div className="slider__text">
              <div>{profile.displayName}</div>
              <div>{profile.age}</div>
              <div>{profile.location}</div>
              <div>{profile.bio}</div>
            </div>
            <div className="slider__buttons">
              <button onClick={() => onDislike(profile.id)}>X</button>
              <button onClick={() => onLike(profile.id)}>♥</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default HomeScroll;
