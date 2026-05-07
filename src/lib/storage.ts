export interface University {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  established: string;
  students: string;
  ranking: string;
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  universityId: string;
  universityName: string;
  level: string;
  fee: string;
  description: string;
}

const UNIVERSITIES_KEY = "study-albania-universities";
const COURSES_KEY = "study-albania-courses";

// --- Default seed data ---
const defaultUniversities: University[] = [
  {
    id: "1",
    name: "University of Tirana",
    location: "Tirana, Albania",
    description:
      "The largest and oldest university in Albania, offering a wide range of undergraduate and graduate programs across multiple faculties.",
    image: "/universities/tirana.png",
    established: "1957",
    students: "30,000+",
    ranking: "#1 in Albania",
  },
  {
    id: "2",
    name: "Polytechnic University of Tirana",
    location: "Tirana, Albania",
    description:
      "Albania's leading technical university specializing in engineering, architecture, and applied sciences with modern research facilities.",
    image: "/universities/tirana.png",
    established: "1951",
    students: "12,000+",
    ranking: "#2 in Albania",
  },
  {
    id: "3",
    name: "University of Arts Tirana",
    location: "Tirana, Albania",
    description:
      "Premier institution for fine arts, music, and performing arts education in Albania with internationally recognized programs.",
    image: "/universities/arts.webp",
    established: "1966",
    students: "3,500+",
    ranking: "Top Arts School",
  },
  {
    id: "4",
    name: "Epoka University",
    location: "Tirana, Albania",
    description:
      "A prestigious private university offering English-taught programs in engineering, economics, law, and architecture.",
    image: "/universities/epoka.png",
    established: "2007",
    students: "5,000+",
    ranking: "Top Private University",
  },
  {
    id: "5",
    name: "University of Vlora",
    location: "Vlora, Albania",
    description:
      "A public university located in the coastal city of Vlora, known for its marine sciences and tourism management programs.",
    image: "/universities/arts.webp",
    established: "1994",
    students: "8,000+",
    ranking: "#5 in Albania",
  },
  {
    id: "6",
    name: "Aleksandër Moisiu University",
    location: "Durrës, Albania",
    description:
      "Located in the port city of Durrës, this public university excels in business administration, education, and professional studies.",
    image: "/universities/durres.png",
    established: "2005",
    students: "10,000+",
    ranking: "#6 in Albania",
  },
];

const defaultCourses: Course[] = [
  {
    id: "1",
    name: "Computer Science",
    duration: "4 Years",
    universityId: "1",
    universityName: "University of Tirana",
    level: "Bachelor",
    fee: "€1,500/year",
    description: "Comprehensive program covering algorithms, AI, software engineering, and data science.",
  },
  {
    id: "2",
    name: "Civil Engineering",
    duration: "4 Years",
    universityId: "2",
    universityName: "Polytechnic University of Tirana",
    level: "Bachelor",
    fee: "€1,800/year",
    description: "Study structural design, construction management, and sustainable infrastructure development.",
  },
  {
    id: "3",
    name: "Business Administration",
    duration: "3 Years",
    universityId: "4",
    universityName: "Epoka University",
    level: "Bachelor",
    fee: "€3,000/year",
    description: "English-taught program covering management, marketing, finance, and entrepreneurship.",
  },
  {
    id: "4",
    name: "Fine Arts",
    duration: "4 Years",
    universityId: "3",
    universityName: "University of Arts Tirana",
    level: "Bachelor",
    fee: "€1,200/year",
    description: "Explore painting, sculpture, graphic design, and contemporary art practices.",
  },
  {
    id: "5",
    name: "Marine Biology",
    duration: "3 Years",
    universityId: "5",
    universityName: "University of Vlora",
    level: "Bachelor",
    fee: "€1,400/year",
    description: "Study marine ecosystems, oceanography, and aquatic conservation along Albania's coast.",
  },
  {
    id: "6",
    name: "International Relations",
    duration: "3 Years",
    universityId: "1",
    universityName: "University of Tirana",
    level: "Bachelor",
    fee: "€1,500/year",
    description: "Analyze global politics, diplomacy, and international organizations.",
  },
  {
    id: "7",
    name: "Architecture",
    duration: "5 Years",
    universityId: "2",
    universityName: "Polytechnic University of Tirana",
    level: "Master Integrated",
    fee: "€2,000/year",
    description: "A five-year integrated program covering architectural design, urban planning, and sustainability.",
  },
  {
    id: "8",
    name: "Tourism Management",
    duration: "3 Years",
    universityId: "6",
    universityName: "Aleksandër Moisiu University",
    level: "Bachelor",
    fee: "€1,300/year",
    description: "Learn hospitality, tourism marketing, and destination management in Albania's tourism hub.",
  },
];

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function seedIfEmpty(): void {
  if (!isBrowser()) return;
  if (!localStorage.getItem(UNIVERSITIES_KEY)) {
    localStorage.setItem(UNIVERSITIES_KEY, JSON.stringify(defaultUniversities));
  }
  if (!localStorage.getItem(COURSES_KEY)) {
    localStorage.setItem(COURSES_KEY, JSON.stringify(defaultCourses));
  }
}

export function getUniversities(): University[] {
  if (!isBrowser()) return [];
  seedIfEmpty();
  const data = localStorage.getItem(UNIVERSITIES_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveUniversities(universities: University[]): void {
  if (!isBrowser()) return;
  localStorage.setItem(UNIVERSITIES_KEY, JSON.stringify(universities));
}

export function addUniversity(university: Omit<University, "id">): University {
  const universities = getUniversities();
  const newUni: University = {
    ...university,
    id: Date.now().toString(),
  };
  universities.push(newUni);
  saveUniversities(universities);
  return newUni;
}

export function deleteUniversity(id: string): void {
  const universities = getUniversities().filter((u) => u.id !== id);
  saveUniversities(universities);
  // Also remove courses linked to this university
  const courses = getCourses().filter((c) => c.universityId !== id);
  saveCourses(courses);
}

export function getCourses(): Course[] {
  if (!isBrowser()) return [];
  seedIfEmpty();
  const data = localStorage.getItem(COURSES_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCourses(courses: Course[]): void {
  if (!isBrowser()) return;
  localStorage.setItem(COURSES_KEY, JSON.stringify(courses));
}

export function addCourse(course: Omit<Course, "id">): Course {
  const courses = getCourses();
  const newCourse: Course = {
    ...course,
    id: Date.now().toString(),
  };
  courses.push(newCourse);
  saveCourses(courses);
  return newCourse;
}

export function deleteCourse(id: string): void {
  const courses = getCourses().filter((c) => c.id !== id);
  saveCourses(courses);
}
