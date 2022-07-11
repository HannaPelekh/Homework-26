export default function AppInput({value, placeholder, 
    className, onChange, name, onBlur}) {
    return <input type="text" 
    name={name}
    className={className}
    placeholder={placeholder}    
    value={value} 
    onChange={onChange}  
    onBlur={onBlur}     
    >
    </input>;
}