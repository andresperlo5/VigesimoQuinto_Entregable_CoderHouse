// @deno-types="https://deno.land/x/servest/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest/mod.ts";

const app = createApp();

app.handle("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Form-Servest</title>
        </head>
        <body>
          <main class="container">
            <div class="color-card"></div>
            <div class="content">
              <h1 class="title">Random Color</h1>
              <p class="color-number">rgb(30, 35, 69)</p>
              <input type="text" id="textPost">
                <div style="display: flex;">
                  <button id="buttonTxt">Enviar Color</button>
                  <button id="button">Nuevo Color Random</button>
                </div>

            </div>
          </main>
          <div>
            <ul id="list">

            </ul>
          </div>
        </body>
      </html>
    ),
  });
});
app.listen({ port: 3001 });