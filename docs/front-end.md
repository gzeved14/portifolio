# Front-end: problemas encontrados e correções

Este documento registra dois problemas encontrados no portfólio e as decisões usadas para corrigi-los.

## 1. GIFs não apareciam no mobile

### Sintomas

Em telas pequenas, algumas artes em GIF não apareciam. O problema era mais visível no celular porque o layout usava classes responsivas do Tailwind que escondiam os elementos abaixo do breakpoint `lg`.

### Causas

Havia elementos com combinações como:

```html
class="hidden opacity-40 lg:block"
```

Essa combinação significa:

- `hidden`: o elemento começa com `display: none`;
- `lg:block`: ele só volta a aparecer a partir do breakpoint `lg`;
- em mobile e tablet, o elemento continua invisível.

Também havia uma imagem principal com `h-full`. Essa altura depende da altura definida pelo elemento pai. Quando o pai não tinha uma altura estável no mobile, a imagem podia ficar sem espaço adequado para renderizar.

### Correção aplicada

Os GIFs decorativos deixaram de ser escondidos no mobile. O layout passou a controlar tamanho e posicionamento com classes responsivas:

```html
class="pixel-art mt-10 flex justify-end opacity-40 lg:absolute lg:-right-8 lg:-top-20 lg:mt-0"
```

Para a imagem principal, foi usada uma combinação que preserva a proporção e limita o tamanho:

```html
class="relative z-10 h-auto max-h-full w-full max-w-[390px] object-contain"
```

Para a arte inferior, o tamanho varia por breakpoint:

```html
class="h-64 w-auto sm:h-96 lg:h-[500px]"
```

### O que lembrar

Antes de usar `hidden lg:block`, confirme se o elemento é realmente decorativo e deve desaparecer no celular. Para imagens, prefira:

- `h-auto` para preservar a proporção;
- `w-full` com `max-w-*` para limitar a largura;
- `object-contain` quando a imagem inteira precisa permanecer visível;
- uma altura definida no pai quando o filho usa `h-full` ou `max-h-full`.

### Checklist de diagnóstico

1. Verifique se o elemento tem `display: none` no mobile.
2. Inspecione os breakpoints ativos no DevTools.
3. Confirme se o caminho do asset está correto.
4. Confirme se o elemento pai tem largura e altura reais.
5. Verifique se `overflow-hidden` está cortando a imagem.
6. Teste em pelo menos uma viewport estreita e uma larga.

## 2. Setas apareciam como emoji ou caracteres Unicode

### Sintomas

As setas eram escritas diretamente no HTML, por exemplo:

```html
Vamos conversar →
```

ou:

```html
↗
```

A aparência desses caracteres pode mudar de acordo com o sistema operacional, navegador e fonte. Em alguns dispositivos eles podem ser renderizados com estilo de emoji ou com uma aparência visual diferente do restante da interface.

### Correção aplicada

Os caracteres foram substituídos por um elemento semântico e estilizado por CSS:

```html
<span
  class="icon-arrow icon-arrow--right ml-2"
  aria-hidden="true"
></span>
```

Para links externos ou ações diagonais:

```html
<span
  class="icon-arrow icon-arrow--external"
  aria-hidden="true"
></span>
```

O desenho é criado pelos pseudo-elementos `::before` e `::after` em `src/styles.css`. Assim, a seta não depende da fonte instalada nem da interpretação do sistema como emoji.

### Acessibilidade

As setas são decorativas e não carregam informação independente. Por isso, recebem `aria-hidden="true"`. O texto do link continua sendo suficiente para leitores de tela:

```html
<a href="#contato">
  Vamos conversar
  <span class="icon-arrow icon-arrow--right" aria-hidden="true"></span>
</a>
```

Se um ícone tiver significado próprio, não o esconda da tecnologia assistiva. Nesse caso, use um nome acessível, como `aria-label`, ou texto visível que explique a ação.

## Como investigar problemas parecidos

### No navegador

1. Abra o DevTools com `F12`.
2. Ative o modo responsivo.
3. Teste larguras próximas de `375px`, `768px` e `1280px`.
4. No painel **Elements**, confira as classes computadas.
5. No painel **Computed**, procure por `display`, `width`, `height`, `overflow` e `visibility`.
6. No painel **Network**, filtre por `Img` e confirme se os GIFs retornam status `200`.
7. No console, procure erros de carregamento ou caminhos incorretos.

### No Angular

Assets públicos deste projeto ficam disponíveis a partir da raiz da aplicação. Por isso, uma imagem em `public/assets/image5.gif` pode ser referenciada como:

```html
<img src="assets/image5.gif" alt="Descrição da imagem">
```

Use `alt` descritivo para imagens informativas. Para imagens puramente decorativas, use `alt=""`.

## Leituras e documentação recomendadas

### Documentação oficial

- [Angular: servir arquivos estáticos](https://angular.dev/tools/cli/assets)
- [Angular: acessibilidade](https://angular.dev/best-practices/a11y)
- [Tailwind CSS: design responsivo](https://tailwindcss.com/docs/responsive-design)
- [Tailwind CSS: display](https://tailwindcss.com/docs/display)
- [Tailwind CSS: width](https://tailwindcss.com/docs/width)
- [Tailwind CSS: height](https://tailwindcss.com/docs/height)
- [MDN: imagens responsivas](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Design_and_accessibility/Responsive_images)
- [MDN: `object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [MDN: media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [MDN: `aria-hidden`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [Web.dev: design responsivo](https://web.dev/learn/design/)

### Vídeos e cursos

- [Curso em Vídeo: HTML5 e CSS3](https://www.cursoemvideo.com/curso/html5-css3-modulo-1/)
- [freeCodeCamp: Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
- [Kevin Powell: Responsive design](https://www.youtube.com/@KevinPowell/search?query=responsive%20design)
- [Angular: canal oficial no YouTube](https://www.youtube.com/@Angular)

Ao estudar, procure especialmente por conteúdos sobre **mobile first**, **breakpoints**, **DevTools**, **imagens responsivas**, **CSS `object-fit`** e **acessibilidade de ícones**.

## Comandos úteis

Construir a aplicação:

```bash
npm run build
```

Iniciar o servidor de desenvolvimento:

```bash
npm start
```

Depois, abra o endereço mostrado pelo Angular e teste a página em diferentes larguras.
