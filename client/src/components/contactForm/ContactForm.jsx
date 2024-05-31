import { Controller, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import styles from './contactForm.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../service/api';

export const ContactForm = () => {
  const { reset, handleSubmit, control, formState: { errors }} = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '', 
      message: '',

    }
  });

  const submit = async (data) => {
    const { name, email, phone, subject, message } = data;
    
    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {

        reset({email: '', name: '', subject: '', phone: '', message: ''})
        
        if (!toast.isActive(1, "contactFormSubmit")) {
          toast('Successfully sended', {
              type: "success",
              toastId: 1                      
          })
}
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('The message was not sent.');
    }
  }


  return (
    <>
   
    <ToastContainer toast={1} containerId={'contactFormSubmit'} />
    <div className={styles.form}>
   
      <form onSubmit={handleSubmit(submit)}>
        <h2>Write Message</h2>
        <div className={styles.info}>

          <div className={styles.name}>
            <label>Name:</label>
            <Controller
            name="name"
            control={control}
            rules={{
              minLength: {
                value: 3,
                message: "Name must be at least 8 characters long"
              },
              maxLength: {
                value: 14,
                message: "Name must not exceed 20 characters"
              },
              required: 'Name is required'
            }}
            render={({ field }) => (
              <>
                <input type="text" {...field} />
                <p style={{
              opacity: errors.name ? `1` : `0`
            }}>{errors.name && errors.name.message}</p>
              </>
            )}
          />
        </div>
    

          <div className={styles.email}>
            <label>Email:</label>
            <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              minLength: {
                value: 3,
                message: 'Email should be at least 3 characters',
              },
              maxLength: {
                value: 40,
                message: 'Email should not exceed 40 characters',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <>
                <input type="text"  {...field} />
                <p style={{
              opacity: errors.email ? `1` : `0`
            }}>{errors.email && errors.email.message}</p>
              </>
            )}
          />
          </div>

          <div className={styles.phone}>
            <label>Phone:</label>
            <Controller
            name="phone"
            control={control}
            rules={{
              required: 'Phone is required',
              pattern: {
                value: /^[0-9]*$/,
                message: 'Please enter a valid number',
              },
            }}
            render={({ field }) => (
              <>
                <input type="text" {...field} />
                <p style={{
              opacity: errors.phone ? `1` : `0`
            }}>{errors.phone && errors.phone.message}</p>
              </>
            )}
          />
          </div>

          <div className={styles.subject}>
            <label>Subject:</label>
            <Controller
            name="subject"
            control={control}
            rules={{
              required: 'Subject is required',
              minLength:  {
                value: 6,
                message: 'Email should be at least 6 characters',
              },
              maxLength:  {
                value: 20,
                message: 'Subject should not exceed 20 characters',
              },
            }}
            render={({ field }) => (
              <>
                <input type="text" {...field} />
                <p style={{
              opacity: errors.subject ? `1` : `0`
            }}>{errors.subject && errors.subject.message}</p>
              </>
            )}
          />
          </div>
        </div>
        <div className={styles.message}>
          <label>Message:</label>
          <Controller
            name="message"
            control={control}
            rules={{
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message should be at least 10 characters',
              },
           
            }}
            render={({ field }) => (
              <>
                <textarea type="text"  {...field} />
                <p style={{
              opacity: errors.message ? `1` : `0`
            }}>{errors.message && errors.message.message}</p>
            </>
            )}
          />
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
    </>
  );
};


