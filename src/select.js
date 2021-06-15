
import React, { useState } from 'react';
import Select from 'react-select';

function SelectDropdown() {
    const data = [
        {
            value: 1,
            label: "cerulean"
        },
        {
            value: 2,
            label: "fuchsia rose"
        },
        {
            value: 3,
            label: "true red"
        },
        {
            value: 4,
            label: "aqua sky"
        },
        {
            value: 5,
            label: "tigerlily"
        },
        {
            value: 6,
            label: "blue turquoise"
        }
    ];

    // set value for default selection
    const [selectedValue, setSelectedValue] = useState([]);

    // handle onChange event of the dropdown
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    return (
        <div className="App">
            <h3>Get selected by only value for multi select - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>

            <Select
                className="dropdown"
                placeholder="Select Option"
                value={data.filter(obj => selectedValue.includes(obj.value))} // set selected values
                options={data} // set list of the data
                onChange={handleChange} // assign onChange function
                isMulti
                isClearable
            />

            {selectedValue && <div >
                <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
            </div>}
        </div>
    );
}

export default SelectDropdown;


//  style={{ marginTop: "20px", lineHeight: '25px' }}