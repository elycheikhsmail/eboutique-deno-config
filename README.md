# eboutique-deno-config
## what is this repo
this repo allow me ( or nay dev ) to deploy typescrypt and javascript code on deno deploy not for running it but to seve it, then we can use the url give by deno deploy to import owr host code in our dev just like we use deno.land/x modules or any other cdn, for examples we can make 

```
import { nunjucks  } from  "https://eboutique-deno-config-ebe9f841.deno.dev/config.ts"
```
the url 

```
https://eboutique-deno-config-ebe9f841.deno.dev

```
run the code following code 

```
async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);
  console.log(({ pathname }));
  console.log(import.meta.url);
  if (pathname != "/") { 
    console.log(import.meta.url);
    
    const cleanPathname = pathname.slice(1) 
    const staticFile = new URL(cleanPathname, import.meta.url); 
    const response = await fetch(staticFile); 
    const headers = new Headers(response.headers); 
    headers.set("content-type", "text/plain; charset=utf-8"); 
    return new Response(response.body, { ...response, headers });
  }

  return new Response(
    `<html>
        <head>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <h1>not found</h1>
          <p> 
          you are searching for js and ts files not for html file

          </p>
        </body>
      </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

  addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(handleRequest(event.request));
  });
```
 the code will all files in this directory and put needed headers for deno to fetch and stor this code
 
 ## why host js/ts code in deno deploy ?
 
 for personal usage, especialy configyration writen in ts
