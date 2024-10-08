'use client';
import Container from "@src/components/global/container";
import React from "react";
import banner from '@public/medias/jolibcare_banner.png';

export default function Home() {

  return (
    <>
      <Container delay={0.4}>
        <div className="w-full h-screen">
          <main className="flex items-center justify-center w-full h-full">
            <picture>
              <img className="m-auto"
                src={banner.src}
                alt="Next.js logo" />
            </picture>
          </main>
        </div>
      </Container>
    </>
  );
}
