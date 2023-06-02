"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  link: string;
  level: string;
}

type CourseArray = Course[];

async function fetchCourses(): Promise<CourseArray> {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

function Courses(): JSX.Element {
  const [coursesArr, setCoursesArr] = useState<CourseArray | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const courses = await fetchCourses();
        console.log(courses);
        setCoursesArr(courses);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="courses">
      {coursesArr?.map((course) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Courses;
