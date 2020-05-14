export default async (values) => {
  let errors = {};

  if (!values.title)
    errors.title = "Поле обязательно для заполнения";

  if (!values.imgVertical)
    errors.imgVertical = "Поле обязательно для заполнения";

  if (!values.imgHorizontal)
    errors.imgHorizontal = "Поле обязательно для заполнения";

  if (!values.link)
    errors.link = "Поле обязательно для заполнения";

  return errors;
}