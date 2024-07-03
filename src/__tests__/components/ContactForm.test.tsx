import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ContactForm from "@/components/contactForm/ContactForm";

describe("ContactForm", () => {
  test("renders ContactForm component", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
  });

  test("validates form fields", async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Correo Electrónico/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(
      await screen.findByText(/El nombre es requerido./i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/El correo electrónico es requerido./i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/El mensaje es requerido./i)
    ).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "Francisco Rey" } });
      fireEvent.change(emailInput, {
        target: { value: "reyfrancisco98@hotmail.com" },
      });
      fireEvent.change(messageInput, {
        target: { value: "Probando el formulario" },
      });
      fireEvent.click(submitButton);
    });

    expect(screen.queryByText(/El nombre es requerido./i)).toBeNull();
    expect(
      screen.queryByText(/El correo electrónico es requerido./i)
    ).toBeNull();
    expect(screen.queryByText(/El mensaje es requerido./i)).toBeNull();
  });
});
