import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { savePDF, getPDF, deletePDF, type PDFData } from "@/lib/pdf-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { UploadCloud, CheckCircle2, FileText, Trash2, PartyPopper } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [file, setFile] = useState<File | null>(null);
  const [documentName, setDocumentName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  const [currentDoc, setCurrentDoc] = useState<PDFData | null>(null);
  const [isLoadingDoc, setIsLoadingDoc] = useState(false);

  const fetchCurrentDocument = async () => {
    try {
      setIsLoadingDoc(true);
      const doc = await getPDF();
      setCurrentDoc(doc);
    } catch (error) {
      console.error("Failed to fetch document", error);
    } finally {
      setIsLoadingDoc(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchCurrentDocument();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin2" && password === "admin@123") {
      setIsAuthenticated(true);
      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== "application/pdf") {
        toast.error("Please select a valid PDF document.");
        setFile(null);
        return;
      }
      setFile(selectedFile);
      // Auto-fill name if empty
      if (!documentName) {
        setDocumentName(selectedFile.name.replace(".pdf", ""));
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }
    if (!documentName.trim()) {
      toast.error("Please enter a document name");
      return;
    }
    
    try {
      setIsUploading(true);
      await savePDF(file, documentName);
      setFile(null);
      setDocumentName("");
      setShowSuccessDialog(true);
      fetchCurrentDocument(); // Refresh the list
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload document");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePDF();
      toast.success("Document deleted successfully");
      setCurrentDoc(null);
    } catch (error) {
      console.error("Failed to delete document", error);
      toast.error("Failed to delete document");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col bg-[color:var(--navy-deep)]">
        <Header variant="dark" />
        <main className="flex flex-1 items-center justify-center p-4 pt-28">
          <Card className="w-full max-w-md border-white/10 bg-white/5 text-[color:var(--cream)] backdrop-blur-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold tracking-tight text-white">Admin Access</CardTitle>
              <CardDescription className="text-[color:var(--cream)]/70">
                Authenticate to manage documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white">Username</Label>
                  <Input 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[color:var(--gold)]" 
                    placeholder="Enter username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[color:var(--gold)]" 
                    placeholder="Enter password"
                  />
                </div>
                <Button type="submit" className="w-full bg-[color:var(--gold)] font-semibold text-[color:var(--navy-deep)] hover:bg-[color:var(--gold)]/90 mt-4">
                  Authenticate
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--navy-deep)]">
      <Header variant="dark" />
      <main className="flex-1 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center animate-fade-in">
            <p className="eyebrow-light eyebrow-dot mb-4 justify-center">Admin Portal</p>
            <h1 className="display-3 text-[color:var(--cream)]">Document Management</h1>
            <p className="mt-4 text-lg text-[color:var(--cream)]/70 max-w-2xl mx-auto">
              Upload the latest PDF document. This will replace the currently visible document for all customers visiting the site.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_350px]">
            {/* UPLOAD SECTION */}
            <Card className="border-white/10 bg-white/5 backdrop-blur-md animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Upload New Document</CardTitle>
                <CardDescription className="text-[color:var(--cream)]/70">
                  Select a PDF and provide a name for it.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="space-y-2">
                  <Label htmlFor="docName" className="text-white">Document Name</Label>
                  <Input 
                    id="docName"
                    value={documentName}
                    onChange={(e) => setDocumentName(e.target.value)}
                    placeholder="e.g. Q3 Earnings Report"
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[color:var(--gold)]"
                  />
                </div>

                <div 
                  className={`relative flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 ${
                    file 
                      ? 'border-[color:var(--gold)] bg-[color:var(--gold)]/5' 
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                  } p-12 text-center`}
                >
                  <input
                    type="file"
                    accept="application/pdf"
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0 z-10"
                    onChange={handleFileChange}
                    disabled={isUploading}
                  />
                  
                  {file ? (
                    <div className="flex flex-col items-center justify-center space-y-4 animate-fade-in">
                      <div className="rounded-full bg-[color:var(--gold)]/20 p-4">
                        <CheckCircle2 className="h-10 w-10 text-[color:var(--gold)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white">{file.name}</h3>
                        <p className="mt-2 text-sm text-[color:var(--cream)]/70">
                          {(file.size / 1024 / 1024).toFixed(2)} MB • Ready to upload
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="rounded-full bg-white/5 p-5 transition-transform group-hover:scale-110">
                        <UploadCloud className="h-10 w-10 text-[color:var(--gold)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white">Click or drag PDF here</h3>
                        <p className="mt-2 text-sm text-[color:var(--cream)]/50">
                          PDF files up to 50MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex w-full justify-between pt-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-white/10 bg-transparent text-[color:var(--cream)] hover:bg-white/10 hover:text-white"
                    onClick={() => { setFile(null); setDocumentName(""); }}
                    disabled={!file || isUploading}
                  >
                    Clear
                  </Button>
                  <Button 
                    className="flex-1 bg-[color:var(--gold)] text-[color:var(--navy-deep)] hover:bg-[color:var(--gold)]/90 font-semibold"
                    onClick={handleUpload}
                    disabled={!file || !documentName.trim() || isUploading}
                  >
                    {isUploading ? "Uploading securely..." : "Publish Document"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* MANAGEMENT SECTION */}
            <Card className="border-white/10 bg-white/5 backdrop-blur-md animate-fade-in flex flex-col h-fit" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Active Document</CardTitle>
                <CardDescription className="text-[color:var(--cream)]/70">
                  Currently visible to customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingDoc ? (
                  <div className="py-8 text-center text-[color:var(--cream)]/50">
                    Loading...
                  </div>
                ) : currentDoc ? (
                  <div className="flex flex-col items-center p-6 text-center rounded-xl bg-[color:var(--navy-deep)]/50 border border-white/10">
                    <FileText className="h-12 w-12 text-[color:var(--gold)] mb-4" />
                    <h4 className="text-lg font-medium text-white line-clamp-2">{currentDoc.name}</h4>
                    <p className="mt-1 text-sm text-[color:var(--cream)]/50">
                      {(currentDoc.blob.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <Button 
                      variant="destructive" 
                      className="mt-6 w-full bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300 border border-red-500/30"
                      onClick={handleDelete}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Document
                    </Button>
                  </div>
                ) : (
                  <div className="py-12 text-center flex flex-col items-center text-[color:var(--cream)]/50 bg-[color:var(--navy-deep)]/30 rounded-xl border border-white/5">
                    <FileText className="h-8 w-8 mb-3 opacity-20" />
                    <p>No active document.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />

      {/* SUCCESS DIALOG */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md bg-[color:var(--navy-dark)] border-white/10 text-white">
          <DialogHeader className="flex flex-col items-center text-center sm:text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--gold)]/20">
              <PartyPopper className="h-8 w-8 text-[color:var(--gold)]" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">Upload Successful!</DialogTitle>
            <DialogDescription className="text-[color:var(--cream)]/70 text-base">
              The document has been securely published and is now live for all customers to view.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center pt-6">
            <Button 
              type="button" 
              className="bg-[color:var(--gold)] text-[color:var(--navy-deep)] hover:bg-[color:var(--gold)]/90 font-semibold px-8"
              onClick={() => setShowSuccessDialog(false)}
            >
              Awesome, thanks!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
