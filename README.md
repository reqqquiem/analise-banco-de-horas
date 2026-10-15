# Naturgy · Apuração de banco de horas

Protótipo navegável em português para revisar o banco de horas dos colaboradores de campo e exportar uma planilha Excel. Todos os dados são fictícios; setembro de 2026 é a competência de demonstração. Cores, logotipo e pictogramas foram extraídos dos PPTs fornecidos pelo usuário (ver `src/assets/README.md`).

## Demonstração sem instalação

Baixe o ZIP em https://raw.githubusercontent.com/reqqquiem/analise-banco-de-horas/main/docs/naturgy-prototipo.zip, extraia e abra `index.html` no navegador. Não é necessário instalar Node.js ou executar comandos. O pacote inclui aplicativo, logotipo, ícones, estilos e exportação Excel; as fontes web são opcionais e possuem alternativas locais. As alterações permanecem apenas no navegador de cada usuário.

O mesmo ZIP pode ser usado para publicar um site estático na Netlify: https://app.netlify.com/drop. Use sua própria conta; o serviço poderá exigir login. O endereço público só existe depois da publicação efetiva. A geração do pacote não publica o site.

## Desenvolvimento

Requer Node.js 20.19+ ou 22.12+.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run package-demo
```

`package-demo` gera `docs/naturgy-demo.html`, o alias `docs/compasso-demo.html` e `docs/naturgy-prototipo.zip`. Gere o pacote novamente após alterar o código. O ZIP contém `index.html` e `LEIA-ME.txt`.

## Fluxo

- Filtrar por nome/cargo, equipe e status.
- Clicar no nome ou na seta para analisar o colaborador.
- Ajustar horas no formato HH:MM e adicional de 50% ou 100%; o pagamento não pode superar o saldo disponível.
- Salvar a conferência. Alterações persistem no armazenamento local deste navegador.
- Exportar todos os registros filtrados ou selecionar colaboradores para exportar apenas a seleção. O arquivo `.xlsx` inclui as abas Apuração e Resumo e premissas. Registros pendentes são identificados na planilha.

O cálculo demonstrativo é `horas × (salário base / 220) × (1 + adicional / 100)`, arredondado por colaborador em centavos. As horas no Excel são decimais (1h30 = 1,5). O saldo restante é uma proposta após pagamento, sem baixar ou pagar horas efetivamente.

O protótipo não possui servidor, autenticação, dados compartilhados, importação de ponto ou integração com folha. Não realiza pagamentos. Para uso real, validar jornada, divisor, adicionais, convenção coletiva, DSR e descontos com RH/contabilidade.

## GitHub Pages (opcional)

O workflow `.github/workflows/pages.yml` testa, compila e publica a cada push em `main`. É necessário habilitar **Settings → Pages → Build and deployment → Source → GitHub Actions** antes. Depois, em **Actions → Publicar protótipo no GitHub Pages → Run workflow**, execute a publicação. O endereço final é informado pelo job de publicação; não considere o site publicado até esse job concluir.
