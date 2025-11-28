import { sendEmail } from "../services/contactService"; 

export const handleChangeForm = (form, setForm) => (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
};

export const handleSubmitForm = (form, setForm, successCallback, errorCallback) => async (e) => {
    
    if (!form.name || !form.email || !form.message) {
        e.preventDefault();
        
        if (errorCallback) {
            errorCallback();
        }
        return;
    }

    e.preventDefault();

    try {
        await sendEmail(form); 
        if (successCallback) {
            successCallback();
        }

        setForm({
            name: "",
            email: "",
            message: "",
        });
        
    } catch (error) {
        console.error("Error saat mengirim email:", error);
        alert("Gagal mengirim pesan, coba lagi ya!"); 
    }
};