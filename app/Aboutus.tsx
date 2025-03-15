"use client";
import TimelineSlider from "./TimeLineSlider";
// pages/about.tsx
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
// Team member type
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const About: FC = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Emma Rodriguez",
      role: "Founder & Head Roaster",
      bio: "With over 15 years of experience in specialty coffee, Emma founded Aromatic Blends with a mission to bring ethically sourced, expertly roasted coffee to discerning coffee lovers.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Coffee Sourcing Director",
      bio: "David travels the world's coffee regions to build direct relationships with farmers and cooperatives, ensuring we source only the highest quality beans while supporting sustainable practices.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Master Barista & Educator",
      bio: "Sarah leads our training programs and develops brewing guides to help our customers get the most from every cup. Her passion for coffee education has built a community of informed coffee enthusiasts.",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Head>
        <title>About Us | Aromatic Blends</title>
        <meta
          name="description"
          content="Learn about our coffee journey, our team, and our commitment to quality and sustainability"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover">
            <Image
              src="https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&h=1080&q=80"
              alt="Coffee roasting process"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            From a simple cart at the local farmers&apos; market to a global
            coffee brand, our journey has been guided by one principle:
            exceptional coffee, ethically sourced.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              At Aromatic Blends, we believe that exceptional coffee is a
              journey from seed to cup. We&apos;re committed to sourcing the
              finest beans through ethical practices, expertly roasting in small
              batches to preserve unique flavor profiles, and educating our
              community to appreciate the art and science of coffee.
            </p>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              Our mission extends beyond serving great coffee—we strive to
              create positive impact at every step in the coffee supply chain,
              from supporting sustainable farming practices to providing fair
              compensation to coffee growers and creating an inclusive coffee
              community.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-amber-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600 text-center">
                We&apos;re committed to environmentally responsible practices
                across our business, from supporting sustainable farming to
                minimizing our carbon footprint with eco-friendly packaging.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-amber-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Fair Trade
              </h3>
              <p className="text-gray-600 text-center">
                We build direct relationships with farmers to ensure fair
                compensation and support community development projects in
                coffee-growing regions around the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-amber-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Quality
              </h3>
              <p className="text-gray-600 text-center">
                We never compromise on quality, from selective bean sourcing to
                precise roasting profiles and rigorous cupping standards that
                ensure every batch meets our exacting standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The passionate coffee experts behind your favorite blends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-64 relative">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={member.image}
                    alt="Sarah Johnson"
                    fill
                    style={{ objectFit: "cover" }}
                    // other props if any
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-amber-700 font-medium">{member.role}</p>
                <p className="mt-3 text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TimelineSlider />
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Certifications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We&apos;re proud to meet the highest standards in the coffee
            industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-amber-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">USDA Organic</h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-24 w-24 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-amber-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Fair Trade Certified
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-24 w-24 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-amber-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Rainforest Alliance
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-24 w-24 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-amber-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Carbon Neutral</h3>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Experience the Difference
          </h2>
          <p className="mt-4 text-xl text-amber-100">
            Join our coffee community and discover why coffee lovers choose
            Aromatic Blends.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-white px-6 py-3 rounded-md text-amber-800 font-semibold hover:bg-amber-100 transition duration-300 shadow-lg">
              Shop Our Collection
            </button>
            <button className="ml-4 bg-transparent px-6 py-3 rounded-md text-white border-2 border-white font-semibold hover:bg-white hover:text-amber-900 transition duration-300">
              Visit Our Café
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};
export default About;
