export const Input = ({action}) => {
const handleChange =(e)=> {
    if(e.key==='Enter'){
        action(e.target.value)
    }
   
}
    return <input onKeyDown={handleChange}  className="buttton"/>
}