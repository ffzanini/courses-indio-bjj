# courses-indio-bjj

Landing de catálogo dos **cursos online** da JA Índio Jiu Jitsu — domínio: [cursos.indiobjj.com.br](https://cursos.indiobjj.com.br).

Stack alinhada ao site principal ([indiobjj.com.br](https://indiobjj.com.br)): Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Montserrat, [next-intl](https://next-intl.dev/) (pt/en). Inclui [@vercel/analytics](https://vercel.com/docs/analytics) e [@vercel/speed-insights](https://vercel.com/docs/speed-insights) para métricas e Web Vitals no painel da Vercel.

### Idiomas e rotas

- **`/`** redireciona para **`/pt`** ou **`/en`** conforme cookie `NEXT_LOCALE` e cabeçalho **`Accept-Language`** (lógica equivalente ao `proxy` do projeto portfolio-personal); caminhos sem locale (ex.: `/pacote`) recebem o prefixo escolhido.
- **Português:** `/pt`, `/pt/pacote`.
- **Inglês:** `/en`, `/en/pacote`.
- Textos em [`messages/pt.json`](messages/pt.json) e [`messages/en.json`](messages/en.json). Seletor no header da home.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SITE_URL` | Não | URL canônica deste site (padrão: `https://cursos.indiobjj.com.br`) |
| `NEXT_PUBLIC_MAIN_SITE` | Não | Site da academia para links “Saiba mais” e imagens (padrão: `https://indiobjj.com.br`) |
| `NEXT_PUBLIC_KIWIFY_BUNDLE_URL` | Não | Link Kiwify do **pacote completo**; se vazio, o CTA de compra do pacote mostra “em breve” |

Defina na Vercel: **Project → Settings → Environment Variables**.

## Build e sitemap

```bash
npm run build
```

O script `postbuild` gera `public/sitemap.xml` e `public/robots.txt` via [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) usando `NEXT_PUBLIC_SITE_URL`.

## Deploy (Vercel)

1. Importe o repositório na Vercel.
2. Framework Preset: **Next.js**.
3. Adicione as variáveis acima (produção).
4. Em **Domains**, associe `cursos.indiobjj.com.br` e configure o DNS conforme o painel (CNAME para `c.vercel-dns.net` ou equivalente).
5. Ative **Analytics** e **Speed Insights** no projeto (os pacotes já estão no código).

## Rotas

- `/` → redireciona para `/pt` ou `/en`.
- `/pt` — Landing em português; `/pt/pacote` — pacote.
- `/en`, `/en/pacote` — mesmas páginas em inglês.

## Créditos

Desenvolvido por [Felipe Frantz Zanini](https://www.ffzanini.dev/).
