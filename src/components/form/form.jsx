import { useForm } from 'react-hook-form';
import './form.scss'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';


const ContactForm = () => {

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: 'onBlur' })

    const sendInfo = (data) => {
        console.log(JSON.stringify(data));
        reset();
    }

    const { ref: refInView, inView: isShow } = useInView({ threshold: 0.5 });

    const myref = useRef();

    useEffect(() => {
        if (isShow) {
            myref.current.classList.add("animation")
        }

    }, [isShow])


    return (
        <form className='form' onSubmit={handleSubmit(sendInfo)} ref={refInView}>
            <div ref={myref} className='formInner'>
                <div>
                    <input type='text' placeholder='Full Name'
                        {...register("fullName",
                            {
                                required: "Enter your Full Name",
                                pattern: {
                                    value: /^[A-Z].*/,
                                    message: "Start with a capital letter"
                                }
                            }
                        )}
                    />
                    <span>{errors?.fullName?.message}</span>
                </div>

                <div>
                    <input type='text' placeholder='Email'
                        {...register("email",
                            {
                                required: "Enter your Email",
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Erorr Email"
                                }
                            })}
                    />
                    <span>{errors?.email?.message}</span>
                </div>

                <div>
                    <input type='text' placeholder='Phone'
                        {...register("phone",
                            {
                                required: "Enter your phone",
                                pattern: {
                                    value: /^[0-9\-\+]{9,15}$/,
                                    message: "Erorr Phone"
                                }
                            }
                        )}
                    />
                    <span>{errors?.phone?.message}</span>
                </div>


                <div>
                    <textarea type='text' placeholder='Message' />
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;