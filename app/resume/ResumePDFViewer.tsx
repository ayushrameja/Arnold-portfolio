"use client";

import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure worker to load from unpkg according to version
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumePDFViewerProps {
  url: string;
}

export default function ResumePDFViewer({ url }: ResumePDFViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set initial width
    setContainerWidth(containerRef.current.clientWidth);
    
    // Track width changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  // Calculate scaled width - give it 40px margins and max out nicely
  const pdfWidth = Math.min(containerWidth - 64, 1000); // 32px padding per side

  return (
    <div 
      className="w-full h-full flex flex-col items-center overflow-y-auto"
      style={{ backgroundColor: "var(--surface-inset)" }}
      ref={containerRef}
    >
      <div className="my-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:-translate-y-1">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          className="bg-white rounded overflow-hidden relative"
          loading={
            <div className="flex w-[800px] h-[1000px] max-w-[90vw] items-center justify-center p-20 text-[var(--text-subtle)] bg-[var(--surface-card)]/50 rounded animate-pulse">
              <span>Loading Resume...</span>
            </div>
          }
        >
          {Array.from(new Array(numPages), (el, index) => (
             <Page 
              key={`page_${index + 1}`}
              pageNumber={index + 1} 
              width={pdfWidth} 
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
