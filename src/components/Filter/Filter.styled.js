import styled from "styled-components";

export const Label = styled.label`
        display: block;
        font-size: 18px;
        color: #14331B;
        margin-bottom: 15px;
`;

export const Input = styled.input.attrs({
    type: 'text',
})`
    width: 200px;
    padding: 5px;
    margin-left: 15px;
    font-size: 12px;
    background: #9A9B9A;
    outline: none;
    border: 2px solid #14331B;
    border-radius: 5px;
`;