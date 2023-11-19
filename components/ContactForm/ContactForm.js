'use client'
import React, { useRef } from 'react'
import styles from './ContactForm.module.css'
import emailjs from '@emailjs/browser';


const ContactForm = ({title, candidates}) => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    console.log('bnbdb')

    emailjs.sendForm('service_p400yaa', 'template_7bwnooi', form.current, process.env.PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };



  return (
    <div className={styles.SectionContainer}>
      <h1>{title}</h1>
      
      <form ref={form} onSubmit={sendEmail}>
		
		  <input id="name" type="text" placeholder="NAME" className={styles.input} name='name' required/>
		  <input id="email" type="text" placeholder="E-MAIL" className={styles.input} name='email' required/>
		  <textarea id="message" type="text" placeholder="MESSAGE" className={styles.textarea} name='message'></textarea>
      <input id="submit" type="submit" value="Send!" className={styles.input}/>

    </form>
    </div>
  )
}

export default ContactForm


