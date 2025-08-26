import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";



interface TeamCardProps {
  teamId: string;
  leaderUsername: string;
  leaderAvatarUrl: string;
  lookingFor: string[];
  projectDescription: string;
  joinUrl?: string;
}

export function TeamCard({ 
  teamId, 
  leaderUsername, 
  leaderAvatarUrl, 
  lookingFor, 
  projectDescription, 
  joinUrl = `/teams/${teamId}` 
}: TeamCardProps) {
  return (
    <Link to={joinUrl}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose space-x-2">
            <Badge variant="secondary" className="inline-flex shadow-sm items-center">
              <span>@{leaderUsername}</span>
              <Avatar className="size-4">
                <AvatarFallback>{leaderUsername.charAt(0)}</AvatarFallback>
                <AvatarImage src={leaderAvatarUrl} /> 
              </Avatar>
            </Badge>
            <span>is looking for</span>
            {lookingFor.map((role, index) => (
              <Badge key={index} className="text-base">
                {role}
              </Badge>
            ))}
            <span>to build</span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" className="cursor-pointer">
            Join the team &rarr;
          </Button>
        </CardFooter>
      </Card> 
    </Link>
  );
}
