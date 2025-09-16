"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Star, GitFork, Eye, Calendar } from "lucide-react";
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
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
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Estatísticas GitHub
              </h2>
              <p className="text-lg text-muted-foreground">
                Dados em tempo real do meu perfil
              </p>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div key={i} variants={cardVariants}>
                  <Card className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                      <div className="h-8 bg-muted rounded w-1/2"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Estatísticas GitHub
            </h2>
            <p className="text-muted-foreground">
              Não foi possível carregar os dados do GitHub. Tente novamente mais tarde.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Estatísticas GitHub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dados em tempo real do meu perfil e repositórios mais recentes
            </p>
          </motion.div>

          {stats && (
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={cardVariants}>
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Github className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {stats.public_repos}
                    </h3>
                    <p className="text-muted-foreground">Repositórios Públicos</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Eye className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {stats.followers}
                    </h3>
                    <p className="text-muted-foreground">Seguidores</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex items-center justify-center mb-4"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <Calendar className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {new Date(stats.created_at).getFullYear()}
                    </h3>
                    <p className="text-muted-foreground">Membro desde</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Repositórios Recentes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <Card key={repo.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {repo.name}
                        </h4>
                        {repo.language && (
                          <Badge variant="secondary" className="text-xs">
                            {repo.language}
                          </Badge>
                        )}
                      </div>
                      
                      {repo.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {repo.description}
                        </p>
                      )}

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {repo.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          {repo.forks_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {repo.watchers_count}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Atualizado em {formatDate(repo.updated_at)}
                        </span>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          Ver no GitHub
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
