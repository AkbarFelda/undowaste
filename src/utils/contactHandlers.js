// utils/contactHandlers.js

import { sendEmail } from "../services/contactService";

export const handleChangeForm = (form, setForm) => (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
};

// Ubah fungsi agar menerima successCallback sebagai parameter ketiga
export const handleSubmitForm = (form, setForm, successCallback) => async (e) => {
    // 1. Tambahkan validasi sederhana untuk mencegah pengiriman kosong
    if (!form.name || !form.email || !form.message) {
        alert("Semua field harus diisi!");
        e.preventDefault(); // Penting: Hentikan event default
        return;
    }

    e.preventDefault();

    try {
        // Panggil service untuk mengirim email
        await sendEmail(form); 
        
        // 1. Hapus alert lama
        // alert("Pesan berhasil dikirim!"); 

        // 2. Panggil successCallback (yang merupakan fungsi openModal)
        if (successCallback) {
            successCallback();
        }

        // 3. Reset Form setelah sukses
        setForm({
            name: "",
            email: "",
            message: "",
        });
        
    } catch (error) {
        console.error("Error saat mengirim email:", error);
        alert("Gagal mengirim pesan, coba lagi ya!");
        // Biarkan form tetap terisi agar pengguna tidak perlu mengisi ulang
    }
};