import emailjs from "@emailjs/browser";

export const sendEmail = async ({ name, email, message }) => {
  try {
    const response = await emailjs.send(
      "service_6jc3ajh",     
      "template_sc6zu2l",    
      { name, email, message},
      "jBztZo5IPDBIuKi-u"      
    );

    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error
  }
};
