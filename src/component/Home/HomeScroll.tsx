import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeScroll.css";
import { Profile } from "./Home";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  //centerPadding: 0,
  centerMode: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        dots: false,
      },
    },
  ],
};

interface Props {
  profiles: Profile[];
}

const HomeScroll: FC<Props> = ({ profiles }) => {
  const [isLiked, setIsLiked] = useState("undecided");
  return (
    <Slider {...settings}>
      {profiles.map((profile, index) => (
        <div>
          <div className="slider" key={index}>
            <img
              className="sliderimage"
              src={profile.profilePhoto}
              alt={`Slide ${index}`}
            />
            <div className="slider__text">
              <div>{profile.userName}</div>
              <div>{profile.age}</div>
              <div>{profile.location}</div>
              <div>{profile.bio}</div>
            </div>
            <div className="slider__buttons">
              <button>Dislike</button>
              <button>Like</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default HomeScroll;
