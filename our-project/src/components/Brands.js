
import CardBrand from'./CardBrand';
const Brands = () =>{
    const data = {
        brandData: [
          { name: 'Beko', link: '#',image: "./assets/Beko.jpeg "},
          { name: 'LG', link: '#', image: "./assets/LG.jpeg" },
          { name: 'Asus', link: '#', image:"./assets/Asus.jpeg "},
          { name: 'Bissel', link: '#', image:"/assets/Bissel.webp" },
        ],
      };
    return(
<div className="container mx-auto  items-center text-center py-10"> 
        
    <div className="mb-8 ">
     <h1 className="text-4xl font-bold text-blue-950">Shop By Brand</h1>
    </div> 
<div className="item-right grid grid-cols-2 md:grid-cols-4  gap-4">
 {data.brandData.map((item,index)=>{ return(<CardBrand name={item.name} link={item.link} image={item.image}/>)})}
</div>
</div>);
}

export default Brands