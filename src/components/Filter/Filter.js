import {Label, Input} from './Filter.styled';

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

