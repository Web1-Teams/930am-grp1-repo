
const CardBrand= (props) =>{
    return(
    <div className=" bg-blue-200 rounded-lg shadow-lg text-center p-2 hover:scale-105 transition">
    <a href={props.Link}>
        <img className=" object-contain rounded-lg w-full" src={props.image}alt={props.name}/>
        <p className="mt-2 text-lg font-medium text-blue-950">{props.name}</p>
        </a>
</div>);
}
export default CardBrand