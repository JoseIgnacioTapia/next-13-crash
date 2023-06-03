"use client";
import { useState, useEffect } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import { CourseArray } from "./components/Courses";
import CoursesSearch from "./components/CoursesSearch";

const HomePage: React.FC = () => {
  const [courses, setCourses] = useState<CourseArray>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      console.log(data);

      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To Traversy Media</h1>
      <CoursesSearch
        getSearchResults={(results: CourseArray) => setCourses(results)}
      />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
