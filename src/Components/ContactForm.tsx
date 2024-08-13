import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../Styles/contactform.module.css";


export default function ContactForm() {

    const form = useRef<HTMLFormElement | null>(null);

    const serviceID: string = "service_c9tdbcc";
    const templateID: string = "template_9u5hcx8";
    const publicKey: string = "sX_ARBYHCS6R9gEqa";
  
    const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (form.current) {
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("successfully sent contact request");
          }, 
          (error) => {
            console.log("failed to send contact request", error.text);
          },
        );
      }
    };

    return (
    <div className={styles.card}>
      <form ref={form} onSubmit={sendMail}>
        <h2>Let's Talk!</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.formGroup}>
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" id="firstname" />
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.formGroup}>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" id="lastname"/>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>

          <div className={styles.fullWidthCol}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label htmlFor="message_contents">Message</label>
                <textarea name="message_contents" id="message_contents" required aria-required></textarea>
              </div>
            </div>
          </div>

          <div className={styles.submitContainer}>
            <div className={styles.col}>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
