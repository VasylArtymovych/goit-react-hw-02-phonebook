import styled from "styled-components";

const Filter = ({value, onChange}) => (
    <Label>
        Filter by name:     
        <Input 
            name="filter"
            value={value}
            onChange={onChange}
        />
    </Label>
)

export default Filter;

const Label = styled.label`
    display: block;
    font-size: 18px;
    color: #14331B;
    margin-bottom: 15px;
`;

const Input = styled.input.attrs({
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