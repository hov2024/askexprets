import React from 'react'
import styles from '../../../style/Contact/ContactForm.module.css'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
    const {register, handleSubmit, formState: {errors} } = useForm()

    const registerOptions = {
        name: { required: "«Անունը պարտադիր է»" },
        email: { required: "Email is required" },
    };

    const handleRegistration = (data) => {
        console.log(data)
    }


  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
        <div className={styles['form-box']}>
            <div className={styles['form-item']}>
                <label>Full Name </label>
                <input 
                    name="name" 
                    {...register('name', registerOptions.name )} 
                    placeholder='john david'
                />
                {errors?.name && errors.name.message}
            </div>
            <div className={styles['form-item']}>
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    {...register('email', registerOptions.email )} 
                    placeholder='consult@mail.com' 
                />
            </div>
        </div>
        <div className={styles['form-box']}>
            <div className={styles['form-item']}>
                <label>Phone</label>
                <input 
                    type="tel" 
                    name="phone" 
                    {...register('phone')} 
                    placeholder='+008 654 231' 
                />
            </div>
            <div className={styles['form-item']}>
                <label>Company(optional)</label>
                <input 
                    type="tel" 
                    name="telephone" 
                    {...register('telephone')} 
                    placeholder='yourcompany.com'
                />
            </div>
        </div>

        <div className={styles['form-massage']}>
            <label>Message</label>
            <textarea 
                name='message' 
                {...register('message')} 
                placeholder='Briefly tell us about your project and your current goals. How can we help you?vv' 
            />
        </div>

        <button className='btn-black'>Send Message</button>
    </form>
  )
}

export default ContactForm