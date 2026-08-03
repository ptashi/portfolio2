import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {


  return (
    <header>
      <div className="navListLeft">
        <Link to="/">
            <div className="navListName">Pema Tashi</div>
        </Link>
        <div className="navListPosition">DEVELOPER</div>
      </div>

      <div className="navListContainer">
          {/* <div id="codeLink" className="navListItem">
          <Link to="/code">Code</Link>

          <div className="navListItemDrop">
            <div className="navListItemDropItem">
              <Link to="/code">Interactables</Link>
            </div>

            <div className="navListItemDropItem">
              <Link to="/code#bigProjectSection">Projects</Link>
            </div>

            <div className="navListItemDropItem">
              <Link to="/code#upcomingProjectSection">
                Upcoming Projects
              </Link>
            </div>
          </div>
        </div> */}


        <div className="navListItem">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;