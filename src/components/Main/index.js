import React, { useState } from 'react';
import s from './main.module';
import { Context } from '@/context';

import Aside from './Aside';
import Form from './Form';
import Banner from './Banner';

const Main = () =>  {

  const [banner, setBanner] = useState({})

  const initBanner = value => {
    setBanner({...banner, ...value})
  }

  return (
    <Context.Provider value={{
      initBanner
    }}>
      <div className={s.main}>
        <div className={s.aside}>
          <Aside banner={banner} />
        </div>
        <div className={s.content}>
          <Form />
          {
            Object.keys(banner).length > 0 && <Banner banner={banner}/>
          }
        </div>
      </div>
    </Context.Provider>
  );
}

export default Main