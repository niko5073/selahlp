'use client'
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

// VSCode-like code editor window
const VSCodeWindow = ({ code, language }: { code: string; language: string }) => (
  <div className="bg-[#1e1e1e] rounded-lg border border-[#222] shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
    {/* Header bar with tabs */}
    <div className="flex items-center px-2 py-1.5 bg-[#23272e] border-b border-[#222]">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-red-400"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        <span className="w-2 h-2 rounded-full bg-green-400"></span>
      </div>
      <span className="text-[10px] text-gray-400 font-mono ml-2">{language}</span>
      <span className="ml-auto text-[10px] text-gray-500 font-mono italic">Selah</span>
    </div>
    {/* Code area */}
    <pre className="p-3 text-[11px] font-mono text-gray-200 whitespace-pre-wrap leading-relaxed bg-[#1e1e1e]">
      <code className="language-{language}">{code}</code>
    </pre>
  </div>
);

// Cursor IDE-like window for the first card
const CursorIDEWindow = ({ code }: { code: string }) => (
  <div className="bg-[#18181b] rounded-lg border border-[#222] shadow-lg overflow-hidden flex flex-col h-64">
    {/* Top bar */}
    <div className="flex items-center px-3 py-1.5 bg-[#23272e] border-b border-[#222]">
      <span className="w-2 h-2 rounded-full bg-green-400 mr-1"></span>
      <span className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></span>
      <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
      <span className="text-xs text-gray-400 font-mono">app/main.tf</span>
      <span className="ml-auto text-xs text-gray-500 font-mono italic">Cursor</span>
    </div>
    <div className="flex flex-1 min-h-0">
      {/* Sidebar */}
      <div className="w-20 bg-[#23272e] border-r border-[#222] flex flex-col py-2">
        <div className="flex flex-col items-center gap-4">
          <span className="w-6 h-6 bg-[#31313a] rounded-md flex items-center justify-center text-gray-400 text-xs font-bold">𝑓</span>
          <span className="w-6 h-6 bg-[#31313a] rounded-md flex items-center justify-center text-gray-400 text-xs font-bold">📁</span>
          <span className="w-6 h-6 bg-[#31313a] rounded-md flex items-center justify-center text-gray-400 text-xs font-bold">📝</span>
        </div>
      </div>
      {/* File tree and code */}
      <div className="flex-1 flex flex-col">
        {/* File tree */}
        <div className="flex text-xs font-mono text-gray-400 px-3 py-1 bg-[#23272e] border-b border-[#222]">
          <span className="mr-4">src</span>
          <span className="mr-4 text-white">main.tf</span>
          <span className="mr-4">README.md</span>
        </div>
        {/* Code area */}
        <pre className="flex-1 p-3 text-[11px] font-mono text-green-200 whitespace-pre-wrap leading-relaxed bg-[#18181b] overflow-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  </div>
);

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Clear from the start",
      description:
        "See exactly what infra you need and why. No guesswork. No surprises later.",
      code: `resource "aws_s3_bucket" "app_bucket" {
  bucket = "my-app-bucket"
  acl    = "private"
  versioning { enabled = true }
}`,
      language: "terraform"
    },
    {
      title: "Infrastructure that fits",
      description:
        "Get a clean plan tailored to your app. Not a one-size-fits-all boilerplate mess.",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 2
  template:
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2`,
      language: "yaml"
    },
    {
      title: "Headspace to ship",
      description:
        "Less time wiring things up. More time writing real code.",
      code: `resource "aws_iam_role" "app_role" {
  name = "app-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = { Service = "ec2.amazonaws.com" }
    }]
  })
}`,
      language: "terraform"
    },
  ];
  return (
    <div className="relative z-20 max-w-6xl mx-auto">
      {/* Decorative pink-purple gradient behind the bento grid */}
      <div className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[120%] h-[60%] blur-3xl opacity-70 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent" />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16 relative z-10">
          {/* First feature uses CursorIDEWindow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-rows-[auto_1fr] bg-[#18181b]/50 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="mb-4">
              <h3 className="text-white text-lg font-semibold mb-2">{features[0].title}</h3>
              <p className="text-neutral-400 text-sm">{features[0].description}</p>
            </div>
            <div className="grid grid-rows-[1fr]">
              <CursorIDEWindow code={features[0].code} />
            </div>
          </motion.div>

          {/* Right column with 2 stacked features */}
          <div className="grid grid-rows-2 gap-4">
            {features.slice(1).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-rows-[auto_1fr] bg-[#18181b]/50 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="mb-4">
                  <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.description}</p>
                </div>
                <div className="grid grid-rows-[1fr]">
                  <VSCodeWindow code={feature.code} language={feature.language} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-6 sm:p-10 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug font-semibold mb-2">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className={cn(
      "text-sm md:text-base text-left text-neutral-400 font-normal my-2 mb-4"
    )}>
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1920&q=75"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <Image
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};