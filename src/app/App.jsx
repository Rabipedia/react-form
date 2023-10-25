import Button from '../UI/buttons/Button';
import Inputgroup from '../components/shared/IndexGroup';
import useForm from '../hooks/useForm';


const init = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const validate = (values) => {
    const errors = {};
    if(!values.firstName) {
        errors.firstName = 'first name is required!';
    }
    if(!values.lastName) {
        errors.lastName = 'last name is required!';
    }
    if(!values.email) {
        errors.email = 'email is required!';
    }
    if(!values.password) {
        errors.password = 'password is invalid!'
    }

    return errors;
}
const App = () => {
   const { 
       // formState: state,
        handleChange,
        handleFocus, 
        handleBlur, 
        handleSubmit, 
        clear
    } = useForm({init, validate});

    const cb = ({hasError, errors, values}) => {
        if(hasError){
            alert(['Error' + JSON.stringify(errors)]);
        } else {
            alert(['Success' + JSON.stringify(values)])
        }
    }

 //   console.log(state)


    return (
        <div>
            <h1>My Custom hook form</h1>
            <form onSubmit={(e) => handleSubmit(e, cb)}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <Inputgroup
                   //     value={statefirstName.value}
                        label={'First Name:'}
                        name='firstName'
                        placeholder={'John'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                   //     error={state.firstName.error}
                    />
                     <Inputgroup
                   //     value={state.lastName.value}
                        label={'Last Name:'}
                        name='lastName'
                        placeholder={'Doe'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                   //     error={state.lastName.error}
                    />
                     <Inputgroup
                   //     value={state.email.value}
                        label={'Email:'}
                        name='email'
                        placeholder={'JohnDoe@gmail.com'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                   //     error={state.email.error}
                    />
                     <Inputgroup
                   //     value={state.password.value}
                        label={'Password:'}
                        name='password'
                        placeholder={'*********'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                   //     error={state.password.error}
                    />
                </div>
                <div>
                    <Button onClick={clear}>clear</Button>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )
};

export default App;