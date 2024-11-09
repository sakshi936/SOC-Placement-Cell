import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Allumani = () => {
  return (
    <section className='p-y p-x flex justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h2 className='text-heading'>Allumani</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dicta iure aut. Aliquid reiciendis laboriosam, reprehenderit obcaecati voluptas quaerat quibusdam, quis molestiae, blanditiis ab libero exercitationem eos laudantium. Odit alias pariatur asperiores fugiat quae incidunt eum dolores eveniet officiis non, at sunt debitis laudantium sed nihil natus hic possimus aut voluptate aspernatur nostrum dolore! Voluptatum, ad. Similique perspiciatis sequi a illo ab, maxime magnam, possimus minus placeat delectus at. Quae ab harum, earum et excepturi placeat at unde dicta ex delectus perferendis neque, molestias voluptas tenetur ea modi distinctio pariatur, repellendus reprehenderit omnis! Suscipit dignissimos quod repudiandae similique nam aliquid? Hic esse quos minus, non voluptates culpa veritatis saepe autem est voluptatibus quidem. Neque possimus, facere accusamus dolorum totam harum officiis magni perspiciatis amet vero voluptates iusto, suscipit, praesentium nihil repellendus? Amet laudantium ut quaerat provident, inventore consequatur fugiat blanditiis obcaecati exercitationem iure porro, voluptatibus totam quis at asperiores id quisquam accusantium, voluptatem sapiente deleniti similique est veniam neque! Doloremque perferendis maiores debitis culpa corporis fugit eligendi fuga nobis, aut nostrum eius inventore quam iure ut, at dolorem libero asperiores temporibus dolores provident. Praesentium earum suscipit neque deleniti, molestiae rem ad vitae laborum officia animi sequi perferendis sunt ex minima?</p>
        <Link href="/alumni">
          <Button>
            More...
          </Button>
        </Link>
      </div>
    </section>
  )
}
