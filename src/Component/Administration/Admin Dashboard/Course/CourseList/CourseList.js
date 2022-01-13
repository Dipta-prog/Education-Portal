import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const CourseList = () => {

    const [allCourse, setAllCourse] = useState([]);



    useEffect(() => {
        const url = 'https://education-portal-1.herokuapp.com/course/allCourse'
        fetch(url)
            .then(res => res.json())
            .then(data => setAllCourse(data.result))
            .catch(err => console.log(err))
    }, [allCourse])


    return (
        <div>
            <h2 className="page-title my-5 text-center">All Course</h2>
            <div className="row">
                {
                    allCourse.map(course => <SingleCourse key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default CourseList;