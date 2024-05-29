import Image from "next/image";
import RichText from "../richText";

export default function FiftyFiftyContent({ fields }) {
  const getContents = (content) => {
    return content?.fields?.image ? <Image
      src={"https:" + content?.fields?.image?.fields?.file?.url}
      blurDataURL={`https:${content?.fields?.image?.fields?.file?.url}?fm=avif&q=1`}
      placeholder='blur'
      quality={100}
      height={100}
      priority
      width={100}
      layout='responsive'
      className='object-cover !h-full'
      alt="fifty fifty image"
    /> : <div className="p-10">
      <RichText text={content?.fields?.text} />
    </div>
  }
  return <section className="h-96">
    <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
      <div className='grid col-span-1 items-center'>
        <div>
          {getContents(fields.leftContent)}
        </div>
      </div>
      <div className='grid col-span-1 grow items-center'>
        <div>
          {getContents(fields.rightContent)}
        </div>
      </div>
    </div>
  </section>
}