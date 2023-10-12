import { useState } from "react";
import Button from "../UI/buttons/Button";
import Inputgroup from "../components/shared/IndexGroup";

const init = {
    title: '',
    bio: '',
    skills: ''
}

const App = () => {
    const [values, setValues] = useState({...init});
    const [errors, setErrors] = useState({...init});
    const [focuses, setFocuses] = useState({
        title: false,
        bio: false,
        skills: false
    })

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {isValid, errors} = checkValidity(values);

        if(isValid){
            console.log(values);
            setErrors({...errors})
        } else {
            setErrors({...errors});
        }
    };

    const handleFocus = (e) => {
        setFocuses((prev) => ({
            ...prev,
            [e.target.name]: true,
        }));
    };

    const handleBlur = (e) => {
        const key = e.target.name;
        const {isValid, errors} = checkValidity(values);

        if(errors[key] && focuses[key] === true) {
            setErrors((prev) => ({
                ...prev,
                [key]: errors[key],
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                [key]: '',
            }));
        }
    };

    const checkValidity = (values) => {
        const errors = {};
        const {title, bio, skills} = values;

        if(!title) {
            errors.title = 'Invalid title'
        }
        if(!bio) {
            errors.bio = 'Invalid bio'
        }
        if(!skills) {
            errors.skills = 'Invalid skills'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0,
        };
    };


    return (
        <div className="root">
            <form onSubmit={handleSubmit}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>     
                    <Inputgroup
                        value={values.title}
                        label={'Title'}
                        name='title'
                        placeholder={'Enter Your Title'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={errors.title}
                    />
                    <Inputgroup
                        value={values.bio}
                        label={'Bio'}
                        name='bio'
                        placeholder={'I am a software engineer...'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={errors.bio}
                    />
                    <Inputgroup
                        value={values.skills}
                        label={'Skills'}
                        name='skills'
                        placeholder={'JavaScript, React...'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={errors.skills}
                    />
                    <Button type="submit">Submit</Button>
                </div>
            </form>    
        </div>
    )
};

export default App;