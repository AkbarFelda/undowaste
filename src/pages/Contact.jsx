import React, { useState } from "react";
import { SuccessModal, ErrorModal } from "../components";
import { handleChangeForm, handleSubmitForm } from "../utils/contactHandlers";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
  const openSuccessModal = () => setIsSuccessModalOpen(true);
  const closeSuccessModal = () => setIsSuccessModalOpen(false);
  const openErrorModal = () => setIsErrorModalOpen(true);
  const closeErrorModal = () => setIsErrorModalOpen(false);

  return (
    <div className="relative z-10 py-12 lg:py-10 lg:ml-15 lg:mr-16 md:ml-4">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-28 ">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-leaguespartansemibold text-black mb-4 leading-tight">
            Contact
            <br />
            Support
          </h1>

          <p className="p-2 text-black font-poppinsmedium text-lg sm:text-lg mb-10 max-w-lg  mx-auto md:mx-0">
            Hubungi tim support kami melalui email atau form di samping.
            Kami siap membantu dan akan membalas secepatnya.
          </p>
        </div>

        <div className="flex-1 ml-0 md:ml-12 lg:ml-80">
          <form
            onSubmit={handleSubmitForm(
              form,
              setForm,
              openSuccessModal,
              openErrorModal
            )}
            className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm"
          >

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-poppinssemibold mb-2"
                htmlFor="name"
              >
                Nama
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                type="text"
                onChange={handleChangeForm(form, setForm)}
                placeholder="Masukkan nama Anda"
                className="w-full py-3 px-4 rounded-lg shadow focus:outline-none font-poppinsregular text-black"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-poppinssemibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChangeForm(form, setForm)}
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full py-3 px-4 rounded-lg shadow focus:outline-none font-poppinsregular text-black"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-poppinssemibold mb-2"
                htmlFor="message"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChangeForm(form, setForm)}
                rows="4"
                placeholder="Tulis pesan Anda di sini"
                className="w-full py-3 px-4 rounded-lg shadow focus:outline-none font-poppinsregular text-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white font-poppinsmedium py-3 px-4 rounded-lg w-full hover:opacity-80 transition"
            >
              Kirim Sekarang
            </button>
          </form>
        </div>
      </div>

      <div className="w-full mt-5 md:ml-2 md:p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.49131650807!2d106.6647043584382!3d-6.229720928695747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1764249267531!5m2!1sen!2sid"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-lg shadow-md"
        ></iframe>
      </div>

      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={closeSuccessModal} 
      />
      
      <ErrorModal 
        isOpen={isErrorModalOpen} 
        onClose={closeErrorModal} 
      />
    </div>
  );
}

export default Contact;