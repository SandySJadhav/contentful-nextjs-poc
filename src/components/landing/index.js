import Section from "../section";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Landing({ pageData }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Body

      {pageData?.sections?.map(
        section => (
          <Section
            key={section?.sys?.id}
            fields={section?.fields}
            sys={section?.sys}
          />
        )
      )}
    </main>
  );
}