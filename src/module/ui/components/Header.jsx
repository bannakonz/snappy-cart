import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav style={{background: 'green', height: '50px'}}>
            <ul style={{margin: '0px', height: '100%',  padding: '0px 20px', listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link  to="">Logo</Link>
                <div style={{display: 'flex', columnGap: '20px',  justifyContent: 'space-between'}}>
                    <li>Toggle</li>
                    <li>Cart</li>
                </div>
            </ul>
        </nav>
    )
}
