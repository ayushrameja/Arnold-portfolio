"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";

import { RESUME } from "@/constants/links";

export default function ResumeContent() {
  return (
    <section className="min-h-dvh p-6 sm:p-8 lg:p-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm underline">
          <ArrowLeft size={18} />
          Back to home
        </Link>

        <div className="rounded-lg border p-6 sm:p-8">
          <h1 className="text-2xl font-semibold sm:text-3xl">Resume</h1>
          <p className="mt-2 text-sm text-neutral-600">View or download my resume.</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={RESUME.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
            >
              <FileText size={18} />
              View
            </a>
            <a
              href={RESUME.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              <Download size={18} />
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
