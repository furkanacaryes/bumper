"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TabBar } from "./tab-bar";
import { ToolbarButton } from "./toolbar-button";

export const Toolbar = () => {

  return (
    <div className="fixed top-0 right-0 left-0 z-10 bg-brand-orange rounded-b-2xl border-b border-x border-brand-darkgrey">
      <TabBar />

      <div className="container px-4 mx-auto py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Bumper Logo" width={126} height={32} />

            <span className="text-brand-darkgrey font-semibold">for business</span>
          </div>

          <Link href="/partner-register">
            <ToolbarButton type="primary" label="Register" />
          </Link>
        </div>
      </div>
    </div>
  );
}
