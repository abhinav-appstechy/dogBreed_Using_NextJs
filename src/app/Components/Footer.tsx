import Link from "next/link";

const FooterItem: React.FC<any> = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem: React.FC<any> = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <ul className="space-y-3">
        {items.map((item: any) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks = [
  {
    id: 1,
    title: "Services",
    items: [
      {
        id: 1,
        text: "Breed Matching Service",
        link: "#",
      },
      {
        id: 2,
        text: " Training and Behavior Consultation ",
        link: "#",
      },
      {
        id: 3,
        text: "Consultancy",
        link: "#",
      },
      {
        id: 4,
        text: "Health and Nutrition Advice",
        link: "#",
      },
      {
        id: 5,
        text: "Breeder Directory",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    items: [
      {
        id: 1,
        text: "Home",
        link: "#",
      },
      {
        id: 2,
        text: "About",
        link: "#",
      },
      {
        id: 3,
        text: "Career",
        link: "#",
      },
      {
        id: 4,
        text: "Contact",
        link: "#",
      },
      {
        id: 5,
        text: "Services",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Social",
    items: [
      {
        id: 1,
        text: "Twitter X",
        link: "#",
      },
      {
        id: 2,
        text: "Instagram",
        link: "#",
      },
      {
        id: 3,
        text: "Threds",
        link: "#",
      },
      {
        id: 4,
        text: "Facebook",
        link: "#",
      },
      {
        id: 5,
        text: "Linkedin",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Resources",
    items: [
      {
        id: 1,
        text: "Blog",
        link: "#",
      },
      {
        id: 2,
        text: "Privacy",
        link: "#",
      },
      {
        id: 3,
        text: "Terms",
        link: "#",
      },
      {
        id: 4,
        text: "FAQ",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="border-t border-t-gray-200 dark:border-t-gray-800 py-16 md:py-20 flex flex-col lg:flex-row gap-14 gap-y-16">
          <div className="w-full lg:w-96 space-y-6">
            <Link href="#">
              <svg
                width="25"
                height="30"
                viewBox="0 0 95 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_229_7)">
                  <path
                    d="M10 100C7.34784 100 4.8043 98.9464 2.92893 97.0711C1.05357 95.1957 0 92.6522 0 90L0 40C0 37.3478 1.05357 34.8043 2.92893 32.9289C4.8043 31.0536 7.34784 30 10 30C12.6522 30 15.1957 31.0536 17.0711 32.9289C18.9464 34.8043 20 37.3478 20 40V90C20 92.6522 18.9464 95.1957 17.0711 97.0711C15.1957 98.9464 12.6522 100 10 100Z"
                    fill="#F88FC2"
                  />
                  <path
                    d="M0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20H45C52.9565 20 60.5871 23.1607 66.2132 28.7868C71.8393 34.4129 75 42.0435 75 50C75 57.9565 71.8393 65.5871 66.2132 71.2132C60.5871 76.8393 52.9565 80 45 80H40C37.3478 80 34.8043 81.0536 32.9289 82.9289C31.0536 84.8043 30 87.3478 30 90C30 92.6522 31.0536 95.1957 32.9289 97.0711C34.8043 98.9464 37.3478 100 40 100H45C51.5661 100 58.0679 98.7067 64.1342 96.194C70.2004 93.6812 75.7124 89.9983 80.3553 85.3553C84.9983 80.7124 88.6812 75.2004 91.194 69.1342C93.7067 63.0679 95 56.5661 95 50C95 43.4339 93.7067 36.9321 91.194 30.8658C88.6812 24.7995 84.9983 19.2876 80.3553 14.6447C75.7124 10.0017 70.2004 6.31876 64.1342 3.80602C58.0679 1.29329 51.5661 0 45 0L10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10Z"
                    fill="#10B981"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_229_7">
                    <rect width="95" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              DogBreed
            </Link>
            <p className="max-w-lg">
              Welcome to DogBreed Finder, your go-to resource for discovering
              the ideal dog breed that matches your lifestyle and preferences.
            </p>
          </div>
          <nav className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
            {footerBlocks.map((footerBlock) => (
              <FooterBlockItem key={footerBlock.id} {...footerBlock} />
            ))}
          </nav>
        </div>
      </div>
      <div className="py-3 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
          <p> © 2024 DogBreed. All right reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
