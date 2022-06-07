const Filter = ({value, onChange}) => (
    <label>
        <input 
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
        />
    </label>
)

export default Filter;
