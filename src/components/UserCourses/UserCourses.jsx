import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import Course from '../Course/Course';
import { StoreContext } from '../../store/StoreProvider';
import { default as UserCoursesStyle } from './UserCourses.module.scss';
const style = bemCssModules(UserCoursesStyle);
const UserCourses = () => {
    const { user, courses } = useContext(StoreContext);
    const buyedCourses = courses.filter(course => user.courses.includes(course.id)).map(course => <Course key={course.id} {...course} />)
    return (
        <section className={style()}>
            <h2 className={style('title')}>Twoje wykupione kursy</h2>
            <ul className={style('list')}>
                {buyedCourses}
            </ul>
        </section>
    );
}

export default UserCourses;