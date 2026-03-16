\# Krapka Graph



A desktop graph visualization tool for OSINT investigations, built with Electron. Create nodes, connect them with edges, and visually map relationships between people, organizations, infrastructure, and social accounts.



!\[Krapka Graph](https://github.com/eksembl/Krapka-graph/blob/main/1.1.png)



\---



\## Features



\*\*Graph editing\*\*

\- Add nodes by dragging from the palette or pressing `A`

\- Connect nodes with the Edge tool (`E`) or via the context menu

\- Double-click a node to open its properties panel

\- Double-click an edge to edit its label

\- Select multiple nodes with `Shift+Click` or rubber-band selection

\- Duplicate nodes with `Ctrl+D`

\- Highly optimized Undo/Redo mechanism (`Ctrl+Z` / `Ctrl+Y`) that handles large graphs without memory leaks



\*\*Node types — 29 total\*\*



| Category | Types |

|---|---|

| People \& Docs | Person, Passport / Document |

| Organizations | Company, Organization (NGO, gov) |

| Infrastructure | Domain, IP / Network, Server, Database |

| Finance | Money, Bank Card, Crypto Wallet |

| Transport | Vehicle (plate, VIN) |

| Location | Address |

| Files \& Notes | File, Note |

| Contacts | Phone, Email |

| Social | Instagram, Telegram, VK, Discord, YouTube, GitHub, Twitter/X, LinkedIn, Facebook, TikTok, WhatsApp, Skype |



\*\*Layout \& navigation\*\*

\- Smart Guides for precise magnetic alignment of nodes across the X and Y axes

\- Auto circular layout and Force simulation

\- Fit to screen (`F`), zoom with scroll, pan with `H` or `Space`

\- Snap to grid (`Alt+G`)

\- Crisp vector rendering of SVG and text at any zoom level

\- Minimap in the bottom-right corner



\*\*Data management\*\*

\- Multiple projects — each saved separately in localStorage

\- Autosave every 30 seconds

\- Save on window close

\- Save / Open `.kg` files (`Ctrl+S` / `Ctrl+O`)

\- High-resolution export to PNG and SVG



\*\*Properties panel\*\*

\- Name, description, URL, date, status, group, tags, custom icon URL

\- One-click copy for name and URL fields

\- Color picker with 10 presets + custom color

\- Custom icon picker



\*\*Other\*\*

\- Tags with filtering

\- Node grouping with visual group borders

\- Search across all node fields (safe search handling for undefined labels)

\- Three edge styles: Curved, Straight, and Orthogonal (Manhattan routing)

\- Warning when deleting a node with 5+ connections

\- Interface languages: English, Ukrainian, Russian



\---



\## Installation



\*\*Requirements:\*\* Node.js 18+, npm



```bash

git clone \[https://github.com/eksembl/Krapka-graph.git](https://github.com/eksembl/Krapka-graph.git)

cd Krapka-graph

npm install

