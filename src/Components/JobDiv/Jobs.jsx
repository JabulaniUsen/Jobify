import React, { useState } from 'react';
import {
  AiOutlineSearch,
  AiOutlineCloseCircle,
  AiTwotoneHome,
} from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../../assets/ali.png';
import amazon from '../../assets/amazon.png';
import ig from '../../assets/ig.png';
import linkedin from '../../assets/linkedin.png';
import micros from '../../assets/microsoft.png';
import sony from '../../assets/sony.png';

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Frontend Engineer',
    time: 'Now',
    location: 'London, UK',
    desc: 'Develop user-friendly and responsive web applications using modern frontend technologies.',
    company: 'Alibaba Group'
  },
  {
    id: 2,
    image: amazon,
    title: 'Flutter Mobile App Developer',
    time: 'Now',
    location: 'New York City, USA',
    desc: 'Design and build cross-platform mobile applications using Flutter framework for a seamless user experience.',
    company: 'Amazon'
  },
  {
    id: 3,
    image: sony,
    title: 'Java Developer',
    time: 'Now',
    location: 'Toronto, Canada',
    desc: 'Create robust and efficient Java-based software solutions and applications.',
    company: 'Sony Tech'
  },
  {
    id: 4,
    image: linkedin,
    title: 'Golang Engineer',
    time: 'Now',
    location: 'California, USA',
    desc: 'Develop high-performance applications using the Go programming language (Golang).',
    company: 'LinkedIn'
  },
  {
    id: 5,
    image: sony,
    title: 'Backend Engineer',
    time: 'Now',
    location: 'Lagos, Nigeria',
    desc: 'Design and implement server-side systems and APIs for various applications.',
    company: 'Sony Tech'
  },
  {
    id: 6,
    image: ig,
    title: 'Product Designer',
    time: 'Now',
    location: 'Chicago, USA',
    desc: 'Create innovative and user-centric product designs for a leading technology company.',
    company: 'Meta'
  },
  {
    id: 7,
    image: logo1,
    title: 'Copy Writer',
    time: 'Now',
    location: 'Hong Kong, China',
    desc: 'Craft compelling and engaging written content for marketing and advertising purposes.',
    company: 'Alibaba Group'
  },
  {
    id: 8,
    image: amazon,
    title: 'Product Manager',
    time: 'Now',
    location: 'Miami, USA',
    desc: 'Lead product development and manage the entire product lifecycle for various projects.',
    company: 'Amazon'
  },
  {
    id: 9,
    image: logo1,
    title: 'DevOps Engineer',
    time: 'Now',
    location: 'Shanghai, China',
    desc: 'Implement DevOps best practices to ensure the reliability and scalability of software applications.',
    company: 'Alibaba Group'
  },
  {
    id: 10,
    image: micros,
    title: 'Frontend Engineer',
    time: 'Now',
    location: 'London, UK',
    desc: 'Collaborate with a dynamic team to create stunning and intuitive user interfaces.',
    company: 'Microsoft'
  },
  {
    id: 11,
    image: logo1,
    title: 'Data Scientist',
    time: 'Now',
    location: 'Beijing, China',
    desc: 'Analyze large datasets to extract valuable insights and drive data-driven decision-making.',
    company: 'Alibaba Group'
  },
  {
    id: 12,
    image: amazon,
    title: 'Software Engineer',
    time: 'Now',
    location: 'Seattle, USA',
    desc: 'Develop software solutions and contribute to the growth of a global e-commerce giant.',
    company: 'Amazon'
  },
  {
    id: 13,
    image: sony,
    title: 'UI/UX Designer',
    time: 'Now',
    location: 'Los Angeles, USA',
    desc: 'Create visually appealing and user-friendly interfaces for digital products and services.',
    company: 'Sony Tech'
  },
  {
    id: 14,
    image: linkedin,
    title: 'Machine Learning Engineer',
    time: 'Now',
    location: 'San Francisco, USA',
    desc: 'Build machine learning models and algorithms for cutting-edge technology solutions.',
    company: 'LinkedIn'
  },
  {
    id: 15,
    image: sony,
    title: 'Database Administrator',
    time: 'Now',
    location: 'Johannesburg, South Africa',
    desc: 'Manage and optimize databases to ensure data integrity and availability.',
    company: 'Sony Tech'
  },
  {
    id: 16,
    image: ig,
    title: 'Content Strategist',
    time: 'Now',
    location: 'New Delhi, India',
    desc: 'Develop content strategies to enhance brand presence and engage the audience effectively.',
    company: 'Meta'
  },
  {
    id: 17,
    image: logo1,
    title: 'Network Engineer',
    time: 'Now',
    location: 'Singapore',
    desc: 'Design and maintain network infrastructures for seamless data communication.',
    company: 'Alibaba Group'
  },
  {
    id: 18,
    image: amazon,
    title: 'Cybersecurity Analyst',
    time: 'Now',
    location: 'London, UK',
    desc: 'Protect and secure critical digital assets by monitoring and analyzing cybersecurity threats.',
    company: 'Amazon'
  },
  {
    id: 19,
    image: logo1,
    title: 'Cloud Solutions Architect',
    time: 'Now',
    location: 'Berlin, Germany',
    desc: 'Architect cloud-based solutions to meet business requirements and ensure scalability.',
    company: 'Alibaba Group'
  },
  {
    id: 20,
    image: sony,
    title: 'Full-stack Developer',
    time: 'Now',
    location: 'Tokyo, Japan',
    desc: 'Develop both front-end and back-end components for web applications and software systems.',
    company: 'Sony Tech'
  },
  // Additional 20 job listings with different titles and details
  {
    id: 21,
    image: amazon,
    title: 'iOS Mobile App Developer',
    time: 'Now',
    location: 'San Jose, USA',
    desc: 'Design and develop native iOS applications to provide a seamless mobile experience.',
    company: 'Amazon'
  },
  {
    id: 22,
    image: linkedin,
    title: 'Data Analyst',
    time: 'Now',
    location: 'Austin, USA',
    desc: 'Analyze data to provide valuable insights and support data-driven decision-making processes.',
    company: 'LinkedIn'
  },
  {
    id: 23,
    image: logo1,
    title: 'Digital Marketing Specialist',
    time: 'Now',
    location: 'Paris, France',
    desc: 'Plan and execute digital marketing campaigns to promote products and services.',
    company: 'Alibaba Group'
  },
  {
    id: 24,
    image: ig,
    title: 'UI/UX Researcher',
    time: 'Now',
    location: 'Sydney, Australia',
    desc: 'Conduct user research and usability studies to improve user interface and user experience.',
    company: 'Meta'
  },
  {
    id: 25,
    image: sony,
    title: 'Quality Assurance Tester',
    time: 'Now',
    location: 'Moscow, Russia',
    desc: 'Test and ensure the quality and functionality of software applications and systems.',
    company: 'Sony Tech'
  },
  {
    id: 26,
    image: logo1,
    title: 'Business Analyst',
    time: 'Now',
    location: 'Toronto, Canada',
    desc: 'Analyze business processes and requirements to recommend effective solutions and improvements.',
    company: 'Alibaba Group'
  },
  {
    id: 27,
    image: micros,
    title: 'Cloud Engineer',
    time: 'Now',
    location: 'Dubai, UAE',
    desc: 'Architect and manage cloud infrastructures to ensure scalability and reliability.',
    company: 'Microsoft'
  },
  {
    id: 28,
    image: amazon,
    title: 'AI/ML Research Scientist',
    time: 'Now',
    location: 'Zurich, Switzerland',
    desc: 'Conduct research in artificial intelligence and machine learning to drive innovation.',
    company: 'Amazon'
  },
  {
    id: 29,
    image: linkedin,
    title: 'Social Media Manager',
    time: 'Now',
    location: 'Los Angeles, USA',
    desc: 'Manage social media accounts and create engaging content to boost online presence.',
    company: 'LinkedIn'
  },
  {
    id: 30,
    image: logo1,
    title: 'Network Security Specialist',
    time: 'Now',
    location: 'Singapore',
    desc: 'Implement security measures to protect network infrastructure from cyber threats.',
    company: 'Alibaba Group'
  },
  {
    id: 31,
    image: amazon,
    title: 'Frontend Developer',
    time: 'Now',
    location: 'Berlin, Germany',
    desc: 'Create responsive and visually appealing web applications using front-end technologies.',
    company: 'Amazon'
  },
  {
    id: 32,
    image: sony,
    title: 'System Administrator',
    time: 'Now',
    location: 'Mumbai, India',
    desc: 'Administer and maintain IT systems and networks to ensure optimal performance.',
    company: 'Sony Tech'
  },
  {
    id: 33,
    image: ig,
    title: 'Content Creator',
    time: 'Now',
    location: 'Rio de Janeiro, Brazil',
    desc: 'Produce and edit multimedia content for online platforms and social media.',
    company: 'Meta'
  },
  {
    id: 34,
    image: logo1,
    title: 'UX Designer',
    time: 'Now',
    location: 'Seoul, South Korea',
    desc: 'Design intuitive user experiences and interfaces to enhance product usability.',
    company: 'Alibaba Group'
  },
  {
    id: 35,
    image: amazon,
    title: 'E-commerce Manager',
    time: 'Now',
    location: 'London, UK',
    desc: 'Oversee and optimize e-commerce operations to drive online sales and growth.',
    company: 'Amazon'
  },
  {
    id: 36,
    image: linkedin,
    title: 'Software Architect',
    time: 'Now',
    location: 'San Francisco, USA',
    desc: 'Architect and design software solutions to meet business and technical requirements.',
    company: 'LinkedIn'
  },
  {
    id: 37,
    image: sony,
    title: 'Cybersecurity Consultant',
    time: 'Now',
    location: 'Berlin, Germany',
    desc: 'Consult and implement cybersecurity strategies to protect organizations from cyber threats.',
    company: 'Sony Tech'
  },
  {
    id: 38,
    image: logo1,
    title: 'AI/ML Engineer',
    time: 'Now',
    location: 'Shanghai, China',
    desc: 'Develop machine learning models and algorithms for AI-powered applications.',
    company: 'Alibaba Group'
  },
  {
    id: 39,
    image: micros,
    title: 'Cloud Solutions Developer',
    time: 'Now',
    location: 'Paris, France',
    desc: 'Develop and maintain cloud-based solutions to meet specific business needs.',
    company: 'Microsoft'
  },
  {
    id: 40,
    image: amazon,
    title: 'Digital Marketing Analyst',
    time: 'Now',
    location: 'New York City, USA',
    desc: 'Analyze digital marketing campaigns and provide insights to optimize marketing strategies.',
    company: 'Amazon'
  }
];



const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(Data);
  

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filteredJobs = Data.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
    );
    setFilteredData(filteredJobs);
  };
  

  const clearFilters = () => {
    setSearchQuery('');
    setFilteredData(Data);
  };

  return (
    <div>
      <div className="searchDiv grid gp-10 bg-[#f2f3f9] rounded-[10px] p-[3rem]">
        <form action="">
          <div className="firstDiv flex flex-wrap justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
            <div className="flex gap-2 items-center">
              <AiOutlineSearch className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blueColor-500 focus:outline-none w-[100%]"
                placeholder="Search Job Here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                onClick={clearFilters}
              />
            </div>

            

            <p
              className="bg-blueColor cursor-pointer hover:bg-blue-600 h-full p-3 px-10 rounded-[10px] text-white"
              onClick={handleSearch}
            >
              Search
            </p>
          </div>
        </form>

        <div className="secDiv flex flex-wrap items-center gap-10 justify-center my-5">
          {/* Filter options */}
        </div>
      </div>

      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {filteredData.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
