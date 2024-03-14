import * as React from 'react';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';

const MoneyFormatCustom = React.forwardRef(
    function NumericFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                valueIsNumericString
                prefix="VND "
            />
        );
    },
);

MoneyFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

function MoneyFormattedInputs() {
    const [values, setValues] = React.useState({
        textmask: '(100) 000-0000',
        numberformat: '1320',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <TextField
            label="react-number-format"
            value={values.numberformat}
            onChange={handleChange}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
                inputComponent: MoneyFormatCustom,
            }}
            variant="outlined"
        />
    );
}



// const CapacityFormatCustom = React.forwardRef(
//     function NumericFormatCustom(props, ref) {
//         const { onChange, ...other } = props;

//         return (
//             <NumericFormat
//                 {...other}
//                 getInputRef={ref}
//                 onValueChange={(values) => {
//                     onChange({
//                         target: {
//                             name: props.name,
//                             value: values.value,
//                         },
//                     });
//                 }}
//                 thousandSeparator
//                 valueIsNumericString
//                 prefix= {<PersonIcon/>}
//             />
//         );
//     },
// );

// CapacityFormatCustom.propTypes = {
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

// function CapacityFormattedInputs() {
//     const [values, setValues] = React.useState({
//         textmask: '(100) 000-0000',
//         numberformat: '1320',
//     });

//     const handleChange = (event) => {
//         setValues({
//             ...values,
//             [event.target.name]: event.target.value,
//         });
//     };

//     return (
//         <TextField
//             label="react-number-format"
//             value={values.numberformat}
//             onChange={handleChange}
//             name="numberformat"
//             id="formatted-numberformat-input"
//             InputProps={{
//                 inputComponent: CapacityFormatCustom,
//             }}
//             variant="outlined"
//         />
//     );
// }

export default { MoneyFormattedInputs};