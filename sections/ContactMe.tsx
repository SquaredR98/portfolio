"use client";

import React, { useRef } from "react";
import SectionTitle from "../components/SectionTItle";
import { Button, Input, Textarea } from "@nextui-org/react";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    // console.log(form.current)
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    form.current = null;
  };

  return (
    <section id="contact" className="dark:bg-slate-950">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <SectionTitle text="Get In Touch" />
        <div className="grid  grid-cols-1 lg:grid-cols-2 md:py-16">
          <div className="mb-8">
            <p className="dark:font-extralight my-2">Reach out to me if you</p>
            <ul className="dark:font-extralight list-disc pl-6">
              <li>Have an idea for a website?</li>
              <li>Want to translate figma to react?</li>
              <li>Want to consult technologies for your next project?</li>
              <li>Need support for the maintenance of current project?</li>
            </ul>
            <p className="dark:font-extralight my-2 mb-4">
              I would be happy to help you in growing your business.
            </p>
            { /*<div className="flex items-center text-xl my-2">
              <span>
                <IoMdCall className="text-2xl mr-2" />
              </span>
              +91 829 551 9455
            </div> */}
            <div className="flex items-center text-xl my-2">
              <span>
                <MdAlternateEmail className="text-2xl mr-2" />
              </span>
              mail@ravi-ranjan.in
            </div>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="text-sm dark:text-slate-600 dark:text-extralight">
              Form is under development. Will be active in few days. Use the
              details provided to contact.
            </p>
            <form onSubmit={(e) => sendEmail(e)} ref={form}>
              <Input
                name="name"
                label="Full Name"
                radius="sm"
                className="dark:border-slate-950 my-4"
                variant="bordered"
              />
              <Input
                name="to_name"
                label="Full Name"
                radius="sm"
                className="dark:border-slate-950 my-4 hidden"
                variant="bordered"
                value="Ravi"
              />
              <Input
                name="email"
                label="Email"
                radius="sm"
                className="dark:bg-slate-950 my-4"
                variant="bordered"
              />
              <Input
                name="subject"
                label="Subject"
                radius="sm"
                className="dark:bg-slate-950 my-4"
                variant="bordered"
              />
              <Textarea
                name="message"
                label="Add Message"
                radius="sm"
                className="dark:bg-slate-950 my-4"
                variant="bordered"
              />
              <Button
                radius="sm"
                className="w-full dark:bg-slate-900 text-xl dark:font-extralight"
                variant="bordered"
                type="submit"
              >
                Send Email
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
