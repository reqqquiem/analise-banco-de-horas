import { build, transform } from 'esbuild';
import { zipSync, strToU8 } from 'fflate';
import fs from 'node:fs';

const output = await build({
  entryPoints: ['src/main.js'], bundle: true, write: false,
  format: 'iife', minify: true, target: ['es2020'],
  loader: { '.css': 'empty', '.svg': 'dataurl' }
});
const styles = await transform(fs.readFileSync('src/style.css', 'utf8'), {loader:'css',minify:true});
const script = output.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const html = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#004570"><title>Naturgy · Banco de horas · Demonstração</title><style>${styles.code}</style></head><body><div id="app"></div><script>${script}</script></body></html>`;
const instructions = `NATURGY — PROTÓTIPO DE BANCO DE HORAS\n\n1. Extraia este ZIP.\n2. Abra index.html no Chrome, Edge, Firefox ou Safari. Não é preciso instalar nada.\n3. Use setembro de 2026 para os dados fictícios.\n4. Clique no colaborador para conferir horas e valor estimado.\n5. Clique em Exportar Excel para gerar a planilha.\n\nAs alterações são salvas apenas no navegador usado. O arquivo não compartilha as alterações com outros usuários.\nOs valores são fictícios e o protótipo não efetua pagamentos.\n\nHOSPEDAGEM\nEste pacote contém um site estático pronto para publicação. Em uma conta Netlify, abra https://app.netlify.com/drop e envie o ZIP ou a pasta com index.html. A Netlify poderá solicitar login. O serviço informará o endereço após a publicação. Não é necessário usar GitHub como hospedagem.\n`;
fs.mkdirSync('docs', {recursive:true});
fs.writeFileSync('docs/naturgy-demo.html', html);
// Mantém os links enviados anteriormente apontando para a versão mais recente.
fs.writeFileSync('docs/compasso-demo.html', html);
fs.writeFileSync('docs/naturgy-prototipo.zip', zipSync({
  'index.html':strToU8(html), 'LEIA-ME.txt':strToU8(instructions)
}, {level:9}));
console.log('Demonstração e ZIP gerados em docs/. HTML, imagens, estilos e exportação Excel incluídos.');
