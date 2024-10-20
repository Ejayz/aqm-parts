"use client";

import { Form, Formik } from "formik";
import { FormInput } from "../UI/FormInput";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function LoginView() {
  const route=useRouter();
  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email address.")
      .required("Email Address is required."),
    password: Yup.string().required("Password is required."),
  });

  const mutateManangementLogin = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      const response = await fetch("/api/private/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      return response.json();
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      if (data.code == 200) {
        toast.success(data.message);
        route.push("/dashboard");
      } else {
        toast.error(data.message);
      }
    },
  });

  return (
    <div className="w-full h-screen flex min-h-screen  ">
      <div className="card card-side bg-base-100  my-auto mx-auto shadow-xl ">
        <figure>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values, actions) => {
              mutateManangementLogin.mutate(values, {
                onSuccess: () => {
                  actions.resetForm();
                },
              });
            }}
          >
            {({ errors, touched }) => (
              <Form className="w-full justify-evenly gap-y-2flex flex-col p-4 mx-auto my-auto">
                <h1 className="text-2xl indent-4 font-bold">
                  Management Login
                </h1>
                <FormInput
                  errors={errors.email}
                  touched={touched.email?.toString()}
                  tooltip="Enter your email address"
                  name="email"
                  placeholder="youremail@mail.domain"
                  label="Email Address"
                />
                <FormInput
                  errors={errors.password}
                  touched={touched.password?.toString()}
                  tooltip="Enter your password."
                  name="password"
                  placeholder="Enter your password."
                  label="Password"
                  type="password"
                />

                <div className="lg:mx-auto w-3/4 flex">
                  <button
                    type="submit"
                    className={`btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 ${
                      mutateManangementLogin.isPending
                        ? "btn-disabled"
                        : "btn-primary"
                    }`}
                  >
                    {mutateManangementLogin.isPending ? (
                      <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>{" "}
                        Sending ...
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Need assistance ?</h2>
          <p className="w-36 text-center">
            For password reset,account creation and other concern please contact
            system administrator.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}
