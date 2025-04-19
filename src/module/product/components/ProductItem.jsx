export default function ProductItem() {

    return (
        <div className="card" >
            <img src="https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" height="150px" width="100%"/>
            <div className="card-body">
                <h2 className="product-title">Apple iPhone 14</h2>
                <p className="product-description">6.1-inch Super Retina XDR display, A15 Bionic chip</p>
                <p className="product-price">$ 999</p>
            </div>
            <div className="card-footer">
                <button className="button-buy">Buy Now</button>
                <button className="button-add">Add to Card</button>
            </div>
        </div>
    );
}
