import NavBar from "./NavBar";

const Header = (props) => {
    const { currentLocation, setCurrentLocation } = props;
    const devName = 'Brinton Cole'
    return (
        <header>
            <div className="header">
                <h1>{devName}</h1>
                <NavBar currentLocation={currentLocation} setCurrentLocation={setCurrentLocation}/>
            </div>
        </header>
    )
}

export default Header;