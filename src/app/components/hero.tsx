import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./button";

export const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center bg-black text-white pt-[100px] min-h-[540px] md:min-h-[600px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-bg.jpg")' }} />

      <div className="overlay absolute inset-0" style={{ backgroundColor: 'rgba(90, 105, 140, 0.8)' }}></div>

      <div className="container mx-auto px-4">
        <div className="relative w-full flex flex-col">
          <div className="flex mb-8">
            <Image src="/trust-pilot.svg" alt="Trustpilot Rating" width={342} height={32} />
          </div>

          <h1 className="text-[38px] md:text-[55px] lg:text-[77px] leading-[38px] md:leading-[55px] lg:leading-[80px] font-oswald font-bold mb-4">
            BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP
          </h1>

          <div className="max-w-[600px]">
            <p className="mb-7 text-lg md:text-xl">
              Join our network of 3,000+ garages and dealerships who already offer Bumper to their customers.
            </p>

            <Link href="/partner-register">
              <Button text="Register your interest" className="mb-3" />
            </Link>

            <p className="text-sm">
              Already registered? <a href="#" className="text-green-400 underline">Login</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
