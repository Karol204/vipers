'use client'
import React, { useRef } from 'react'
import styles from './ContactForm.module.css'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";



const ContactForm = ({title, candidates}) => {
  const form = useRef();
  const recaptcha = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    const captchaValue = recaptcha.current.getValue()
    if (!captchaValue) {
      alert("Please verify you are not a robot");
    } else { 
      emailjs.sendForm('service_p400yaa', 'template_7bwnooi', form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
  };



  return (
    <div className={styles.SectionContainer}>
      <h1>{title}</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label for="lang" className={styles.label}>Tell us who you are: </label>
        <select name="dropdown" id="lang" className={styles.input}>
          <option value="select">Select an option</option>
          <option value="Customer"> a customer</option>
          <option value="Emploee">an employee</option>
        </select>
		  <input id="name" type="text" placeholder="NAME" className={styles.input} name='name' required/>
		  <input id="email" type="text" placeholder="E-MAIL" className={styles.input} name='email' required/>
		  <textarea id="message" type="text" placeholder="MESSAGE" className={styles.textarea} name='message'></textarea>
      <input id="submit" type="submit" value="Send!" className={styles.input}/>
      <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_APP_SITE_KEY}/>
      

    </form>
    </div>
  )
}

export default ContactForm


