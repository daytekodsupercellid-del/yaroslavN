import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Головна
      </NavLink>
      <NavLink to="/students" className={({ isActive }) => (isActive ? 'active' : '')}>
        Студенти
      </NavLink>
      <NavLink to="/add" className={({ isActive }) => (isActive ? 'active' : '')}>
        Додати студента
      </NavLink>
    </nav>
  );
}

export default Navigation;
