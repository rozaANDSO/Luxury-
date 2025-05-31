// components/ContactFormClient.tsx
"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => <div>Loading contact form...</div>,
}) as ComponentType;

export default function ContactFormClient() {
  return <ContactForm />;
}