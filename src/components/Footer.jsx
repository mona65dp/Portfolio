const baseAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const cvPdf = baseAsset("CV/CV_Mr.Witthaya_Audomrat.pdf");

function Footer() {
  const handleCvClick = (event) => {
    event.preventDefault();
    window.open(cvPdf, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative z-10 overflow-hidden px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="liquid-card px-6 py-10 text-center sm:px-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">Portfolio by Witthaya Audomrat</h2>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-sm font-medium text-slate-600 sm:flex-row sm:gap-8">
            <a className="footer-link" href="tel:+66611822035"><i className="fas fa-phone mr-2" />+66 61 182 2035</a>
            <a className="footer-link" href="mailto:witthaya.audomrat@gmail.com"><i className="fas fa-envelope mr-2" />witthaya.audomrat@gmail.com</a>
            <a className="footer-link" href={cvPdf} onClick={handleCvClick} target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf mr-2" />Download CV</a>
          </div>
          <p className="text-sm font-light text-slate-500">&copy; 2026 Witthaya Audomrat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
