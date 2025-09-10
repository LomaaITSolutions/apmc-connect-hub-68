import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Shield, Clock } from "lucide-react";

const GoodStandingCertificate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-4">NMC Good Standing Certificate</h1>
            <p className="text-lg text-muted-foreground">
              Official certificate confirming your good standing with the National Medical Commission
            </p>
            <div className="mt-4">
              <Badge variant="secondary" className="mr-2">
                <Shield className="mr-1" size={12} />
                Official Document
              </Badge>
              <Badge variant="outline">
                <Clock className="mr-1" size={12} />
                Processing Time: 7-10 Days
              </Badge>
            </div>
          </div>

          {/* What is Good Standing Certificate */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What is a Good Standing Certificate?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                A Good Standing Certificate is an official document issued by the National Medical Commission (NMC) 
                that certifies that a medical practitioner is in good standing with the medical council. This certificate 
                confirms that the doctor has no pending disciplinary actions, has maintained their registration, and 
                continues to meet professional standards.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-green-800">Certificate Confirms:</h4>
                  <ul className="text-sm space-y-1 text-green-700">
                    <li>• Valid medical registration</li>
                    <li>• No disciplinary actions</li>
                    <li>• Compliance with medical ethics</li>
                    <li>• Continuous medical education</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-blue-800">Required For:</h4>
                  <ul className="text-sm space-y-1 text-blue-700">
                    <li>• Employment abroad</li>
                    <li>• Medical license transfer</li>
                    <li>• Higher education applications</li>
                    <li>• Professional verification</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
              <CardDescription>Step-by-step guide to obtain your certificate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">1</div>
                  <h4 className="font-semibold text-sm mb-1">Submit Application</h4>
                  <p className="text-xs text-muted-foreground">Complete online form with required documents</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">2</div>
                  <h4 className="font-semibold text-sm mb-1">Pay Fees</h4>
                  <p className="text-xs text-muted-foreground">Submit application fees via online payment</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">3</div>
                  <h4 className="font-semibold text-sm mb-1">Verification</h4>
                  <p className="text-xs text-muted-foreground">APMC verifies your registration status</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">4</div>
                  <h4 className="font-semibold text-sm mb-1">Certificate Issued</h4>
                  <p className="text-xs text-muted-foreground">Download or collect your certificate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Basic Documents:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Current APMC registration certificate</li>
                    <li>• Identity proof (Aadhaar/Passport)</li>
                    <li>• Passport size photographs</li>
                    <li>• Fee payment receipt</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Additional Requirements:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Purpose letter (why certificate needed)</li>
                    <li>• Current practice details</li>
                    <li>• CME compliance certificate</li>
                    <li>• No objection certificate (if employed)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fees Structure */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Fee Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Certificate Type</th>
                      <th className="text-left p-3">Processing Time</th>
                      <th className="text-left p-3">Fee Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Standard Processing</td>
                      <td className="p-3">7-10 working days</td>
                      <td className="p-3 font-semibold">₹2,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Express Processing</td>
                      <td className="p-3">3-5 working days</td>
                      <td className="p-3 font-semibold">₹5,000</td>
                    </tr>
                    <tr>
                      <td className="p-3">Urgent Processing</td>
                      <td className="p-3">1-2 working days</td>
                      <td className="p-3 font-semibold">₹10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <FileText className="mr-2" size={16} />
              Apply Online
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2" size={16} />
              Download Application Form
            </Button>
          </div>

          {/* Contact Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Certificate Helpdesk</CardTitle>
              <CardDescription>Get assistance with your Good Standing Certificate application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Phone:</strong> +91-863-2340116
                </div>
                <div>
                  <strong>Email:</strong> certificates@apmcvjw.gov.in
                </div>
                <div>
                  <strong>Office Hours:</strong> 10:00 AM - 5:00 PM (Mon-Fri)
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GoodStandingCertificate;