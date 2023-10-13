export function myInput(val,setVal){
    const handleChange = (e)=>{
        setVal(e.target.value)
    }
    <input value={val} onChange={handleChange}/>
}