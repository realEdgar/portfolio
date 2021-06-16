import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to="/" className="Profile-Container">
      <h1 className="Logo" >ela.<span>Dev</span></h1>
    </Link>
  );
};
