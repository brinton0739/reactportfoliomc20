import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"

const prettyLocation = (loc) => {
    switch (loc) {
        case 'about':
            return 'About Me'
        case 'portfolio':
            return 'Portfolio'
        case 'contact':
            return 'Contact'
        case 'resume':
            return 'Resume'
    }
}

const NavBar = (props) => {
    const locations = ['about', 'portfolio', 'contact', 'resume']
    const { currentLocation, setCurrentLocation } = props;
    const navigate = useNavigate();
    const clickHandler = (newLocation) => {
        return () => {
            setCurrentLocation(newLocation);
            navigate(`/${newLocation}`);
        }
    }

    const popNavBar = () => {
        return locations.map((location) => {
            return <Button key={location} variant={`${currentLocation === location ? 'info' : 'primary'}`} onClick={clickHandler(location)}>{prettyLocation(location)}</Button>
        })
    }
    
    return (
      <div className="nav">
        <ul>{popNavBar()}</ul>
      </div>
    );
}

export default NavBar;