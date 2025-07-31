import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Github, 
  MessageCircle, 
  ExternalLink, 
  Bug, 
  Lightbulb, 
  Heart,
  Globe,
  Users
} from 'lucide-react';

export const Support = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@csutilities.com?subject=CSUtilities Support Request';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/your-username/CSUtilities', '_blank');
  };

  const handleIssuesClick = () => {
    window.open('https://github.com/your-username/CSUtilities/issues', '_blank');
  };

  const handleDiscussionsClick = () => {
    window.open('https://github.com/your-username/CSUtilities/discussions', '_blank');
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-primary to-tech-accent bg-clip-text text-transparent">
          Support & Contact
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Need help or have suggestions? We're here to support you in your Computer Science journey.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-tech-primary" />
              Email Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get direct support via email
            </p>
            <Button onClick={handleEmailClick} className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              support@csutilities.com
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bug className="h-5 w-5 text-red-500" />
              Report Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Found a bug? Let us know
            </p>
            <Button onClick={handleIssuesClick} variant="outline" className="w-full">
              <Github className="h-4 w-4 mr-2" />
              GitHub Issues
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Feature Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Suggest new features
            </p>
            <Button onClick={handleDiscussionsClick} variant="outline" className="w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              GitHub Discussions
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Github className="h-5 w-5" />
              Repository
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              View source code
            </p>
            <Button onClick={handleGithubClick} variant="outline" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              View on GitHub
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">support@csutilities.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/your-username/CSUtilities</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Website</p>
                  <p className="text-sm text-muted-foreground">csutilities.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Support the Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              CSUtilities is an open-source project built for the Computer Science community. 
              Your feedback and contributions help make it better for everyone.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Open Source</Badge>
                <Badge variant="secondary">MIT License</Badge>
                <Badge variant="secondary">Community Driven</Badge>
              </div>
            </div>

            <div className="pt-2">
              <Button onClick={handleGithubClick} variant="outline" className="w-full">
                <Github className="h-4 w-4 mr-2" />
                Star on GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Common Issues */}
      <Card>
        <CardHeader>
          <CardTitle>Common Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-tech-primary pl-4">
              <h4 className="font-semibold">How do I contribute to the project?</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Fork the repository, make your changes, and submit a pull request. 
                See our <a href="https://github.com/your-username/CSUtilities/blob/main/CONTRIBUTING.md" 
                className="text-tech-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Contributing Guidelines</a> for more details.
              </p>
            </div>
            
            <div className="border-l-4 border-tech-primary pl-4">
              <h4 className="font-semibold">Can I suggest new features?</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Absolutely! Use GitHub Discussions to suggest new features or improvements. 
                We welcome all ideas from the community.
              </p>
            </div>
            
            <div className="border-l-4 border-tech-primary pl-4">
              <h4 className="font-semibold">How do I report a bug?</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Use GitHub Issues to report bugs. Please include steps to reproduce 
                and any relevant information about your environment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Response Time */}
      <div className="text-center">
        <Card className="inline-block">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Response Time:</strong> We typically respond to emails and issues within 24-48 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
