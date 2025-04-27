import { useNavigate} from "react-router-dom";

export default function CategoryItem({category}) {
    let navigate = useNavigate();

    const filterProductByCategory = (category) => {
        if (category === 'all') {
            navigate('/');
        } else {
            navigate(`/?category=${category}`)
        }
    }
    return (
        <>
            <button className={`category-item`} onClick={()=>filterProductByCategory(category.title)}>{category.title}</button>
        </>
    );
}
