import { useState } from "react";

interface InputProps {
    cls: string,
    value: number
}
const Input = ({...cls}:InputProps) => {
    const [value, setValue] = useState(0);

    function handlerValue(e:any) {
        setValue(e.target.value)
    }
    return (
        <input value={value} className={cls.cls} type="number" onChange={handlerValue}/>
    )
}

export default Input;