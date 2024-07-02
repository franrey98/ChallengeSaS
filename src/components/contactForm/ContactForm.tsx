"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./contactForm.module.css";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido"),
    message: Yup.string().required("El mensaje es requerido"),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    // Aquí puedes manejar el envío del formulario
    console.log(values);
    resetForm();
  };

  return (
    <div id="contact" className="form-container">
      <h2>Contacto</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="form-field">
              <label htmlFor="name">Nombre</label>
              <Field
                type="text"
                id="name"
                name="name"
                className={errors.name && touched.name ? "input-error" : ""}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Correo Electrónico</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={errors.email && touched.email ? "input-error" : ""}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Mensaje</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className={
                  errors.message && touched.message ? "input-error" : ""
                }
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
