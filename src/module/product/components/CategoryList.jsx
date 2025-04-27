import CategoryItem from "./CategoryItem.jsx";

export default function CategoryList(){

    const CATEGORY = [
        { id: 1, title: 'electronics' },
        { id: 2, title: 'audio' },
        { id: 3, title: 'fashion' },
        { id: 4, title: 'homeLiving' },
        { id: 5, title: 'booksStationery' },
    ];

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {CATEGORY?.map((item)=>{
                return <CategoryItem key={item.id} style={{color: 'red'}} item={item}/>
            })}
        </div>
    )

}
