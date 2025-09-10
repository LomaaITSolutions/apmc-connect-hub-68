import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, CheckCircle } from "lucide-react";

const InAbsentiaRegistration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-4">IN ABSENTIA Registration</h1>
            <p className="text-lg text-muted-foreground">
              Register for medical practice without physical presence - For doctors residing outside Andhra Pradesh
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <CardTitle className="text-lg">Submit Application</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complete the online application form with all required documents
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <CardTitle className="text-lg">Document Verification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  APMC verifies all submitted documents and credentials
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <CardTitle className="text-lg">Registration Complete</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Receive your registration certificate and practice authorization
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Requirements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>• Medical degree certificates</li>
                  <li>• Post-graduation certificates (if applicable)</li>
                  <li>• Experience certificates</li>
                  <li>• Character certificate</li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>• Passport size photographs</li>
                  <li>• Identity proof (Aadhaar/Passport)</li>
                  <li>• Address proof</li>
                  <li>• Registration fee payment receipt</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <FileText className="mr-2" size={16} />
              Start Application
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2" size={16} />
              Download Form
            </Button>
          </div>

          {/* Contact Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Contact our registration helpdesk for assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Phone:</strong> +91-863-2340116
                </div>
                <div>
                  <strong>Email:</strong> apmcvjw@gmail.com
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InAbsentiaRegistration;