import React, { useState, useEffect } from "react";
import cn from "classnames/bind";
import s from "./aside.module";

let cx = cn.bind(s);

const nav = [
  {
    id: 1,
    value: "Параметры",
    block: "form"
  },
  {
    id: 2,
    value: "Предпросмотр",
    block: "banner"
  },
];

const Aside = ({ banner }) => {
  
  const [navActive, setNavActive] = useState(1);

  useEffect(() => {
    if(Object.keys(banner).length !== 0)
      setNavActive(2)
  }, [banner])

  const navClick = (id, block) => {
    if(Object.keys(banner).length !== 0){
      setNavActive(id)
      scrollToNav(block)
    }
  };

  const scrollToNav = item => {
    const block = document.getElementById(`${item}`);
    
    if(block)
      block.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  return (
    <div className={s.aside}>
      <nav className={s.nav}>
        {nav.map((item, i) => {
          return (
            <div
              className={cx(s.item, { active: navActive === item.id })}
              key={item.id}
              onClick={() => navClick(item.id, item.block)}
            >
              <span>{item.value}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Aside