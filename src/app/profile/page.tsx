"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { Dashboard } from '@/components/Dashboard';

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string(),
  mobileNo: z.string().min(10).max(10),
  gender: z.enum(["Male", "Female", "Mentally Ill"]),
  sem: z.string(),
  fieldOfExpertiese: z.string(),
  lang: z.string(),
  exp: z.string(),
  resume: z.instanceof(File).refine(file => file.type === "application/pdf", {
    message: "Only PDF files are allowed",
  }),
})

export default function Page() {
  const [userExists, setUserExists] = useState<boolean>(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobileNo: "",
      gender: "Male",
      sem: "",
      fieldOfExpertiese: "",
      lang: "",
      exp: "",
      resume: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  if (userExists) {
    return (
      <>
        <Dashboard/>
      </>
    )
  }

  return (
    <div className='py-8 px-96 bg-blue'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-200 p-7 rounded-lg" >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input required type='text' placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input required type='email' placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobileNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile No.</FormLabel>
                <FormControl>
                  <Input required type='number' placeholder="Mobile No." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <div className="space-y-2 space-x-4">
                    <label>
                      <input
                        type="radio"
                        value="Male"
                        checked={field.value === "Male"}
                        onChange={() => field.onChange("Male")}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Female"
                        checked={field.value === "Female"}
                        onChange={() => field.onChange("Female")}
                      />{" "}
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Mentally Ill"
                        checked={field.value === "Mentally Ill"}
                        onChange={() => field.onChange("Mentally Ill")}
                      />{" "}
                      Mentally Ill
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Semester: </FormLabel>
                <FormControl>
                  <Input required type='number' placeholder="Semester" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fieldOfExpertiese"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Field Of Expertiese :</FormLabel>
                <FormControl>
                  <Input type='text' placeholder="if have multiple experience use , (commas)  to seperate them" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fieldOfExpertiese"
            render={({ field }) => (
              <FormItem>
                <FormLabel>In Which Programming Language are you most fluent :</FormLabel>
                <FormControl>
                  <Input type='text' placeholder="Programming Language" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="exp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Any Previous Experience?:</FormLabel>
                <FormControl>
                  <Input type='text' placeholder="if have multiple experience use , (commas)  to seperate them" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Resume (PDF only){" "}</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.type === "application/pdf") {
                        field.onChange(file);
                      } else {
                        field.onChange(null);
                        alert("Please upload a PDF file.");
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
