import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, Download, Clock, Users, AlertTriangle } from "lucide-react";

const TemporaryPermission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-4">
              Temporary Permission for Foreign/Outside State Visiting Doctors
            </h1>
            <p className="text-lg text-muted-foreground">
              Obtain temporary practice permission for medical professionals visiting Andhra Pradesh
            </p>
            <div className="mt-4">
              <Badge variant="secondary" className="mr-2">
                <Users className="mr-1" size={12} />
                For Visiting Doctors
              </Badge>
              <Badge variant="outline">
                <Clock className="mr-1" size={12} />
                Valid up to 6 months
              </Badge>
            </div>
          </div>

          {/* Important Alert */}
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> This permission is mandatory for all doctors from outside Andhra Pradesh 
              who wish to practice temporarily within the state, including consultation, surgery, or medical camps.
            </AlertDescription>
          </Alert>

          {/* Eligibility Criteria */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Eligibility Criteria</CardTitle>
              <CardDescription>Who can apply for temporary permission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-3 text-green-800">Eligible Doctors:</h4>
                  <ul className="text-sm space-y-1 text-green-700">
                    <li>• Foreign medical graduates</li>
                    <li>• Doctors from other Indian states</li>
                    <li>• Specialist consultants</li>
                    <li>• Medical researchers</li>
                    <li>• Doctors for medical camps/missions</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-3 text-blue-800">Practice Areas Covered:</h4>
                  <ul className="text-sm space-y-1 text-blue-700">
                    <li>• Temporary consultation</li>
                    <li>• Surgical procedures</li>
                    <li>• Medical camps</li>
                    <li>• Teaching/Training programs</li>
                    <li>• Research activities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
              <CardDescription>Steps to obtain temporary permission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Submit Application</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete the application form with all required documents and fees
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Document Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      APMC verifies your medical qualifications and registration status
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Background Check</h4>
                    <p className="text-sm text-muted-foreground">
                      Verification of professional standing and disciplinary record
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Permission Issued</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive temporary permission certificate with validity period
                    </p>
                  </div>
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
                  <h4 className="font-semibold text-sm mb-3">Personal Documents:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Passport/Identity proof</li>
                    <li>• Passport size photographs</li>
                    <li>• Address proof</li>
                    <li>• Visa (for foreign nationals)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Professional Documents:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Medical degree certificates</li>
                    <li>• Registration certificates</li>
                    <li>• Experience certificates</li>
                    <li>• Good standing certificate</li>
                    <li>• Purpose of visit letter</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Validity and Conditions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Validity Period</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Short-term:</strong> Up to 30 days</li>
                  <li>• <strong>Medium-term:</strong> Up to 3 months</li>
                  <li>• <strong>Extended:</strong> Up to 6 months</li>
                  <li>• <strong>Renewal:</strong> Possible with fresh application</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Practice only within specified area</li>
                  <li>• Report to local health authorities</li>
                  <li>• Maintain proper medical records</li>
                  <li>• Comply with APMC regulations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Fee Structure */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Fee Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Duration</th>
                      <th className="text-left p-3">Indian Doctors</th>
                      <th className="text-left p-3">Foreign Doctors</th>
                      <th className="text-left p-3">Processing Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Up to 30 days</td>
                      <td className="p-3 font-semibold">₹5,000</td>
                      <td className="p-3 font-semibold">₹15,000</td>
                      <td className="p-3">5-7 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Up to 3 months</td>
                      <td className="p-3 font-semibold">₹10,000</td>
                      <td className="p-3 font-semibold">₹25,000</td>
                      <td className="p-3">7-10 days</td>
                    </tr>
                    <tr>
                      <td className="p-3">Up to 6 months</td>
                      <td className="p-3 font-semibold">₹15,000</td>
                      <td className="p-3 font-semibold">₹40,000</td>
                      <td className="p-3">10-15 days</td>
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
              Apply for Permission
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2" size={16} />
              Download Application Form
            </Button>
          </div>

          {/* Contact Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Temporary Permission Desk</CardTitle>
              <CardDescription>Contact us for assistance with temporary permission applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Direct Line:</strong> +91-863-2340118
                </div>
                <div>
                  <strong>Email:</strong> temporary.permission@apmcvjw.gov.in
                </div>
                <div>
                  <strong>Walk-in Hours:</strong> 10:00 AM - 4:00 PM (Mon-Fri)
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TemporaryPermission;