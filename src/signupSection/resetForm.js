import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ResetForm = () => {
    const [IniPassword, setIniPassword] = useState('');
    const [FInPassword, setFInPassword] = useState('');
    const [SpecialChar, setSpecialChar] = useState({
        special: false, num: false, lower: false, upper: false
    })
    // const {register, handleSubmit, formState:{error}} = useForm()

    const handleChange = (e) => {


        if (e.target.name === "Inipassword") {
            setIniPassword(e.target.value)
        }
        else if (e.target.name === "Finpassword") {
            setFInPassword(e.target.value)
            for (let i = 0; i < FInPassword.length; i++) {
                if (FInPassword.charAt(i) === '!' || '@' || '#' || '$' || '%' || '^' || '&' || '*' || '(' || ')') console.log("true special")
                else if (FInPassword.charCodeAt(i) >= 0 || FInPassword.charCodeAt(i) <= 9) console.log("true number")
                else if (FInPassword.charCodeAt(i) >= 97 || FInPassword.charCodeAt(i) <= 122) console.log("true lower")
                else if (FInPassword.charCodeAt(i) >= 65 || FInPassword.charCodeAt(i) <= 90) console.log("true upper")
            }
            console.log(FInPassword)
            const pass2 = IniPassword.localeCompare(FInPassword)
            if (!pass2) {
                console.log("password matched");
                console.log(SpecialChar)
            }
            else
                console.log("password didnot match")

        }
    }

    return (
        <div>
            <form action="">
                <label>Create Password</label>
                <input type="password" name="Inipassword" value={IniPassword} onChange={handleChange} />
                <label>Confirm Password</label>
                <input type="password" name="Finpassword" value={FInPassword} onChange={handleChange} />
            </form>
        </div>
    )
}

export default ResetForm

// setSpecialChar({ ...SpecialChar, special: true })
// setSpecialChar({ ...SpecialChar, num: true });
// setSpecialChar({ ...SpecialChar, lower: true });
// setSpecialChar({ ...SpecialChar, upper: true });
