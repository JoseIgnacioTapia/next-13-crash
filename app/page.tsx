"use client";
import { useState, useEffect } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import { CourseArray } from "./components/Courses";

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
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
