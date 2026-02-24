import FooterReveal from "./FooterReveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-transparent px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
      <div className="relative mx-auto w-full max-w-[1320px]">
        <div className="p-2 sm:p-3">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
            <FooterReveal>
              {`© ${new Date().getFullYear()} Arnold Kevin Desouza. All rights reserved.`}
            </FooterReveal>
            <FooterReveal delay={0.08} className="text-white/55">
              Code licensed under Apache License 2.0.
            </FooterReveal>
          </div>
        </div>
      </div>
    </footer>
  );
}
