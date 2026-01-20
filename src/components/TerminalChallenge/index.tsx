"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal } from "lucide-react";

interface TerminalChallengeProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "system" | "ascii";
  content: string;
}

interface FileSystemNode {
  type: "dir" | "file";
  content?: string;
  children?: string[];
}

interface FileSystem {
  [key: string]: FileSystemNode;
}

const ASCII_BANNER = `
██╗     ██╗   ██╗██╗███████╗    ███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗
██║     ██║   ██║██║██╔════╝    ██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║
██║     ██║   ██║██║███████╗    ███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║
██║     ██║   ██║██║╚════██║    ╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║
███████╗╚██████╔╝██║███████║    ███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║
╚══════╝ ╚═════╝ ╚═╝╚══════╝    ╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝
`;

const FILE_SYSTEM: FileSystem = {
  "/": { type: "dir", children: ["home", "var", "etc", "tmp"] },
  "/home": { type: "dir", children: ["guest"] },
  "/home/guest": { type: "dir", children: ["documentos", "downloads", ".config"] },
  "/home/guest/documentos": { type: "dir", children: ["projetos", "notas.txt"] },
  "/home/guest/documentos/projetos": { type: "dir", children: ["portfolio", "api-rest"] },
  "/home/guest/documentos/projetos/portfolio": { type: "dir", children: ["README.md"] },
  "/home/guest/documentos/projetos/portfolio/README.md": {
    type: "file",
    content: `# Meu Portfólio

Desenvolvido com Next.js, React e Tailwind CSS.

O arquivo do currículo está em um servidor seguro.
Verifique o arquivo de configuração em ~/.config para mais informações.`
  },
  "/home/guest/documentos/projetos/api-rest": { type: "dir", children: [] },
  "/home/guest/documentos/notas.txt": {
    type: "file",
    content: `Anotações do dia:
- Lembrar de atualizar o currículo
- O backup está no servidor remoto
- Verificar pasta /var/log para informações de conexão`
  },
  "/home/guest/downloads": { type: "dir", children: [] },
  "/home/guest/.config": { type: "dir", children: ["servers.conf", "dica.txt"] },
  "/home/guest/.config/dica.txt": {
    type: "file",
    content: `╔══════════════════════════════════════════════════════════════╗
║                    💡 DICA IMPORTANTE 💡                      ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Para baixar o currículo, você precisa:                      ║
║                                                              ║
║  1. Descobrir o IP do servidor (verifique /var/log)          ║
║  2. Usar o comando wget para baixar o arquivo:               ║
║                                                              ║
║     wget <ip>/curriculo.pdf                                  ║
║                                                              ║
║  Exemplo: wget 192.168.1.100/arquivo.pdf                     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝`
  },
  "/home/guest/.config/servers.conf": {
    type: "file",
    content: `# Configuração de Servidores
# Última atualização: 2025-01-15

[backup_server]
name=Servidor de Backup
status=offline

[main_server]
name=Servidor Principal  
status=online
# IP movido para /var/log/conexoes.log por segurança`
  },
  "/var": { type: "dir", children: ["log", "www"] },
  "/var/log": { type: "dir", children: ["system.log", "conexoes.log", "auth.log"] },
  "/var/log/system.log": {
    type: "file",
    content: `[2025-01-20 08:00:01] Sistema iniciado
[2025-01-20 08:00:05] Serviços de rede ativos
[2025-01-20 08:00:10] Firewall configurado
[2025-01-20 09:15:33] Backup automático executado`
  },
  "/var/log/conexoes.log": {
    type: "file",
    content: `=== LOG DE CONEXÕES ===
Última atualização: 2025-01-20

Conexões ativas:
- localhost (127.0.0.1) .......... OK
- gateway (192.168.1.1) .......... OK
- dns (8.8.8.8) .................. OK

=== SERVIDOR DE ARQUIVOS ===
IP: 10.0.0.42
Porta: 443
Status: ONLINE
Arquivos disponíveis: curriculo.pdf

Para baixar: wget 10.0.0.42/curriculo.pdf`
  },
  "/var/log/auth.log": {
    type: "file",
    content: `[AUTH] Login bem-sucedido: guest
[AUTH] Sessão iniciada: tty1
[AUTH] Permissões: user`
  },
  "/var/www": { type: "dir", children: ["html"] },
  "/var/www/html": { type: "dir", children: ["index.html"] },
  "/var/www/html/index.html": {
    type: "file",
    content: `<!DOCTYPE html>
<html>
<head><title>Welcome</title></head>
<body>
  <h1>Servidor Web Local</h1>
  <p>Nada interessante aqui...</p>
</body>
</html>`
  },
  "/etc": { type: "dir", children: ["hostname", "passwd"] },
  "/etc/hostname": { type: "file", content: "luis-workstation" },
  "/etc/passwd": {
    type: "file",
    content: `root:x:0:0:root:/root:/bin/bash
guest:x:1000:1000:Guest User:/home/guest:/bin/bash`
  },
  "/tmp": { type: "dir", children: [] },
};

const CORRECT_SERVER_IP = "10.0.0.42";

const HELP_TEXT = `
Comandos disponíveis:
  ls [dir]      - Lista arquivos e diretórios
  ls -la        - Lista com arquivos ocultos
  cd <dir>      - Muda de diretório
  cd ..         - Volta um diretório
  cd ~          - Vai para home
  pwd           - Mostra diretório atual
  cat <arquivo> - Mostra conteúdo de um arquivo
  wget <url>    - Baixa arquivo de um servidor remoto
  whoami        - Mostra usuário atual
  hostname      - Mostra nome da máquina
  clear         - Limpa o terminal
  help          - Mostra esta ajuda
  exit          - Fecha o terminal

💡 Dica: Explore o sistema de arquivos para encontrar
   informações sobre como baixar o currículo!
`;

export default function TerminalChallenge({ isOpen, onClose }: TerminalChallengeProps) {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState("/home/guest");
  const [isDownloading, setIsDownloading] = useState(false);
  const [tabCompletionOptions, setTabCompletionOptions] = useState<string[]>([]);
  const [showCompletionOptions, setShowCompletionOptions] = useState(false);
  // Reverse search (CTRL+R) state
  const [isReverseSearching, setIsReverseSearching] = useState(false);
  const [reverseSearchQuery, setReverseSearchQuery] = useState("");
  const [reverseSearchResult, setReverseSearchResult] = useState("");
  const [reverseSearchIndex, setReverseSearchIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const reverseSearchInputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const addLine = useCallback((type: TerminalLine["type"], content: string) => {
    setHistory((prev) => [...prev, { type, content }]);
  }, []);

  const addLines = useCallback((lines: { type: TerminalLine["type"]; content: string }[]) => {
    setHistory((prev) => [...prev, ...lines]);
  }, []);

  const initializeTerminal = useCallback(() => {
    setHistory([
      { type: "ascii", content: ASCII_BANNER },
      { type: "system", content: "════════════════════════════════════════════════════════════════════════════════" },
      { type: "output", content: "Bem-vindo ao sistema de arquivos de Luís Henrique." },
      { type: "system", content: "" },
      { type: "output", content: "🎯 MISSÃO: Encontre e baixe o arquivo 'curriculo.pdf'" },
      { type: "output", content: "   O arquivo está em um servidor remoto. Explore o sistema" },
      { type: "output", content: "   para descobrir como acessá-lo!" },
      { type: "system", content: "" },
      { type: "system", content: "💡 Digite 'help' para ver os comandos disponíveis." },
      { type: "system", content: "💡 Comece explorando: ls -la ~/.config" },
      { type: "system", content: "💡 Use TAB para autocompletar e CTRL+R para buscar no histórico" },
      { type: "system", content: "════════════════════════════════════════════════════════════════════════════════" },
      { type: "system", content: "" },
    ]);
    setInput("");
    setCommandHistory([]);
    setHistoryIndex(-1);
    setCurrentPath("/home/guest");
    setIsDownloading(false);
    setTabCompletionOptions([]);
    setShowCompletionOptions(false);
    setIsReverseSearching(false);
    setReverseSearchQuery("");
    setReverseSearchResult("");
    setReverseSearchIndex(-1);
  }, []);

  useEffect(() => {
    if (isOpen) {
      initializeTerminal();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, initializeTerminal]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const resolvePath = useCallback((path: string): string => {
    let resolved = path;
    if (resolved.startsWith("~")) {
      resolved = resolved.replace("~", "/home/guest");
    }
    if (!resolved.startsWith("/")) {
      resolved = currentPath + "/" + resolved;
    }
    const parts = resolved.split("/").filter(Boolean);
    const stack: string[] = [];
    for (const part of parts) {
      if (part === "..") {
        stack.pop();
      } else if (part !== ".") {
        stack.push(part);
      }
    }
    return "/" + stack.join("/") || "/";
  }, [currentPath]);

  const getDisplayPath = (path: string): string => {
    if (path.startsWith("/home/guest")) {
      return path.replace("/home/guest", "~");
    }
    return path;
  };

  const handleSuccess = useCallback(() => {
    setIsDownloading(true);
    addLines([
      { type: "system", content: "" },
      { type: "output", content: `--2025-01-20 10:30:45--  http://${CORRECT_SERVER_IP}/curriculo.pdf` },
      { type: "output", content: `Conectando-se a ${CORRECT_SERVER_IP}:443... conectado.` },
      { type: "output", content: "Requisição HTTP enviada, aguardando resposta... 200 OK" },
      { type: "output", content: "Tamanho: 256000 (250K) [application/pdf]" },
      { type: "output", content: "Salvando em: 'curriculo.pdf'" },
    ]);

    setTimeout(() => {
      addLines([
        { type: "system", content: "" },
        { type: "output", content: "curriculo.pdf       100%[===================>] 250.00K  --.-KB/s    em 0.5s" },
        { type: "system", content: "" },
        { type: "success", content: "╔════════════════════════════════════════════════════════════════╗" },
        { type: "success", content: "║                                                                ║" },
        { type: "success", content: "║   ✅ Download concluído com sucesso!                           ║" },
        { type: "success", content: "║                                                                ║" },
        { type: "success", content: "║   🎉 Parabéns! Você completou o desafio!                       ║" },
        { type: "success", content: "║                                                                ║" },
        { type: "success", content: "║   Você demonstrou:                                             ║" },
        { type: "success", content: "║   • Familiaridade com linha de comando                         ║" },
        { type: "success", content: "║   • Capacidade de investigação                                 ║" },
        { type: "success", content: "║   • Persistência e curiosidade                                 ║" },
        { type: "success", content: "║                                                                ║" },
        { type: "success", content: "║   Exatamente o perfil que procuro em uma equipe! 🚀            ║" },
        { type: "success", content: "║                                                                ║" },
        { type: "success", content: "╚════════════════════════════════════════════════════════════════╝" },
      ]);

      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/curriculo.pdf";
        link.download = "curriculo_luis_henrique.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
          onClose();
        }, 1500);
      }, 1000);
    }, 1500);
  }, [addLines, onClose]);

  const processCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim();
    const parts = trimmedCmd.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    addLine("input", `guest@luis-workstation:${getDisplayPath(currentPath)}$ ${cmd}`);

    switch (command) {
      case "help":
        addLine("output", HELP_TEXT);
        break;

      case "pwd":
        addLine("output", currentPath);
        break;

      case "whoami":
        addLine("output", "guest");
        break;

      case "hostname":
        addLine("output", "luis-workstation");
        break;

      case "clear":
        setHistory([]);
        break;

      case "exit":
        onClose();
        break;

      case "ls": {
        const showHidden = args.includes("-la") || args.includes("-a") || args.includes("-al");
        let targetPath = currentPath;
        const pathArg = args.find(a => !a.startsWith("-"));
        if (pathArg) {
          targetPath = resolvePath(pathArg);
        }

        const node = FILE_SYSTEM[targetPath];
        if (!node) {
          addLine("error", `ls: não foi possível acessar '${pathArg || targetPath}': Arquivo ou diretório não encontrado`);
        } else if (node.type === "file") {
          addLine("output", targetPath.split("/").pop() || "");
        } else if (node.children) {
          const items = showHidden ? node.children : node.children.filter(c => !c.startsWith("."));
          if (items.length === 0) {
            addLine("system", "(diretório vazio)");
          } else {
            const formatted = items.map(item => {
              const itemPath = targetPath === "/" ? `/${item}` : `${targetPath}/${item}`;
              const itemNode = FILE_SYSTEM[itemPath];
              if (itemNode?.type === "dir") {
                return `📁 ${item}/`;
              } else {
                return `📄 ${item}`;
              }
            }).join("\n");
            addLine("output", formatted);
          }
        }
        break;
      }

      case "cd": {
        if (args.length === 0 || args[0] === "~") {
          setCurrentPath("/home/guest");
        } else {
          const newPath = resolvePath(args[0]);
          const node = FILE_SYSTEM[newPath];
          if (!node) {
            addLine("error", `cd: ${args[0]}: Arquivo ou diretório não encontrado`);
          } else if (node.type === "file") {
            addLine("error", `cd: ${args[0]}: Não é um diretório`);
          } else {
            setCurrentPath(newPath);
          }
        }
        break;
      }

      case "cat": {
        if (args.length === 0) {
          addLine("error", "cat: argumento ausente");
          addLine("output", "Uso: cat <arquivo>");
        } else {
          const filePath = resolvePath(args[0]);
          const node = FILE_SYSTEM[filePath];
          if (!node) {
            addLine("error", `cat: ${args[0]}: Arquivo ou diretório não encontrado`);
          } else if (node.type === "dir") {
            addLine("error", `cat: ${args[0]}: É um diretório`);
          } else {
            addLine("output", node.content || "");
          }
        }
        break;
      }

      case "wget": {
        if (args.length === 0) {
          addLine("error", "wget: URL ausente");
          addLine("output", "Uso: wget <ip>/<arquivo>");
        } else {
          const url = args[0];
          if (url === `${CORRECT_SERVER_IP}/curriculo.pdf` || url === `http://${CORRECT_SERVER_IP}/curriculo.pdf`) {
            handleSuccess();
          } else if (url.includes(CORRECT_SERVER_IP)) {
            addLine("error", `wget: ${url}: Arquivo não encontrado no servidor`);
            addLine("output", "Verifique o nome do arquivo...");
          } else if (url.includes("curriculo.pdf")) {
            addLine("error", `wget: Não foi possível conectar ao servidor`);
            addLine("output", "Verifique o IP do servidor...");
          } else {
            addLine("error", `wget: ${url}: Conexão recusada`);
            addLine("output", "Dica: Explore o sistema para encontrar o IP correto.");
          }
        }
        break;
      }

      case "ping": {
        if (args.length === 0) {
          addLine("error", "ping: argumento ausente");
        } else {
          const host = args[0];
          if (host === CORRECT_SERVER_IP) {
            addLines([
              { type: "output", content: `PING ${host} (${host}) 56(84) bytes of data.` },
              { type: "output", content: `64 bytes from ${host}: icmp_seq=1 ttl=64 time=0.5 ms` },
              { type: "output", content: `64 bytes from ${host}: icmp_seq=2 ttl=64 time=0.4 ms` },
              { type: "success", content: `--- ${host} ping statistics ---` },
              { type: "success", content: `2 packets transmitted, 2 received, 0% packet loss` },
            ]);
          } else {
            addLine("error", `ping: ${host}: Host inacessível`);
          }
        }
        break;
      }

      case "echo":
        addLine("output", args.join(" "));
        break;

      case "date":
        addLine("output", new Date().toLocaleString("pt-BR"));
        break;

      case "uname":
        if (args.includes("-a")) {
          addLine("output", "Linux luis-workstation 6.1.0 #1 SMP x86_64 GNU/Linux");
        } else {
          addLine("output", "Linux");
        }
        break;

      case "man":
        addLine("output", "Este sistema não possui manual instalado.");
        addLine("output", "Use 'help' para ver os comandos disponíveis.");
        break;

      case "sudo":
        addLine("error", "guest não está no arquivo sudoers. Este incidente será relatado.");
        break;

      case "rm":
      case "rmdir":
      case "mkdir":
      case "touch":
      case "mv":
      case "cp":
        addLine("error", `${command}: Permissão negada`);
        break;

      case "":
        break;

      default:
        addLine("error", `${command}: comando não encontrado`);
        addLine("output", "Digite 'help' para ver os comandos disponíveis.");
    }
  }, [currentPath, addLine, addLines, onClose, resolvePath, handleSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDownloading) return;

    const cmd = input.trim();
    if (cmd) {
      setCommandHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
    }
    processCommand(cmd);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // CTRL+R for reverse search
    if (e.ctrlKey && e.key === "r") {
      e.preventDefault();
      setIsReverseSearching(true);
      setReverseSearchQuery("");
      setReverseSearchResult("");
      setReverseSearchIndex(-1);
      setTimeout(() => reverseSearchInputRef.current?.focus(), 50);
      return;
    }

    // CTRL+C to cancel
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      setIsReverseSearching(false);
      setShowCompletionOptions(false);
      setInput("");
      addLine("input", `guest@luis-workstation:${getDisplayPath(currentPath)}$ ^C`);
      return;
    }

    // CTRL+L to clear
    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setHistory([]);
      return;
    }

    // Hide completion options on any key except Tab
    if (e.key !== "Tab") {
      setShowCompletionOptions(false);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
    }
  };

  // Improved TAB completion
  const handleTabCompletion = () => {
    const parts = input.split(/\s+/);
    const isFirstWord = parts.length === 1 && !input.includes(" ");

    // If completing a command (first word)
    if (isFirstWord) {
      const commands = ["ls", "cd", "cat", "pwd", "whoami", "hostname", "clear", "help", "exit", "wget", "ping", "echo", "date", "uname", "man"];
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));

      if (matches.length === 1) {
        setInput(matches[0] + " ");
        setShowCompletionOptions(false);
      } else if (matches.length > 1) {
        setTabCompletionOptions(matches);
        setShowCompletionOptions(true);
        // Find common prefix
        const commonPrefix = findCommonPrefix(matches);
        if (commonPrefix.length > input.length) {
          setInput(commonPrefix);
        }
      }
      return;
    }

    // Completing a path/file argument
    const lastPart = parts[parts.length - 1] || "";
    let basePath: string;
    let prefix: string;

    if (lastPart === "") {
      basePath = currentPath;
      prefix = "";
    } else if (lastPart.includes("/")) {
      const lastSlashIndex = lastPart.lastIndexOf("/");
      const pathPart = lastPart.substring(0, lastSlashIndex) || "/";
      basePath = resolvePath(pathPart);
      prefix = lastPart.substring(lastSlashIndex + 1);
    } else {
      basePath = currentPath;
      prefix = lastPart;
    }

    const node = FILE_SYSTEM[basePath];
    if (!node?.children) return;

    const matches = node.children.filter(c =>
      c.toLowerCase().startsWith(prefix.toLowerCase())
    );

    if (matches.length === 0) return;

    if (matches.length === 1) {
      const match = matches[0];
      const matchPath = basePath === "/" ? `/${match}` : `${basePath}/${match}`;
      const matchNode = FILE_SYSTEM[matchPath];
      const suffix = matchNode?.type === "dir" ? "/" : " ";

      let newLastPart: string;
      if (lastPart === "") {
        newLastPart = match + suffix;
      } else if (lastPart.includes("/")) {
        newLastPart = lastPart.substring(0, lastPart.lastIndexOf("/") + 1) + match + suffix;
      } else {
        newLastPart = match + suffix;
      }

      parts[parts.length - 1] = newLastPart;
      setInput(parts.join(" "));
      setShowCompletionOptions(false);
    } else {
      // Show options and complete common prefix
      setTabCompletionOptions(matches.map(m => {
        const matchPath = basePath === "/" ? `/${m}` : `${basePath}/${m}`;
        const matchNode = FILE_SYSTEM[matchPath];
        return matchNode?.type === "dir" ? m + "/" : m;
      }));
      setShowCompletionOptions(true);

      const commonPrefix = findCommonPrefix(matches);
      if (commonPrefix.length > prefix.length) {
        let newLastPart: string;
        if (lastPart === "") {
          newLastPart = commonPrefix;
        } else if (lastPart.includes("/")) {
          newLastPart = lastPart.substring(0, lastPart.lastIndexOf("/") + 1) + commonPrefix;
        } else {
          newLastPart = commonPrefix;
        }
        parts[parts.length - 1] = newLastPart;
        setInput(parts.join(" "));
      }
    }
  };

  // Find common prefix of strings
  const findCommonPrefix = (strings: string[]): string => {
    if (strings.length === 0) return "";
    if (strings.length === 1) return strings[0];

    let prefix = strings[0];
    for (let i = 1; i < strings.length; i++) {
      while (!strings[i].toLowerCase().startsWith(prefix.toLowerCase())) {
        prefix = prefix.slice(0, -1);
        if (prefix === "") return "";
      }
    }
    return prefix;
  };

  // Handle reverse search input
  const handleReverseSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setIsReverseSearching(false);
      setReverseSearchQuery("");
      setReverseSearchResult("");
      inputRef.current?.focus();
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (reverseSearchResult) {
        setInput(reverseSearchResult);
      }
      setIsReverseSearching(false);
      setReverseSearchQuery("");
      inputRef.current?.focus();
      return;
    }

    // CTRL+R again to search further back
    if (e.ctrlKey && e.key === "r") {
      e.preventDefault();
      searchHistoryBackward(reverseSearchQuery, reverseSearchIndex + 1);
      return;
    }

    // CTRL+G to cancel
    if (e.ctrlKey && e.key === "g") {
      e.preventDefault();
      setIsReverseSearching(false);
      setReverseSearchQuery("");
      setReverseSearchResult("");
      inputRef.current?.focus();
      return;
    }
  };

  const handleReverseSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setReverseSearchQuery(query);
    searchHistoryBackward(query, 0);
  };

  const searchHistoryBackward = (query: string, startIndex: number) => {
    if (!query) {
      setReverseSearchResult("");
      setReverseSearchIndex(-1);
      return;
    }

    // Search from most recent to oldest
    const reversedHistory = [...commandHistory].reverse();
    for (let i = startIndex; i < reversedHistory.length; i++) {
      if (reversedHistory[i].toLowerCase().includes(query.toLowerCase())) {
        setReverseSearchResult(reversedHistory[i]);
        setReverseSearchIndex(i);
        return;
      }
    }

    // If starting from middle, wrap around
    if (startIndex > 0) {
      for (let i = 0; i < startIndex && i < reversedHistory.length; i++) {
        if (reversedHistory[i].toLowerCase().includes(query.toLowerCase())) {
          setReverseSearchResult(reversedHistory[i]);
          setReverseSearchIndex(i);
          return;
        }
      }
    }

    setReverseSearchResult("");
    setReverseSearchIndex(-1);
  };

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "input":
        return "text-cyan-400";
      case "output":
        return "text-green-400";
      case "error":
        return "text-red-400";
      case "success":
        return "text-emerald-400";
      case "system":
        return "text-gray-500";
      case "ascii":
        return "text-green-500";
      default:
        return "text-green-400";
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-5xl h-[85vh] max-h-[800px] bg-[#0d1117] border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/20 overflow-hidden"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <button
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                    title="Fechar"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
                  <Terminal className="w-4 h-4" />
                  <span>guest@luis-workstation: {getDisplayPath(currentPath)}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              ref={terminalRef}
              className="flex-1 p-4 overflow-y-auto h-[calc(100%-60px)] font-mono text-sm leading-relaxed"
              style={{
                background: "linear-gradient(180deg, #0d1117 0%, #010409 100%)",
                fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace"
              }}
              onClick={() => inputRef.current?.focus()}
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                  className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent"
                  animate={{ y: ["0%", "100%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)"
                }}
              />

              <div className="relative z-10">
                {history.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.05 }}
                    className={`${getLineColor(line.type)} whitespace-pre-wrap break-words`}
                  >
                    {line.content}
                  </motion.div>
                ))}

                {/* Tab completion options */}
                {showCompletionOptions && tabCompletionOptions.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-4 py-2 text-blue-400"
                  >
                    {tabCompletionOptions.map((option, idx) => (
                      <span key={idx} className="text-blue-400">
                        {option}
                      </span>
                    ))}
                  </motion.div>
                )}

                {/* Reverse search mode (CTRL+R) */}
                {isReverseSearching && (
                  <div className="flex items-center mt-1 text-yellow-400">
                    <span className="shrink-0">(reverse-i-search)`</span>
                    <input
                      ref={reverseSearchInputRef}
                      type="text"
                      value={reverseSearchQuery}
                      onChange={handleReverseSearchChange}
                      onKeyDown={handleReverseSearchKeyDown}
                      className="bg-transparent text-yellow-400 outline-none font-mono caret-yellow-400 min-w-[1ch]"
                      style={{ fontFamily: "inherit", width: `${Math.max(1, reverseSearchQuery.length)}ch` }}
                      autoComplete="off"
                      spellCheck="false"
                      autoFocus
                    />
                    <span className="shrink-0">&apos;: </span>
                    <span className="text-green-400">{reverseSearchResult}</span>
                  </div>
                )}

                {/* Normal input line */}
                {!isDownloading && !isReverseSearching && (
                  <form onSubmit={handleSubmit} className="flex items-center mt-1">
                    <span className="text-cyan-400 shrink-0">
                      guest@luis-workstation:{getDisplayPath(currentPath)}$&nbsp;
                    </span>
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => {
                          setInput(e.target.value);
                          setShowCompletionOptions(false);
                        }}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-transparent text-green-400 outline-none font-mono caret-green-400"
                        style={{ fontFamily: "inherit" }}
                        autoComplete="off"
                        spellCheck="false"
                        autoFocus
                      />
                      {input === "" && !showCompletionOptions && (
                        <motion.span
                          className="absolute left-0 top-0 w-2.5 h-5 bg-green-400/80"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                        />
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
