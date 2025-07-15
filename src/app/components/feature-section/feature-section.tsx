import React from "react";
import Image from "next/image";

import styles from "./feature-section.module.css";
import { Button } from "../button";
import Link from "next/link";

export const FeatureSection = () => {
  return (
    <section className="bg-white text-brand-darkgrey">
      <div className="container mx-auto px-4 py-14">
        <div className={styles.sectionGrid}>
          <div className={styles.sectionContentTitle}>
            <Image src="/logo.svg" alt="Bumper logo" width={75} height={20} />
            <h2 className="font-oswald font-black text-[50px] leading-[50px] md:text-[60px] md:leading-[60px]">PAYLATER</h2>
          </div>

          <div className={styles.sectionImage + " flex self-center items-center justify-center justify-self-center max-w-[375] md:max-w-[490px]"}>
            <Image src="/phone.png" alt="Bumper on mobile" width={490} height={620} />
          </div>

          <div className={styles.sectionContentBody}>
            <p className="text-xl">Give customers more flexibility at checkout, online and in store. Let them spread the cost with interest-free monthly payments.</p>

            <p className="text-brand-orange font-bold text-2xl lg:text-3xl xl:text-[38px]">No risk to your business.<br />No worries for your customers.</p>

            <div className="mb-6">
              <p className="font-bold mb-6">It’s as simple as:</p>

              <ol className="space-y-6">
                <li className="flex gap-2">
                  <div className="flex justify-center items-center w-[24] h-[24] p-2 text-sm font-bold rounded-full bg-brand-orange border border-brand-darkgrey">1</div>
                  <div className="">
                    <div className="font-bold">FIX IT</div>
                    <div>
                      Your customers bring their vehicle to you. You repair and service the car. Everything just like it works right now.
                    </div>
                  </div>
                </li>

                <li className="flex gap-2">
                  <div className="flex justify-center items-center w-[24] h-[24] p-2 text-sm font-bold rounded-full bg-brand-orange border border-brand-darkgrey">2</div>
                  <div className="">
                    <div className="font-bold">SPLIT IT</div>
                    <div>
                      When the customer gets their bill or quote, your customer chooses the option to ‘PayLater’ and in just a few clicks they’ve been approved and have paid.
                    </div>
                  </div>
                </li>

                <li className="flex gap-2">
                  <div className="flex justify-center items-center w-[24] h-[24] p-2 text-sm font-bold rounded-full bg-brand-orange border border-brand-darkgrey">3</div>
                  <div className="">
                    <div className="font-bold">SORTED</div>
                    <div>
                      You and your customer part ways happy. You’re paid upfront, directly from Bumper, the customer repays Bumper over their chosen payment plan.
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <Link href="/partner-register">
          <Button text="Register your interest" className="text-xl" />
        </Link>
      </div>
    </section>
  );
}
