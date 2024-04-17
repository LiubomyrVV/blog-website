import { useEffect, useReducer, useState } from 'react'
import styles from './burger.module.css'
import { NavLink } from 'react-router-dom'
import { PAGES } from '../../router/routes'
import burgerReducer, { BURGER_ACTIONS, initialBurgerState } from '../../reducers/burgerReducer'
import { debounce } from '../../functions/functions'
import { screen } from '../../functions/Screen'



const AUTOCLOSE_DELAY = 0;

export const Burger = ({ setIsInputActive, isInputActive }) => {
    const [{ isOpen }, dispatch] = useReducer(burgerReducer, initialBurgerState)

    const autoclose = debounce(() => {
        dispatch(BURGER_ACTIONS.CLOSE)
    }, AUTOCLOSE_DELAY)

    useEffect(() => {
        if (isOpen) setIsInputActive(false)
    }, [isOpen])

    useEffect(() => {
        if (isOpen) autoclose()
    }, [dispatch])

    useEffect(() => {
        if (isOpen) screen.disableScroll()
        else screen.enableScroll()
    }, [isOpen])

 
    const handleCheckboxChange = (event) => {
        dispatch(event.target.checked ? BURGER_ACTIONS.OPEN : BURGER_ACTIONS.CLOSE)
    }
    return (
        <div className={styles.burger}

        >
            <label className={styles.label} htmlFor="check"

            >
                <input
                    className={styles.input}
                    type="checkbox" id="check"
                    checked={isOpen}
                    onChange={handleCheckboxChange}
                />

                <span className={styles.span} style={{
                    background: isOpen ? 'white' : null,
                }} ></span>
                <span className={styles.span} style={{
                    background: isOpen ? 'white' : null
                }}></span>
                <span className={styles.span} style={{
                    background: isOpen ? 'white' : null
                }}></span>
            </label>
            <div className={styles.burgerList}
                style={{
                    display: isOpen ? 'grid' : 'hidden',
                    transform: isOpen ? 'translateX(50%)' : 'translateX(100%)',

                }}
            >

                <ul className={styles.list}>
                    <li onClick={() => {
                        screen.disableScroll()
                        setIsInputActive(true)
                        dispatch(BURGER_ACTIONS.CLOSE)
                    }} className={styles.search}> 
                    
                       <div style={{color: '#fff', fontSize: '32px', marginLeft: '30px'}}><span style={{color: 'rgb(34, 9, 92)'}}>S</span>earch</div></li>

                    <li><NavLink to={PAGES.HOME} style={({ isActive }) => {
                        return { color: isActive ? '#22095c' : null }
                    }}>Home</NavLink></li>
                    <li><NavLink to={PAGES.BLOG} style={({ isActive }) => {
                        return { color: isActive ? '#22095c' : null }
                    }}>Blog</NavLink></li>

                    <li><NavLink to={PAGES.ABOUT} style={({ isActive }) => {
                        return { color: isActive ? '#22095c' : null }
                    }}>About</NavLink></li>

                    <li><NavLink to={PAGES.CONTACT} style={({ isActive }) => {
                        return { color: isActive ? '#22095c' : null }
                    }}>Contact Us</NavLink></li>
                </ul>
            </div>
        </div>

    )
}
