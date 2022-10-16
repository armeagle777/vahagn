import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from './context/DataContext';

const Nav = () => {
    const { search, setSearch } = useData();

    return (
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search'>Search Todos</label>
                <input
                    type='text'
                    id='search'
                    placeholder='Search Todos'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='post'>New Todo</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
