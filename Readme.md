# Little Bloom House / Maker Square public site

Static Astro marketing site. Not the Rails ops app. Not Square Online.

## Skins

- `PUBLIC_BRAND=lbh` — October hold (default). Public name Little Bloom House. Open play is $7 flat. Extra adults are free.
- `PUBLIC_BRAND=maker` — November relaunch. Public name Maker Square. Open play is $15 / $13 / $11.

One codebase. Flip the env on Cloudflare Pages, then point DNS.

## Local (no Docker)

```bash
cd website
cp .env.example .env
# paste Web3Forms key when you have it
npm install
npm run dev
```

Open http://localhost:8080

## Docker + VS Code (bind-mount `~/code/mspp/website`)

Yes. Run Astro in a container, edit files on your machine. The container sees every save.

### 1. Put the project in that folder

Copy this `website/` tree into `~/code/mspp/website` (create the folders if needed):

```bash
mkdir -p ~/code/mspp/website
cp -a /path/to/artifacts/website/. ~/code/mspp/website/
cd ~/code/mspp/website
cp -n .env.example .env
```

Open **`~/code/mspp/website`** in VS Code. That is the folder you edit. Do not open the files inside the container.

### 2. Easiest: Compose from that folder

```bash
cd ~/code/mspp/website
docker compose up --build
```

Then http://localhost:8080

Stop with Ctrl+C, or `docker compose down` from the same folder.

### 3. Same thing with explicit docker commands

Use this if you want the mount path written out. Works from any current directory.

```bash
# once, from the project folder
cd ~/code/mspp/website
docker build -t mspp-website:dev .

docker run --rm -it \
  --name mspp-website \
  -p 8080:8080 \
  -v "$HOME/code/mspp/website":/app \
  -v mspp-website-node-modules:/app/node_modules \
  -e PUBLIC_BRAND=lbh \
  -e CHOKIDAR_USEPOLLING=true \
  -e WATCHPACK_POLLING=true \
  --env-file "$HOME/code/mspp/website/.env" \
  mspp-website:dev
```

`-v "$HOME/code/mspp/website":/app` is the bind mount: your laptop folder is `/app` in the container.  
`-v mspp-website-node-modules:/app/node_modules` keeps Linux `node_modules` in a Docker volume so a Mac/Windows install does not break the container.

If your home path is different, change only the left side of the first `-v`. Examples:

```bash
# already standing in code/mspp/website
-v "$(pwd)":/app

# Windows PowerShell
-v C:\Users\YOU\code\mspp\website:/app
```

### 4. Compose from somewhere else

```bash
export HOST_WEBSITE_DIR="$HOME/code/mspp/website"
docker compose -f "$HOST_WEBSITE_DIR/docker-compose.yml" --project-directory "$HOST_WEBSITE_DIR" up --build
```

### Rebuild after package.json changes

```bash
docker compose up --build
# or
docker exec mspp-website npm ci
```

### Production-style preview (no live reload)

```bash
docker compose run --rm --service-ports web npm run build
docker compose run --rm --service-ports web npm run preview
```

Still http://localhost:8080


## Forms

1. Create a free key at https://web3forms.com bound to `hello@littlebloomhouse.com`.
2. Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` and in Cloudflare Pages → Settings → Environment variables.
3. Hidden `botcheck` honeypot is already on both forms. Add Turnstile later only if spam shows up.

Without a key, the pages show phone/email instead of a dead form.

## Waiver button

Set `PUBLIC_SMARTWAIVER_URL` when counsel clears the template. Until then the Rules page tells families to ask at the desk.

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: this folder
- Env: `PUBLIC_BRAND=lbh` for October
- `_redirects` in `public/` ships with the build

October DNS: point `littlebloomhousejc.com` at this Pages project. Do not stand up a second Google listing.

## What this site does not do

Cart, gift cards, Square Appointments, Mickey/event tickets, membership checkout, open-play tickets.
