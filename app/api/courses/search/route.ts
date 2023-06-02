import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (query === null) {
    return NextResponse.json(courses);
  }

  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLocaleLowerCase());
  });

  return NextResponse.json(filteredCourses);
}
