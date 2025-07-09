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

Adding a clickable citation to the response is how citation linking is done. A direct link to the cited PDF is provided in every citation. The relevant document opens in a new tab when the user selects the citation. The paragraph for manual reference is also mentioned in the citation text. The design mimics how Lexi enables users to link AI-generated legal responses to actual documents.


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
