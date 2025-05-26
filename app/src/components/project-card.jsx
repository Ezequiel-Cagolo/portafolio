import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/bagde";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, image, demoLink, codeLink, tags }) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image || "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <Github className="h-4 w-4 mr-2" />
                Código
              </Button>
            </a>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
