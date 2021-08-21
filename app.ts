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
