import styled from 'styled-components';
import Text from '../../UI/text/Text';
import TextInput from '../../UI/inputs/TextInput';
import Button from '../../UI/buttons/Button';
import Label from '../../UI/inputs/Label';

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem
`
const ErrorMessage = styled.div`
    font-size: 0.8rem;
    color: red
`

const Inputgroup = ({label, name, value,placeholder, error, onChange, onFocus, onBlur}) => {
    return (
        <Container>
            <Label 
                htmlFor={name}
            >{label}
            </Label>
            <TextInput 
                value={value}
                name={name} 
                id={name} 
                placeholder={placeholder ?? ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                error={error}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <Button></Button>
        </Container>
    )
};

export default Inputgroup;