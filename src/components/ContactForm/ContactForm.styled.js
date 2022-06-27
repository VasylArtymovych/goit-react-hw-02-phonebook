import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    background: #57695B;
    color: #fff;
    border-radius: 10px;
`;

export const Label = styled.label`
    margin-bottom: 10px;
    width: 85%;
`;

export const Input = styled.input.attrs((props) => ({
    type: props.type,
}))`
    width: 85%;
    margin-bottom: 15px;
    padding: 7px 5px;
    font-size: 18px;
    background: #9A9B9A;
    outline: none;
    &::placeholder {
        color: #464D48;
    }
`;

export const Button = styled.button.attrs({type: "submit"})`
    width: 110px;
    height: 35px;
    background: linear-gradient(to right, #0A4918, #53725A);
    color: #fff;
    border: 2px solid grey;
    border-radius: 20px;
    cursor: pointer;
    &:hover,
    &:focus {
        background: grey;
        color: #13411D;
        box-shadow: 0px 0px 7px #fff;
    };
`;