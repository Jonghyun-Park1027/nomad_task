import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  id: string;
  company: string;
  companyHq: string;
  companyLogo: string;
  title: string;
  postedAt: string;
  type: string;
  positionlocation: string;
  badges: string[];
  salary: string;
}

export function JobCard({ 
  id, 
  company, 
  companyHq, 
  companyLogo,
  title, 
  postedAt, 
  type, 
  positionlocation, 
  badges,
  salary
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={companyLogo} 
              alt={`${company} logo`} 
              className="size-10 rounded-full" 
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">
                {company}
              </span>
              <span className="text-xs text-muted-foreground">
                {postedAt}
              </span>
            </div>
          </div>
          
          <CardTitle>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          {badges.map((badge) => (
            <Badge key={badge} variant="outline" className="mr-2">
              {badge}
            </Badge>
          ))}
          
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {companyHq}
            </span>
            
          </div>
          <Button variant="secondary" size="sm" className="cursor-pointer">
            Apply Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
