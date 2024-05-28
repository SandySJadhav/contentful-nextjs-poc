import { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const NavigationWithDropdown = ({ label, url, icon }) => (
  <Link href={url} passHref>
    <div tabIndex={0} className="select-none p-4 cursor-pointer flex items-center">
      <Image src={icon} height={20} width={20} alt={label} priority fetchPriority="low" />
      <span className="min-w-10 text-center text-base ml-2">{label}</span>
    </div>
  </Link>
);

const LanguageSelector = ({ options, handleChange }) => (
  <select onChange={handleChange} className="ml-4">
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const Header = ({ headerData }) => {
  const { i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, languages, logo } = headerData?.fields || {};
  const options = languages?.fields?.options || [];

  const menu = items?.map((navItem) => {
    const { label, url, icon } = navItem?.fields || {};
    return {
      label,
      url,
      icon: icon?.fields?.file?.url ? "https:" + icon.fields.file.url : "",
    };
  }) || [];

  const handleLanguageSelection = (event) => i18n.changeLanguage(event.target.value);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header px-4 sm:px-12">
      <div className="h-[70px] flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleMobileMenu} className="sm:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {logo?.fields?.image?.fields?.file?.url && (
            <Link href="/">
              <div className="flex items-center ml-4 sm:ml-0">
                <Image alt="Logo" width={40} height={40} src={"https:" + logo.fields.image.fields.file.url} priority />
              </div>
            </Link>
          )}
        </div>
        <div className="hidden sm:flex items-center">
          {menu.map((menuItem) => (
            <NavigationWithDropdown key={menuItem.label} {...menuItem} />
          ))}
          <LanguageSelector options={options} handleChange={handleLanguageSelection} />
        </div>
        <div className="flex items-center sm:hidden">
          <LanguageSelector options={options} handleChange={handleLanguageSelection} className="mr-4" />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-start p-4">
          {menu.map((menuItem) => (
            <NavigationWithDropdown key={menuItem.label} {...menuItem} />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;