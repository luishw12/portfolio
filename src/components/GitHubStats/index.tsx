"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Eye, Calendar, ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

export default function GitHubStats() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        const [reposResponse, userResponse] = await Promise.all([
          fetch("https://api.github.com/users/luishw12/repos?sort=updated&per_page=6"),
          fetch("https://api.github.com/users/luishw12")
        ]);

        if (!reposResponse.ok || !userResponse.ok) {
          throw new Error("Falha ao buscar dados do GitHub");
        }

        const reposData = await reposResponse.json();
        const userData = await userResponse.json();

        setRepos(reposData);
        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          created_at: userData.created_at
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric"
    });
  };

  if (loading) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1">
                <Github className="w-3 h-3 mr-2" />
                GitHub
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Carregando...
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-8 bg-muted rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Github className="w-3 h-3 mr-2" />
              GitHub
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              GitHub Stats
            </h2>
            <p className="text-muted-foreground mb-6">
              Não foi possível carregar os dados do GitHub.
            </p>
            <Button variant="outline" asChild>
              <a href="https://github.com/luishw12" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Ver perfil no GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Github className="w-3 h-3 mr-2" />
              Open Source
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              GitHub{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Stats
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dados em tempo real do meu perfil e repositórios
            </p>
          </motion.div>

          {/* Stats Cards */}
          {stats && (
            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={cardVariants}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Code className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {stats.public_repos}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Repositórios</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Eye className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {stats.followers}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Seguidores</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Calendar className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {new Date(stats.created_at).getFullYear()}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Desde</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {/* Repos */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              Repositórios Recentes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group h-full border-0 shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate flex-1 mr-2">
                          {repo.name}
                        </h4>
                        {repo.language && (
                          <Badge variant="secondary" className="text-xs flex-shrink-0">
                            {repo.language}
                          </Badge>
                        )}
                      </div>

                      {repo.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                          {repo.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" />
                            {repo.forks_count}
                          </span>
                        </div>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline flex items-center gap-1"
                        >
                          Ver <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://github.com/luishw12" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Ver todos os repositórios
                <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
