import React, { useState, useContext } from "react";
import cn from "classnames/bind";
import s from "./form.module";
import { Context } from "@/context";

import validate from "./validateForm";
import bannerForm from "./bannerForm.json"

import TextBox from "@/components/base/TextBox";
import Select from "@/components/base/Select";
import Button from "@/components/base/Button";

let cx = cn.bind(s);

const bannerTypes = [
  {
    value: 0,
    text: "Прямой",
  },
  {
    value: 1,
    text: "Обратный",
  },
];

const Form = () => {
  const [banner, setBanner] = useState({
    title: "",
    type: 0,
    imgVertical: "",
    imgHorizontal: "",
    link: "",
  });
  const [errors, setErrors] = useState({});

  const { initBanner } = useContext(Context);

  const submit = () => {
    validate(banner).then((res) => {
      if (Object.keys(res).length === 0) initBanner(banner);
      setErrors(res);
    });
  };

  return (
    <div className={s.form} id="form">
      <div className={s.body}>
        {bannerForm.map((item) => {
          if (item.type === "text") {
            return (
              <div className={s.item} key={item.id}>
                <div className={s.title}>{item.title}</div>
                <TextBox
                  value={banner[item.name]}
                  changeValue={(e) => setBanner({ ...banner, [item.name]: e })}
                  error={errors[item.name]}
                />
                {errors[item.name] && (
                  <div className="error">{errors[item.name]}</div>
                )}
              </div>
            );
          } else if (item.type === "select") {
            return (
              <div className={s.item} key={item.id}>
                <div className={s.title}>{item.title}</div>
                <Select
                  options={bannerTypes}
                  changeValue={(e) => setBanner({ ...banner, [item.name]: e })}
                />
              </div>
            );
          }
        })}
      </div>
      <div className={s.item}>
        <Button title="Показать" theme="pink" click={submit} />
      </div>
    </div>
  );
};

export default Form;
