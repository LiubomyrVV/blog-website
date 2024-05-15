import styles from './subscription.module.css'
import { Background } from '../background/Background'
import { Controller, useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscription = () => {
    const { reset, handleSubmit, control, clearErrors, formState: { errors } } = useForm({
        defaultValues: {
          email: '',
        }
      });

    const notify = (status) => {
        if (status === 'ok') {
            reset({email: ''})
            toast.success('Successfully subscribed')
        } else {
            toast.error('Error')
        }
    };

    const submit = async (data) => {
        const { email } = data;

        try {
            const response = await fetch('http://localhost:3001/confirm-subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                notify('ok')

            } else {
                notify('err')
               
                throw new Error(data.message);
            }
        } catch (error) {
            console.error(error);
            notify('err')
        }
       
    }



    return (

        <div className={styles.subscriptionContainer}>
            <ToastContainer />
            <Background>
                <div className={styles.innerWrapper}>
                    <div className={styles.subscription}>
                        <h2 className={styles.title}>
                            Get our stories delivered From us to your inbox weekly.
                        </h2>
                        <form onSubmit={handleSubmit(submit)} className={styles.form}>
                            <div className={styles.email}>
                               
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
                                        <div className={styles.inputContainer} onClick={() => clearErrors('email')}>
                                            <input  placeholder={errors.email ? errors.email.message : 'Write your email'} className={styles.input} type="text" onClick={() => clearErrors('email')} {...field} />
                                            <p id={styles.subP} style={{position: 'absolute', color: 'red'}}>{errors.email ?  errors.email.message : null}</p>
                                        </div>
                                    )}  
                                />
                            </div>
                            <button className={styles.submit} type="submit">Get Started</button>
                           
                        </form>
                        <p className={styles.description}>Get a response tomorrow if you submit by 9pm today.
                            If we received after 9pm will get a reponse the following day.</p>
                    </div>
                </div>
            </Background>
        </div>
    )
}

export default Subscription