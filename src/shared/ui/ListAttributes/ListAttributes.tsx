
import { useState } from 'react';
import * as cls from './listAttributes.module.scss'
const ListAttributes = () => {
    const [attributes, setAttributes] = useState([
        { id: 1, checked: false, label: 'Использовать прописные буквы' },
        { id: 2, checked: false, label: 'Использовать строчные буквы' },
        { id: 3, checked: false, label: 'Использовать цифры' },
        { id: 4, checked: false, label: 'Использовать символы: %, *, ), ?, @, #, $, ~' },
        { id: 5, checked: false, label: 'Избегать повторения символов' }
      ]);
    
      const handleCheckboxChange = (id:number) => {
        const updatedAttributes = attributes.map(attribute => {
          if (attribute.id === id) {
            return { ...attribute, checked: !attribute.checked };
          }
          return attribute;
        });
        setAttributes(updatedAttributes);
      };
    return (
        <ul className={cls.form__attributes}>
            {attributes.map((attribute) => (
                <li key={attribute.id} className={cls.form__attribute}>
                <input 
                    type="checkbox" 
                    className={cls.form__checkbox} 
                    checked={attribute.checked} 
                    onChange={() => handleCheckboxChange(attribute.id)} 
                    id={`checkbox-${attribute.id}`}
                />
                <label htmlFor={`checkbox-${attribute.id}`} className={cls.form__checkboxFake}></label>
                <span className="form__att_text">{attribute.label}</span>
                </li>
            ))}
        </ul>
    )
}

export default ListAttributes;