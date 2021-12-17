import React, { useContext } from 'react';
import Course from './subcomponents/Course'
import { StoreContext } from '../../store/StoreProvider'
import bemCssModules from 'bem-css-modules';
import { default as CoursesStyles } from './Courses.module.scss';
const style = bemCssModules(CoursesStyles)
const Courses = () => {
    const { courses } = useContext(StoreContext);
    const coursesElements = courses.map(course => <Course key={course.id} {...course} />)
    // const coursesElements = null
    return (
        <section className={style()}>
            <h2 className={style('title')}></h2>
            <ul className={style('list')}>
                {coursesElements}
            </ul>
        </section>
    );
}

export default Courses;