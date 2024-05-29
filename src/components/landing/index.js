import classNames from "classnames";
import Section from "../section";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Landing({ pageData }) {
  return (
    <main
      className={classNames('flex flex-col py-24 px-10', inter.className)}
    >
      {pageData?.sections?.map(section => (<Section key={section?.sys?.id} fields={section?.fields} sys={section?.sys} />))}
    </main>
  );
}