import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';

export default function MenuComponent() {
    return (
        <Menu className='bg-gray-400 z-50' menuButton={<MenuButton>Admin panel</MenuButton>}>
            <Link to={'/add-project'}><MenuItem className='bg-gray-300 w-36 px-3 py-1'>Add project</MenuItem></Link>
            <Link to={'/add-user'}><MenuItem className='bg-gray-300 w-36 px-3 py-1'>Add user</MenuItem></Link>
            <Link to={'/all-contacts'}><MenuItem className='bg-gray-300 w-36 px-3 py-1'>See contacts</MenuItem></Link>
            <Link to={'/all-news-letters'}><MenuItem className='bg-gray-300 w-36 px-3 py-1'>See subscription emails</MenuItem></Link>
        </Menu>
    );
}