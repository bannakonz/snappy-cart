import CategoryItem from "./CategoryItem.jsx";
import {useLocation} from "react-router-dom";

export default function CategoryList(){

    const CATEGORY = [
        { id: 0, title: 'all'},
        { id: 1, title: 'electronics' },
        { id: 2, title: 'audio' },
        { id: 3, title: 'fashion' },
        { id: 4, title: 'homeLiving' },
        { id: 5, title: 'booksStationery' },
    ];

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {CATEGORY?.map((category)=>{
                return <CategoryItem key={category.id} style={{color: 'red'}} category={category}/>
            })}
        </div>
    )

}
