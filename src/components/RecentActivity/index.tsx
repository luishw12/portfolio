"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, GitCommit, Clock, ExternalLink } from "lucide-react";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
  html_url: string;
  repository: {
    name: string;
    full_name: string;
  };
}

export default function RecentActivity() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentCommits = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(
          "https://api.github.com/users/luishw12/events/public?per_page=10"
        );

        if (!response.ok) {
          throw new Error("Falha ao buscar atividade recente");
        }

        const events = await response.json();
        
        const pushEvents = events
          .filter((event: any) => event.type === "PushEvent")
          .slice(0, 5)
          .map((event: any) => ({
            sha: event.payload.commits[0]?.sha || "",
            commit: {
              message: event.payload.commits[0]?.message || "Commit sem mensagem",
              author: {
                name: event.actor.login,
                email: event.payload.commits[0]?.author?.email || "",
                date: event.created_at
              }
            },
            html_url: `https://github.com/${event.repo.name}/commit/${event.payload.commits[0]?.sha}`,
            repository: {
              name: event.repo.name.split("/")[1],
              full_name: event.repo.name
            }
          }));

        setCommits(pushEvents);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentCommits();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `há ${diffInHours}h`;
    } else if (diffInHours < 168) {
      const days = Math.floor(diffInHours / 24);
      return `há ${days} dia${days > 1 ? 's' : ''}`;
    } else {
      return date.toLocaleDateString("pt-BR");
    }
  };

  const truncateMessage = (message: string, maxLength: number = 60) => {
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Atividade Recente
              </h2>
              <p className="text-lg text-muted-foreground">
                Últimos commits no GitHub
              </p>
            </div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-4">
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || commits.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Atividade Recente
            </h2>
            <p className="text-muted-foreground">
              Não foi possível carregar a atividade recente. Tente novamente mais tarde.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Atividade Recente
            </h2>
            <p className="text-lg text-muted-foreground">
              Últimos commits no GitHub
            </p>
          </div>

          <div className="space-y-4">
            {commits.map((commit, index) => (
              <Card key={commit.sha || index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <GitCommit className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {commit.repository.name}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {formatDate(commit.commit.author.date)}
                        </div>
                      </div>
                      
                      <p className="text-sm text-foreground mb-2">
                        {truncateMessage(commit.commit.message)}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {commit.sha.substring(0, 7)}
                        </span>
                        <Button size="sm" variant="ghost" asChild>
                          <a
                            href={commit.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Ver Commit
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/luishw12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Ver Perfil Completo no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
