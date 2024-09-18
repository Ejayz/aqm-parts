"use client";

import { Form, Formik } from "formik";
import { FormInput, FormSelect, FormTextArea } from "../UI/FormInput";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
export default function ContactView() {
  const contactFormValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string(),
    message: Yup.string().required("Message is required"),
    subject: Yup.string().required("Subject is required"),
  });

  const mutateContactForm = useMutation({
    mutationFn: async (values: {
      name: string;
      email: string;
      phone: string;
      message: string;
      subject: string;
    }) => {
      const response = await fetch("/api/public/contact_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      return response.json();
    },
    onError: () => {
      toast.error("Message failed to send.Please try again later.");
    },
    onSuccess: () => {
      toast.success("Message sent successfully. We will get back to you soon.");
    },
  });

  return (
    <>
      <div className="w-full h-screen flex min-h-screen ">
        <div className="mx-auto my-auto w-3/4 lg:w-7/12 h-auto flex flex-col-reverse   lg:flex-row">
          <div className="bg-base-100 lg:w-5/12 w-full rounded-tl-md rounded-bl-md shrink-0 shadow-2xl">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
                subject: "",
              }}
              validationSchema={contactFormValidation}
              onSubmit={(values, actions) => {
                console.log(values);
                mutateContactForm.mutate(values, {
                  onSuccess: () => {
                    actions.resetForm();
                  },
                });
              }}
            >
              {({ errors, touched }) => (
                <Form className="p-12 gap-4 flex flex-col">
                  <h1 className="text-2xl font-bold">Contact Form</h1>
                  <FormInput
                    errors={errors.name}
                    touched={touched.name?.toString()}
                    tooltip="Enter your full name"
                    name="name"
                    placeholder="John Doe"
                    label="Full Name"
                  />
                  <FormInput
                    errors={errors.email}
                    touched={touched.email?.toString()}
                    tooltip="Enter your email address"
                    name="email"
                    placeholder="Email"
                    label="Email"
                  />
                  <FormInput
                    errors={errors.phone}
                    touched={touched.phone?.toString()}
                    tooltip="Enter your phone number"
                    name="phone"
                    placeholder="Phone"
                    label="Phone"
                  />
                  <FormSelect
                    errors={errors.subject}
                    touched={touched.subject?.toString()}
                    tooltip="Select your subject"
                    name="subject"
                    label="Subject"
                    options={[
                      { value: "General Inquiry", label: "General Inquiry" },
                      { value: "Sales", label: "Sales" },
                      { value: "Support", label: "Support" },
                      { value: "Feedback", label: "Feedback" },
                      { value: "Other", label: "Other" },
                    ]}
                    placeholder="Subject"
                  />

                  <FormTextArea
                    errors={errors.message}
                    touched={touched.message?.toString()}
                    tooltip="Enter your message"
                    name="message"
                    placeholder="Message"
                    label="Message"
                  />
                  <div className="lg:mx-auto w-3/4">
                    <button
                      type="submit"
                      className={`btn w-full ${
                        mutateContactForm.isPending
                          ? "btn-disabled"
                          : "btn-primary"
                      }`}
                    >
                      {mutateContactForm.isPending ? (
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
          </div>
          <div
            className=" flex flex-col lg:w-3/4 w-full text-center  "
            style={{
              backgroundImage: `url(/img/assets/contact_us_customer.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-base-100 bg-opacity-30 flex flex-col p-12 w-full h-full">
              <h1 className="text-5xl mt-auto font-bold">Contact Us</h1>
              <p className="text-lg">
                If you have any questions or concerns, please feel free to
                contact us.
              </p>
              <p className="text-lg mb-auto">We are here to help you.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
