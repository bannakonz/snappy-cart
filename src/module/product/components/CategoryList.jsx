import CategoryItem from "./CategoryItem.jsx";

export default function CategoryList(){

    const CATEGORY = [
        { id: 1, title: 'Electronics' },
        { id: 2, title: 'ClothingFashion' },
        { id: 3, title: 'HomeKitchen' },
        { id: 4, title: 'Books' },
        { id: 5, title: 'Personal Care' },
    ];

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {CATEGORY?.map((item)=>{
                return <CategoryItem key={item.id} style={{color: 'red'}} item={item}/>
            })}
        </div>
    )

}
