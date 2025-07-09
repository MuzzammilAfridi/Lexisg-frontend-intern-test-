# Lexi

This is a frontend assignment submission for **Lexi**, which simulates a legal assistant interface that returns AI-generated legal answers with traceable citations.

##  Features

- Input field to ask legal questions
- Submit button with loading state
- Simulated API response (no backend)
- Answer displayed in a clean card layout
- Citation shown below the answer
- Clickable citation opens the judgment PDF in a new tab

---

## How Citation Linking Was Handled

Citation linking is handled by **adding a clickable citation to each response**. Every citation includes:

- A **direct link** to the cited PDF document
- The **paragraph reference** mentioned in the citation text (e.g., "Para 7 of the document")
- On click, the PDF **opens in a new browser tab**, allowing the user to manually verify the referenced legal material

This design mimics how Lexi enables users to **trace AI-generated legal responses back to actual legal documents** for transparency and validation.

---

## Tech Stack

- React.js
- Tailwind CSS

---

## Video Demo
```bash
https://drive.google.com/file/d/1rjNGwSX9LvWA4J6oRCC55s0y8f7kHvQ1/view?usp=sharing

---

## How to Run Locally

```bash
git clone https://github.com/MuzzammilAfridi/Lexisg-frontend-intern-test-.git
cd Lexi
npm install
npm start
