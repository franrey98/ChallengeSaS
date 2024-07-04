"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./contactForm.module.css";
import * as Yup from "yup";
import SectionHeading from "../sectionHeading/SectionHeading";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido."),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido."),
    message: Yup.string().required("El mensaje es requerido."),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
    await resetForm();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
            <Form className={styles.form}>
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
              <div className={styles["display-button"]}>
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
      {isSubmitted && (
        <div className={styles.successMessage}>
          ¡Formulario enviado exitosamente!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
