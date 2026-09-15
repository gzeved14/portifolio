import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  featured?: boolean;
}

interface Skill {
  name: string;
  src?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {

  readonly projects: Project[] = [
    {
      number: '01',
      title: 'AcessPim',
      description:
        'Sistema de controle de acesso industrial desenvolvido para o Polo Industrial de Manaus, com autenticação, controle de permissões, reconhecimento facial e operação offline.',
      technologies: [
        'Node.js',
        'TypeScript',
        'Angular',
        'PostgreSQL',
        'Python',
        'Docker'
      ],
      link: 'https://github.com/gzeved14/AcessPim',
      featured: true
    },

    {
      number: '02',
      title: 'CotAmazonas',
      description:
        'Sistema voltado para cotações e análise de sazonalidade de frete fluvial no Amazonas, com processamento automatizado de dados.',
      technologies: [
        'Python',
        'Pandas',
        'PostgreSQL',
        'Docker',
        'API'
      ],
      link: 'https://github.com/gzeved14/CotAmazonas'
    },

    {
      number: '03',
      title: 'Ybya',
      description:
        'Micro-ERP SaaS multi-tenant desenvolvido para pequenas empresas, com isolamento de dados e arquitetura preparada para crescimento.',
      technologies: [
        'Node.js',
        'TypeScript',
        'Express',
        'PostgreSQL',
        'Docker'
      ],
      link: 'https://github.com/gzeved14/Ybya'
    },

    {
      number: '04',
      title: 'TokenGate',
      description:
        'Serviço de autenticação e controle de acesso desenvolvido com arquitetura de camadas e foco em segurança e organização de código.',
      technologies: [
        'Java',
        'Spring Boot',
        'PostgreSQL'
      ],
      link: 'https://github.com/gzeved14/TokenGate'
    }
  ];

  readonly skills: Skill[] = [
    { name: 'Angular', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
    { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' }
  ];

  readonly experiences = [
    {
      company: 'Saniteck',
      role: 'Analista de Sistemas / Desenvolvedor Full Stack',
      period: '2026 — presente',
      description: [
        'Desenvolveu pipeline automatizado de extração e monitoramento em Python (Pandas) integrado à VPS Oracle Cloud para ingestão, tratamento e auditoria contínua de mais de 5.000 logs diários do ERP TOTVS Protheus, reduzindo o tempo de identificação de falhas de 2 horas para menos de 1 minuto.',
        'Otimizou consultas complexas em SQL Server, reduzindo o tempo de execução de queries em 25% por meio de análise de planos de execução e criação estratégica de índices.',
        'Executou diagnósticos, extração e correções controladas de dados operacionais e fiscais diretamente na base relacional do ERP, mitigando gargalos de concorrência e prevenindo bloqueios (locks).',
        'Projetou e implementou do zero sistema interno de controle e auditoria de estoque em TypeScript, PostgreSQL e Docker, gerando redução de custos de produtos químicos de R$ 233,5k para R$ 12,9k.'
      ]
    },
    {
      company: 'Instituto de Desenvolvimento Tecnológico — INDT',
      role: 'Desenvolvedor Full Stack / Backend (Projeto)',
      period: '2025 — 2026',
      description: [
        'Construiu microsserviços e APIs RESTful em Node.js, Express e TypeScript adotando a arquitetura Controller-Service-Repository (CSR) para isolamento estrito de regras de negócio.',
        'Modelou entidades relacionais e migrações utilizando TypeORM com PostgreSQL, estruturando transações atômicas seguras e relacionamentos complexos (@ManyToOne, @OneToMany).',
        'Desenvolveu rotinas de priorização de fluxo logístico industrial utilizando estruturas de dados avançadas (filas e pilhas) em Python e Programação Orientada a Objetos, economizando 10 horas semanais de triagem manual.',
        'Implementou testes unitários e de integração automatizados com Jest para validação de fluxos críticos de negócio.',
        'Atuou sob metodologias ágeis (Scrum/Kanban), participando de Sprint Planning, code reviews e deploy de serviços conteinerizados via Docker em servidores nuvem.'
      ]
    },
    {
      company: 'Prefeitura de São Paulo de Olivença',
      role: 'Analista de Dados / Técnico de TI',
      period: '2023 — 2024',
      description: [
        'Desenvolveu APIs REST centralizadas utilizando Node.js/Express, cobertura de testes unitários superior a 80% com Jest e validação estrita de esquemas com Zod.',
        'Automatizou processos de extração, limpeza e padronização de dados de licitações públicas com Python e Pandas, aumentando a eficiência analítica do setor de auditoria em 33%.',
        'Administrou a infraestrutura de TI, ambiente ERP TOTVS Protheus e banco SQL Server, solucionando mais de 120 chamados de permissões, consultas complexas e correções de dados diretamente na base.'
      ]
    }
  ];
}