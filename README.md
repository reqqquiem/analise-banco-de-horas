# Compasso · Apuração de banco de horas

Protótipo navegável em português para revisar o banco de horas dos colaboradores de campo e exportar uma planilha Excel para conferência de pagamento. Todos os dados são fictícios; setembro de 2026 é a competência de demonstração.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
```

## Fluxo

- Filtrar por nome/cargo, equipe e status.
- Clicar no nome ou na seta para analisar o colaborador.
- Ajustar horas no formato HH:MM e adicional de 50% ou 100%; o pagamento não pode superar o saldo disponível.
- Salvar a conferência. Alterações persistem no armazenamento local deste navegador.
- Exportar todos os registros filtrados ou selecionar colaboradores para exportar apenas a seleção. O arquivo `.xlsx` inclui as abas Apuração e Resumo e premissas. Registros pendentes são identificados na planilha.

O cálculo demonstrativo é `horas × (salário base / 220) × (1 + adicional / 100)`, arredondado por colaborador em centavos. As colunas de horas do Excel usam horas decimais (1h30 = 1,5). O saldo restante representa o saldo após o pagamento proposto.

Este protótipo não possui servidor, autenticação, dados compartilhados, importação de ponto ou integração com folha. Não realiza pagamentos. Para uso real, validar jornada, divisor, adicionais, convenção coletiva, DSR e descontos com RH/contabilidade. As fontes web são opcionais, com fontes locais alternativas.

## Publicar no GitHub Pages

O workflow `.github/workflows/pages.yml` testa, compila e publica o protótipo a cada push em `main`. No repositório do GitHub, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. Depois, em **Actions → Publicar protótipo no GitHub Pages → Run workflow**, execute a publicação. O endereço final é informado pelo job de publicação; não considere o site publicado até esse job concluir. A disponibilidade do Pages depende da visibilidade do repositório e do plano do GitHub.
