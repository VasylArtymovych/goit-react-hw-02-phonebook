import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

export const Button = styled.button.attrs({
    type: "button",
})`
width: 75px;
height: 25px;
background: linear-gradient(to right, #0A4918, #53725A);
color: #fff;
border: 2px solid grey;
border-radius: 5px;
cursor: pointer;
&:hover,
&:focus {
    background: grey;
    color: #13411D;
    box-shadow: 0px 0px 7px #fff;
};
`;