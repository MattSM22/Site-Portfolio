interface ExperiecesTypes {
  id: number;
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

export const experiencesArray: ExperiecesTypes[] = [
  {
    id: 1,
    cargo: "Programador Trainee",
    empresa: "Siclop Serviços e Sistemas",
    periodo: "Mar de 2021 - Ago de 2021 - 6 meses",
    descricao: "Trabalhei com JavaScript e Electron.js no desenvolvimento de aplicações desktop, além de HTML, CSS e PHP em sistemas web.Utilizava MySQL em sistemas locais e Firebase em conjunto com uma API para aplicações web em produção.Realizava correções de bugs relatados pela equipe de suporte, implementando as alterações inicialmente em um ambiente de testes — uma estrutura que eu mesmo propus e implantei para evitar problemas diretos no ambiente de produção, aumentando a segurança e eficiência das entregas. Todas as demandas chegavam através da equipe de suporte, com quem mantinha contato constante para validar melhorias, identificar oportunidades e garantir a qualidade das entregas.Apesar da empresa não utilizar metodologias ágeis formalmente, havia um fluxo bem definido de reuniões e entregas semanais com envolvimento direto da liderança. Foi uma experiência de grande valor para meu crescimento profissional, especialmente no que diz respeito à organização pessoal, trabalho em equipe, comunicação entre áreas e adaptação em ambientes com recursos e equipes reduzidas.",
  },
  {
    id: 2,
    cargo: "Estágio em TI",
    empresa: "Titan Software LDTA",
    periodo: "Ago de 2020 - Out de 2020 - 3 meses",
    descricao: "Atuei no desenvolvimento e manutenção de um sistema ERP voltado ao varejo e atacado, utilizando tecnologias como PHP, HTML, CSS, JavaScript, MySQL e Java, com versionamento via GitHub. Auxiliava em manutenções de baixo risco, implementação de pequenas melhorias e no suporte à equipe durante o desenvolvimento de novas funcionalidades. Recebia demandas a partir do sistema Mantis, alimentado pela equipe de suporte, com descrições detalhadas do problema, nível de criticidade e possíveis causas, o que facilitava a organização do fluxo de trabalho. Tinha contato direto com as equipes de desenvolvimento e suporte, promovendo boa comunicação e colaboração. Participei da criação de um sistema de guichê, desenvolvido em Java, responsável por consumir informações de uma API e exibir senhas e locais de atendimento em displays de LED. As entregas seguiam um fluxo estruturado com revisão e testes: minhas implementações eram enviadas em branch de testes, validadas pelo suporte e integradas à branch principal após aprovação do supervisor."
  },
]



