import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
    return (
        <section className='p-x p-y'>
            <div className='flex flex-col items-center'>
                <h2 className='text-heading'>
                    About
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus repudiandae optio alias nobis dolor iste libero aperiam itaque delectus obcaecati impedit molestiae, consectetur hic esse officiis quo facilis veritatis animi culpa praesentium beatae atque est laboriosam. Magni reiciendis, accusamus iusto ipsa dignissimos, cum fugit at dolores incidunt molestias quidem. Earum atque voluptate cupiditate. Repellat beatae, debitis incidunt quisquam perferendis doloribus eveniet libero quod soluta rem corrupti accusamus! Quidem minima repudiandae expedita provident placeat fugiat accusamus odit quia explicabo rem delectus maiores quisquam repellendus ullam iusto laboriosam, voluptas suscipit minus aut molestias dignissimos vel consequatur. Repudiandae unde neque facilis laboriosam! <Link className='underline text-blue-500' href="/about">Know more....</Link>
                </p>
                <div className='flex justify-center items-center m-y'>
                    <Carousel className="w-1/2 m-y">
                        <CarouselContent>
                            {imgArray.map((source, index) => (
                                <CarouselItem key={index} className=''>
                                    <div className="p-1 h-full">
                                        <Card className='h-full'>
                                            <CardContent className="flex items-center justify-center p-6 h-full">
                                                {source !== "" ? <Image
                                                    src={source}
                                                    alt=''
                                                    height={100}
                                                    width={100}
                                                    className='w-full'
                                                /> :
                                                <Link href="/about" className='h-full text-heading text-center content-center text-slate-400'>
                                                    Know More
                                                </Link>
                                                }
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

const imgArray = [
    "/test.jpg",
    "/test.jpg",
    "/test.jpg",
    "/test.jpg",
    ""
]