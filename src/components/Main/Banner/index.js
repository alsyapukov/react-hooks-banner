import React, { useEffect } from "react";
import s from "./banner.module";
import ButtonLink from "@/components/base/ButtonLink";

const ButtonLocation = ({ link }) => {
  return (
    <div className={s.button}>
      <ButtonLink title="Перейти" theme="blue" href={link} target="_blank" />
    </div>
  );
};

const Banner = ({ banner }) => {

  useEffect(() => {
    const bannerBlock = document.getElementById("banner");
    bannerBlock.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [banner])

  return (
    <div className={s.banner} id="banner">
      <div className={s.title}>{banner.title}</div>

      {banner.type === 1 && <ButtonLocation link={banner.link} />}

      <div className={s.imgVertical}>
        <img className={s.image} src={banner.imgVertical} alt={banner.title} />
      </div>

      <div className={s.imgHorizontal}>
        <img
          className={s.image}
          src={banner.imgHorizontal}
          alt={banner.title}
        />
      </div>
      
      {banner.type === 0 && <ButtonLocation link={banner.link} />}
    </div>
  );
};

export default Banner;
