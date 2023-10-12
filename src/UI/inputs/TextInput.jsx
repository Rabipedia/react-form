import styled from 'styled-components'

const TextInput = styled.input`
    width: 100%;
    border: ${props => props.error ? '2px solid #fff000' : '1px solid #e1e1e1'};
    outline: none;
    padding: 0.25rem 0.5rem;
    backgroun: #dddd;
    font-size: 0.9rem;;
    font-family: Arial;
    color: #333;

    &:focus {
        border: 1px solid skyblue;
    }
`

export default TextInput;