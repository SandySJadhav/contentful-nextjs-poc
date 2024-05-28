import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationWithDropdown = ({
  label = "",
  url,
  icon,
}) => {
  const pathname = usePathname();
  return (
    <Link href={url}>
      <div
        key={label || "default"}
        tabIndex={0}
        className="select-none p-4 cursor-pointer"
      >
        <div className="flex items-center justify-start h-full">
          <Image src={icon} height={40} width={40} alt={label} />
          {label && <span
            className={classNames('min-w-10 text-center text-base', {
              'ml-2': icon,
            })}
          >
            {label}
          </span>}
        </div>
      </div>
    </Link>
  );
};

const Header = ({ headerData }) => {
  const menu = [];

  headerData?.fields?.items?.forEach(navItem => {
    const { fields: { label, url, icon } } = navItem || {};
    menu.push({
      label,
      url,
      icon: icon?.fields?.file?.url ? "https:" + icon?.fields?.file?.url : ""
    })
  });

  return <header className='header px-12'>
    <div className="h-[70px]">
      <div className="flex items-center justify-between h-full">
        <Link href="/">
          <div className="flex items-center">
            {/* <Image
              alt="Logo"
              width={100}
              height={40}
              src={'/logo.svg'}
              priority
            /> */}
          </div>
        </Link>
        <div className="flex items-center justify-between p-0">
          {menu.map((menu) => (
            <NavigationWithDropdown key={menu.label} {...menu} />
          ))}
        </div>
      </div>
    </div>
  </header>
}

export default Header;