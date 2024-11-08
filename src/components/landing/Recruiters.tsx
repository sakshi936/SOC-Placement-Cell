import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export const Recruiters = () => {
  return (
    <section className='p-y p-x flex justify-center items-center h-screen'>
      <div className='w-full flex flex-col gap-24'>
        <h2 className='text-heading'>Our Top Recruiters</h2>

        <div className='flex flex-wrap gap-12 justify-center'>
          {images.map((element) => <>
            <Image
              src={element}
              alt=''
              height={100}
              width={100}
              className='aspect-square object-cover rounded-full'
            />
          </>
          )
          }
        </div>

        <Link href="/recruiters" className='flex justify-center'>
          <Button>See More...</Button>
        </Link>
      </div>
    </section>
  )
}

const images = [
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg",
  "/test.jpg"
]
