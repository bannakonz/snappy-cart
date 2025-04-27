export default function CategoryItem({category, handleSearchProduct}) {
    return (
        <>
            <button className="category-item" onClick={()=>handleSearchProduct(category.title)}>{category.title}</button>
        </>
    );
}
