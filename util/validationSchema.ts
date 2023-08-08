import * as Yup from "yup";

export const eventSchema = Yup.object({
  title: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("This field is required")
    .matches(/^[A-Za-z]/, "Title must start with a letter"),
  description: Yup.string()
    .required("This field is required")
    .matches(/^[A-Za-z]/, "Title must start with a letter"),
  date: Yup.string().required("This field is required"),
  time: Yup.string().required("This field is required"),
  location: Yup.string()
    .required("This field is required")
    .matches(/^[A-Za-z]/, "Title must start with a letter"),
  category: Yup.string().required("This field is required"),
  priority: Yup.string().required("This field is required"),
});
