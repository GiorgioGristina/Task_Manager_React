export default function Input({label, textarea, ...props}){
    return(
        <p className="flex my-8 text-black ">
            <label>{label}</label>
            {textarea ? <textarea {...props}/> :<input {...props} />}    
        </p>
    );
}