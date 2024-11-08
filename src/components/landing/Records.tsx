import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export const Records = () => {
    return (
        <section className='p-x p-y'>
            <div className='flex flex-col items-center'>
                <h2 className='text-heading'>
                    Our Top Students
                </h2>

                <div className='flex flex-wrap gap-5 justify-center'>
                    {data.map((item, index) =>
                        <Card key={index} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="iguana"
                                height="140"
                                image={item.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.batch}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.company}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.package}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button>Linkedin</Button>
                            </CardActions>
                        </Card>)}
                </div>
            </div>

            <Link href="/records" className='mt-12 flex justify-center items-center'>
                <Button>
                    See More...
                </Button>
            </Link>
        </section>
    )
}

const data = [
    {
        img: "/test.jpg",
        name: "Test",
        batch: "2025-26",
        package: "55LPA",
        company: "tcs"
    },
    {
        img: "/test.jpg",
        name: "Test",
        batch: "2025-26",
        package: "55LPA",
        company: "tcs"
    },
    {
        img: "/test.jpg",
        name: "Test",
        batch: "2025-26",
        package: "55LPA",
        company: "tcs"
    },
    {
        img: "/test.jpg",
        name: "Test",
        batch: "2025-26",
        package: "55LPA",
        company: "tcs"
    },
    {
        img: "/test.jpg",
        name: "Test",
        batch: "2025-26",
        package: "55LPA",
        company: "tcs"
    },
    {
        img: "/test.jpg",
        name: "Test",
        batch: "2025-26",
        package: "55LPA",
        company: "tcs"
    }
];