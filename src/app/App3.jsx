import { useState } from "react";
import Button from "../UI/buttons/Button";
import Inputgroup from "../components/shared/IndexGroup";
import { deepClone } from "../utils/object-utils";

const init = {
    title: {
        value: '',
        error: '',
        focus: false
    },
    bio: {
        value: '',
        error: '',
        focus: false
    },
    skills: {
        value: '',
        error: '',
        focus: false
    },
}

const App = () => {
    const [state, setState] = useState(deepClone(init));

    // Util function
    const mapStateToValues = (state) => {
        return Object.keys(state).reduce((acc, cur) => {
            acc[cur] = state[cur].value;
            return acc;
        }, {})
    }

    const handleChange = (e) => {
        const {name: key, value} = e.target;
        const values = mapStateToValues(state);
        const oldState = deepClone(state);
        oldState[key].value = value;
        const {errors} = checkValidity(values);

        if(oldState[key].focus && errors[key]) {
            oldState[key].error = errors[key];
        } else {
            oldState[key].error = '';
        }
        setState(oldState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = mapStateToValues(state)

        const {isValid, errors} = checkValidity(values);
        if(isValid) {
            console.log(state);
        } else {
            const oldState = deepClone(state);
            Object.keys[errors].forEach((key) => {
                oldState[key].error = errors[key]
            });
            setState(oldState);
        }
    };

    const handleFocus = (e) => {
        const {name} = e.target;

        const oldState = deepClone(state);
        oldState[name].focus = true;
        setState(oldState);
        // setFocuses((prev) => ({
        //     ...prev,
        //     [e.target.name]: true,
        // }));
    };

    const handleBlur = (e) => {
        const key = e.target.name;
        const values = mapStateToValues(state);
        const {errors} = checkValidity(values);
        const oldState = deepClone(state);

        if(oldState[key].focus && errors[key]) {
            oldState[key].error = errors[key]
        } else {
            oldState[key].error = ''
        }

        setState(oldState);
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
                        value={state.title.value}
                        label={'Title'}
                        name='title'
                        placeholder={'Enter Your Title'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={state.title.error}
                    />
                    <Inputgroup
                        value={state.bio.value}
                        label={'Bio'}
                        name='bio'
                        placeholder={'I am a software engineer...'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={state.bio.error}
                    />
                    <Inputgroup
                        value={state.skills.value}
                        label={'Skills'}
                        name='skills'
                        placeholder={'JavaScript, React...'}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={state.title.error}
                    />
                    <Button type="submit">Submit</Button>
                </div>
            </form>    
        </div>
    )
};

export default App;