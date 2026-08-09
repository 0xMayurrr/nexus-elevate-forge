import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getPDF, type PDFData } from "@/lib/pdf-store";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FileX, Loader2, FileText, Maximize2, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/document")({
  component: DocumentViewerPage,
});

function DocumentViewerPage() {
  const [docData, setDocData] = useState<PDFData | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    async function loadPdf() {
      try {
        const data = await getPDF();
        if (data && data.blob) {
          setDocData(data);
          const url = URL.createObjectURL(data.blob);
          setPdfUrl(url);
        }
      } catch (error) {
        console.error("Error loading PDF:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPdf();

    // Cleanup the object URL when the component unmounts
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (pdfUrl && docData) {
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = docData.name.endsWith('.pdf') ? docData.name : `${docData.name}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--navy-deep)]">
      <Header variant="dark" />
      <main className="flex flex-1 flex-col pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl flex-1 flex flex-col">
          <div className="mb-12 text-center animate-fade-in">
            <p className="eyebrow-light eyebrow-dot mb-4 justify-center">Resources</p>
            <h1 className="display-4 text-[color:var(--cream)]">Client Documents</h1>
            <p className="mt-4 text-lg text-[color:var(--cream)]/70 max-w-2xl mx-auto">
              Access the latest secure documentation below. Click to read in full screen.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            {isLoading ? (
              <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-md">
                <CardContent className="flex items-center justify-center flex-col p-12 text-[color:var(--cream)]/70">
                  <Loader2 className="h-10 w-10 animate-spin text-[color:var(--gold)] mb-4" />
                  <p>Loading document securely...</p>
                </CardContent>
              </Card>
            ) : pdfUrl && docData ? (
              <div 
                onClick={() => setIsFullScreen(true)}
                className="group relative w-full max-w-md cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-[color:var(--gold)]/5"
              >
                <div className="absolute top-4 right-4 text-[color:var(--cream)]/40 transition-colors group-hover:text-[color:var(--gold)]">
                  <Maximize2 className="h-5 w-5" />
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[color:var(--gold)]/20">
                    <FileText className="h-10 w-10" />
                  </div>
                  
                  <h3 className="mb-2 font-display text-2xl font-semibold text-white line-clamp-2">
                    {docData.name}
                  </h3>
                  
                  <p className="mb-8 text-sm text-[color:var(--cream)]/60">
                    PDF Document • {(docData.blob.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  
                  <div className="flex w-full gap-3">
                    <Button 
                      className="flex-1 bg-[color:var(--gold)] text-[color:var(--navy-deep)] hover:bg-[color:var(--gold)]/90 font-semibold"
                    >
                      Read Document
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white/20 bg-transparent text-white hover:bg-white/10"
                      onClick={handleDownload}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-md">
                <CardContent className="flex items-center justify-center flex-col p-12 text-center h-full">
                  <div className="rounded-full bg-white/5 p-6 mb-6">
                    <FileX className="h-12 w-12 text-[color:var(--cream)]/40" />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-white mb-2">No Document Available</h3>
                  <p className="text-[color:var(--cream)]/60 max-w-sm mx-auto mb-8">
                    There is currently no document uploaded to the system. Please check back later.
                  </p>
                  <Link to="/">
                    <Button variant="outline" className="border-white/10 text-[color:var(--cream)] hover:bg-white/10 hover:text-white">
                      Return to Home
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />

      {/* FULL SCREEN VIEWER DIALOG */}
      <Dialog open={isFullScreen} onOpenChange={setIsFullScreen}>
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 gap-0 bg-[color:var(--navy-deep)] border-white/20 shadow-2xl flex flex-col overflow-hidden">
          <DialogTitle className="sr-only">{docData?.name}</DialogTitle>
          
          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-[color:var(--gold)]" />
              <h2 className="font-semibold text-white truncate max-w-md md:max-w-xl">{docData?.name}</h2>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hidden sm:flex"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-[color:var(--cream)]/70 hover:text-white hover:bg-white/10"
                onClick={() => setIsFullScreen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full bg-white relative">
            {pdfUrl && (
              <iframe
                src={pdfUrl}
                className="absolute inset-0 w-full h-full border-0"
                title={docData?.name || "PDF Viewer"}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
