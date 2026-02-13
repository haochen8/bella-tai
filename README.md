# Välkommen till ditt Lovable-projekt

## Projektinformation

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## Hur kan jag redigera koden?

Det finns flera sätt att redigera applikationen.

**Använd Lovable**

Besök [Lovable-projektet](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) och börja prompta.

Ändringar som görs via Lovable committas automatiskt till detta repo.

**Använd din föredragna IDE**

Om du vill arbeta lokalt i din egen IDE kan du klona detta repo och pusha ändringar. Pushade ändringar kommer också att speglas i Lovable.

Det enda kravet är att Node.js och npm är installerade. [Installera med nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Följ dessa steg:

```sh
# Steg 1: Klona repot med projektets Git-URL.
git clone <YOUR_GIT_URL>

# Steg 2: Gå till projektkatalogen.
cd <YOUR_PROJECT_NAME>

# Steg 3: Installera nödvändiga beroenden.
npm i

# Steg 4: Starta utvecklingsservern med automatisk omladdning och direkt förhandsvisning.
npm run dev
```

**Redigera en fil direkt i GitHub**

- Gå till önskad fil eller filer.
- Klicka på knappen "Edit" (pennikonen) uppe till höger i filvyn.
- Gör dina ändringar och committa dem.

**Använd GitHub Codespaces**

- Gå till startsidan för ditt repository.
- Klicka på knappen "Code" (grön knapp) uppe till höger.
- Välj fliken "Codespaces".
- Klicka på "New codespace" för att starta en ny Codespace-miljö.
- Redigera filer direkt i Codespace och committa samt pusha ändringarna när du är klar.

## Vilka tekniker används i projektet?

Projektet är byggt med:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Hur kan jag driftsätta projektet?

Öppna [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) och klicka på Share -> Publish.

## Kan jag koppla en egen domän till mitt Lovable-projekt?

Ja, det går bra.

För att koppla en domän, gå till Project > Settings > Domains och klicka på Connect Domain.

Läs mer här: [Konfigurera en egen domän](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Beställning och e-postbekräftelse

Projektet innehåller nu ett beställningsflöde:

- Kunden väljer en eller flera rätter från menyn
- Kunden bekräftar med namn, e-post och telefonnummer
- Bekräftelse skickas via e-post (EmailJS REST API)

För att aktivera mailskick, skapa en `.env.local` med:

```sh
VITE_EMAILJS_SERVICE_ID=din_service_id
VITE_EMAILJS_TEMPLATE_ID=din_template_id
VITE_EMAILJS_PUBLIC_KEY=din_public_key
```

Notera: EmailJS-templaten behöver variabler som t.ex. `to_email`, `customer_name`, `order_items`, `total_price` och `order_id`.
