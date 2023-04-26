import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'
import { BsHouseDoorFill, BsFillHouseFill, BsFillPuzzleFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai';
import { GiFlowerPot, GiClothes } from 'react-icons/gi';
import { TiSortAlphabetically } from 'react-icons/ti';
import { MdPhoneAndroid } from 'react-icons/md'

function CategoriesNav() {
    return (
        <div className="container" id="categories">
            <h1>Categories</h1>
            <Link to="/categories/all">
                <Button variant="dark" id="all"><TiSortAlphabetically />All</Button>{' '}
            </Link>
            <Link to="/categories/properties">
                <Button variant="dark" id="properties"><BsHouseDoorFill />1</Button>{' '}
            </Link>
            <Link to="/categories/auto">
                <Button variant="dark" id="auto"><AiFillCar />2</Button>{' '}
            </Link>
            <Link to="/categories/home">
                <Button variant="dark" id="home"><BsFillHouseFill />3</Button>{' '}
            </Link>
            <Link to="/categories/electronics">
                <Button variant="dark" id="electronics"><MdPhoneAndroid />4</Button>{' '}
            </Link>
            <Link to="/categories/clothes">
                <Button variant="dark" id="clothes"><GiClothes />5</Button>{' '}
            </Link>
            <Link to="/categories/toys">
                <Button variant="dark" id="toys"><BsFillPuzzleFill />6</Button>{' '}
            </Link>
            <Link to="/categories/garden">
                <Button variant="dark" id="garden"><GiFlowerPot />7</Button>{' '}
            </Link>
        </div>
    )
}

export default CategoriesNav;