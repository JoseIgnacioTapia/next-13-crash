"use client";
import Link from "next/link";

export interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
  level: string;
}

export type CourseArray = Course[];

function Courses({ courses }: { courses: CourseArray }): JSX.Element {
  return (
    <div className="courses">
      {courses.map((course: Course) => (
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
