import {useLocation, useNavigate} from "react-router-dom";

export default function CategoryItem({category}) {
    let navigate = useNavigate();
    let location = useLocation();
    let urlParam = new URLSearchParams(location.search);
    let queryParam = urlParam.get('category');

    const filterProductByCategory = (category) => {
        if (category === 'all') {
            navigate('/');
        } else {
            navigate(`/?category=${category}`)
        }
    }

    let isActive = queryParam === category.title || !queryParam;
    return (
        <>
            <button style={{background: isActive ? 'green' : undefined}}  className={`category-item`} onClick={()=>filterProductByCategory(category.title)}>{category.title}</button>
        </>
    );
}
