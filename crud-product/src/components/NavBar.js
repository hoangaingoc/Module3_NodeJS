import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <h1>
        <Link to="/products/list">List Products</Link> |
        <Link to="/products/create"> Create Products</Link> |

      </h1>
    </>
  );
}

export default NavBar;