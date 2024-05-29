
export default function FiftyFiftyContent() {
  return <section >
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='grid col-span-1 order-first lg:order-none'>
        Left
      </div>
      <div className='grid col-span-1 grow items-center order-first lg:order-none'      >
        Right
      </div>
    </div>
  </section>
}