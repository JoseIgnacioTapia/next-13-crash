"use client";
import { useState } from "react";
import { CourseArray } from "./Courses";

function CoursesSearch({
  getSearchResults,
}: {
  getSearchResults: (courses: CourseArray) => void;
}): JSX.Element {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default CoursesSearch;
