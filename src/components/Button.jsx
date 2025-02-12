export default function Button({children, ...props}){
    return (
        <div>
            <button {...props} className="bg-stone-700 px-4 py-2 rounded-md hover:bg-stone-800 hover:text-stone-100">{children}</button> 
        </div>
    );
}