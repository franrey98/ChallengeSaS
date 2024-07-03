"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./contactForm.module.css";
import * as Yup from "yup";
import SectionHeading from "../sectionHeading/SectionHeading";

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
    console.log(values);
    resetForm();
  };

  return (
    <div className={styles.contact}>
      <SectionHeading>Contacto</SectionHeading>
      <div id="contact" className={styles["form-container"]}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className={styles.form} style={{ width: "35rem" }}>
              <div className={styles["form-field"]}>
                <label htmlFor="name" className={styles.label}>
                  Nombre
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`${styles["input-field"]} ${
                    errors.name && touched.name ? styles["input-error"] : ""
                  }`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles["error-message"]}
                />
              </div>

              <div className={styles["form-field"]}>
                <label htmlFor="email" className={styles["label"]}>
                  Correo Electrónico
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`${styles["input-field"]} ${
                    errors.email && touched.email ? styles["input-error"] : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles["error-message"]}
                />
              </div>

              <div className={styles["form-field"]}>
                <label htmlFor="message" className={styles["label"]}>
                  Mensaje
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="8"
                  className={`${styles["textarea-field"]} ${
                    errors.message && touched.message
                      ? styles["input-error"]
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={styles["error-message"]}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  className={styles["submit-button"]}
                  disabled={isSubmitting}
                >
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
