import Image from "next/image";
import Link from "next/link";
import Section from "@/components/shared/Section";
import { buttonClasses } from "@/components/ui/Button";
import { site, stack } from "@/lib/site";

interface Entry {
  role: string;
  company: string;
  period: string;
  desc?: string;
}

const experience: Entry[] = [
  {
    role: "Desktop Application Developer",
    company: "Freelance Projects",
    period: "Jun 2026 to present",
    desc: "Developing a desktop application.",
  },
  {
    role: "Developer for Chrome Extension",
    company: "Freelance Projects",
    period: "May 2025 to present",
    desc: "Building and maintaining a Chrome extension.",
  },
  {
    role: "Fullstack Web Developer",
    company: "Freelance Projects",
    period: "Jan 2023 to present",
    desc: "Building web applications with React, Next.js, and Laravel, and maintaining and improving existing projects.",
  },
  {
    role: "Intern, Information System and Technology Division (STI)",
    company: "PT PLN UID Lampung (Persero)",
    period: "Dec 2025 to Feb 2026",
    desc: "Assisted with system monitoring, data processing, and feature improvements across departments.",
  },
  {
    role: "Coordinator of Assistant Lecturer for Database Systems Course",
    company: "Computer Science, Universitas Lampung",
    period: "Jul 2025 to Dec 2025",
    desc: "Guided students in learning database concepts including relational modeling and SQL, and contributed to creating instructional materials and practical assignments to support hands-on learning.",
  },
  {
    role: "Coordinator of Assistant Lecturer for Data Structures and Algorithms Course",
    company: "Computer Science, Universitas Lampung",
    period: "Feb 2025 to Jun 2025",
    desc: "Assisted students in understanding core data structures and algorithmic problem-solving techniques, while preparing learning resources and evaluation tasks to strengthen analytical and programming skills.",
  },
  {
    role: "Assistant Lecturer for Basic Programming Course",
    company: "Computer Science, Universitas Lampung",
    period: "Aug 2024 to Dec 2024",
    desc: "Instructed more than 40 students in fundamental programming concepts by guiding them in learning C++ from the ground up, as well as developing teaching materials and assignments to assess student understanding.",
  },
];

const otherWork: Entry[] = [
  {
    role: "Freelance Sticker Template Designer",
    company: "Bytedance Capcut",
    period: "Sep 2024 to Dec 2024",
    desc: "Designed 20+ stickers that reflect current market trends and user interests.",
  },
  {
    role: "Student Assistant",
    company: "Winosa Mitra, Bandar Lampung",
    period: "Oct 2024 to Jan 2025",
    desc: "Daily data entry of up to 20 articles and 8 scholarship entries, plus visual content design for promotional and operational needs, in a 4-hour workday, five days a week.",
  },
  {
    role: "Roller Skating Coach",
    company: "Wheeling Academy, Bandar Lampung",
    period: "Aug 2024 to Feb 2025",
    desc: "Trained over 70 children in roller skating techniques, improving their speed, balance, and agility. Conducted progress analysis for each child to track their development and tailor coaching methods.",
  },
  {
    role: "Freelance Graphic Template Creator",
    company: "Bytedance Capcut",
    period: "Apr 2024 to Aug 2024",
    desc: "Designed more than 148 graphic templates, including marketing posters, wallpapers, minimalist designs, and food and beverage promotions.",
  },
  {
    role: "Freelance Video Template Creator",
    company: "Bytedance Capcut",
    period: "Jan 2024 to Feb 2024",
    desc: "Created over 26 video templates, including YouTube intros, outros, and special occasion themes like Valentine's Day.",
  },
];

const education: Entry[] = [
  {
    role: "Bachelor's Degree of Computer Science",
    company: "Lampung University",
    period: "Aug 2023 to present",
    desc: "Cumulative GPA: 3.94/4.00",
  },
  {
    role: "Senior High School",
    company: "SMAN 9 Bandar Lampung",
    period: "2019 to 2022",
    desc: "Active in Pencak Silat",
  },
  {
    role: "Junior High School",
    company: "SMP Muhammadiyah 2 Bandar Lampung",
    period: "2016 to 2019",
    desc: "Active in Science Olympics",
  },
  {
    role: "Elementary School",
    company: "MI Al-Fatah Natar",
    period: "2011 to 2016",
  },
];

const organizations: Entry[] = [
  {
    role: "Members of Badan Khusus",
    company: "Himpunan Mahasiswa Ilmu Komputer",
    period: "2025",
    desc: "Create Website Management System for Badan Khusus.",
  },
  {
    role: "Coordinator of Website Division",
    company: "Computer Science Showdown",
    period: "2025",
    desc: "Create Website for Computer Science Showdown.",
  },
];

function Entries({ items }: { items: Entry[] }) {
  return (
    <ol className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li
          key={`${item.role}-${item.period}`}
          className="grid gap-1 py-6 md:grid-cols-[11rem_1fr] md:gap-8"
        >
          <p className="font-mono text-sm text-muted-foreground">
            {item.period}
          </p>
          <div>
            <h3 className="font-semibold">{item.role}</h3>
            <p className="text-sm text-muted-foreground">{item.company}</p>
            {item.desc && (
              <p className="mt-2 max-w-2xl leading-relaxed">{item.desc}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Section className="py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[12rem_1fr] lg:gap-8">
        <h2 className="font-display text-2xl font-bold">{title}</h2>
        <div>{children}</div>
      </div>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6">
      <Section className="pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card md:max-w-none">
            <Image
              src="/wildan.png"
              alt={site.name}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 384px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-link">{site.role}</p>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Computer Science undergraduate at Lampung University
              (UNILA), specializing in full-stack web development with React,
              Next.js, Laravel, and SQL. One project I&apos;m proudest of is a
              career center platform I built independently, end to end, from
              database design to deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className={buttonClasses({ size: "lg" })}
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className={buttonClasses({ variant: "outline", size: "lg" })}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Block title="Experience">
        <Entries items={experience} />
      </Block>

      <Block title="Stack">
        <dl className="grid gap-8 sm:grid-cols-3">
          {stack.map((group) => (
            <div key={group.title}>
              <dt className="text-sm text-muted-foreground">{group.title}</dt>
              <dd className="mt-2 font-mono text-sm leading-7">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Education">
        <Entries items={education} />
      </Block>

      <Block title="Organizations">
        <Entries items={organizations} />
      </Block>

      <Block title="Other work">
        <Entries items={otherWork} />
      </Block>
    </div>
  );
}
