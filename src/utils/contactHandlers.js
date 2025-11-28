import { sendEmail } from "../services/contactService";

export const handleChangeForm = (form, setForm) => (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

export const handleSubmitForm = (form, setForm) => async (e) => {
  e.preventDefault();

  try {
    await sendEmail(form);
    alert("Pesan berhasil dikirim!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    alert("Gagal mengirim pesan, coba lagi ya!");
  }
};
