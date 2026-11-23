# Divine Feminine

Status: DRAFT. Copy is verbatim from the live page (https://jamieperlas.com/copy-of-gathered-matter, which holds this project). Not yet reviewed by Jamie.
Year: 2025
Featured: yes
Skills (from handoff spreadsheet, to confirm): CAD, 3D rendering, Figma, AI Tools, user research, collaboration, prototyping, industrial design

## Summary

Divine Feminine is a line of discreet, fashionable safety devices for women: a pepper spray and a claw clip that look like everyday accessories but send an SOS alert to trusted contacts with one trigger. With Chloe Arbow and Lyndsey Naputo, we designed, coded, and prototyped the entire system ourselves. I led design and production of the companion app, which shares the wearer’s live location with emergency contacts.

This project was a recipient of the Kohen Seed Funding.

## Pieces

- A claw clip that sends a notification to emergency contacts when the pin is pulled, also doubles as a physical deterrent. Hidden, functional, and something entirely new.
- A reimagined pepper spray. Chic, elegant, feminine. Takes a picture when the spray is deployed, connected to a universal app to communicate with emergency contacts and services.

## Why

- 1 in 3 women (estimated 840 million) have experienced physical and/or sexual violence at least once in their lives.
- 77% of women under age 40 reported being followed by a man or group of men in the past year in a way that made them feel unsafe.
- 85% of women in the United States experience street harassment before the age of 17.
- Sources: https://www.unwomen.org/en/articles/facts-and-figures/facts-and-figures-ending-violence-against-women and https://www.thehotline.org/stakeholders/domestic-violence-statistics/

## Process

Both devices house an ESP32 system with a hidden button and GPS module. Programmed in C++ to get a location fix and send an SOS signal over Bluetooth Low Energy to the companion app, which logs the alert in Firebase and pushes the wearer’s location to their emergency contacts in real time.

## Mobile App

Supporting app for quick emergency response with the trigger of any connected device. When activated, the app sends alerts and real-time location to trusted contacts.

Designed in Figma and built in Flutter with a Firebase backend. The interface prioritizes speed, simplicity, and discreet operation during high-stress situations.

## Images (from images/divine-feminine/)

- Cover (candidate): divine-feminine-10.jpg. This matches the social-preview image on the live page, so it is the best guess, but it is not confirmed.
- Gallery and process: not yet assigned. Available: divine-feminine-01 through divine-feminine-13, except 10.

## Other works

- Gathered Matter (2025)
- Raydiant (2025)

## Self-assessment

- Complete: copy for every section that appears on the live page.
- Untested: whether this text matches what Jamie wants live; whether the "Ideation" and "Process" sections need images or captions, since the live page shows the headings without text.
- Confidence: high that the copy matches the live page. Medium on the cover choice.
