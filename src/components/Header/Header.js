import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';
import { useHistory } from 'react-router';

const Navbar = () => {
	const history = useHistory();
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			<button onclick={() => history.push('/about')}>About</button>
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/signup' activeStyle>
		<button onclick={() => history.push('/signup')}>Sign Up</button>
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavLink to='/signin'>
		<button onclick={() => history.push('/signin')}>Sign In</button></NavLink>
	</Nav>
	</>
);
};

export default Navbar;
