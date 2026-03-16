# Krapka Graph

A desktop graph visualization tool for OSINT investigations, built with Electron. Create nodes, connect them with edges, and visually map relationships between people, organizations, infrastructure, and social accounts.

![Krapka Graph](https://raw.githubusercontent.com/eksembl/Krapka-graph-OSINT/main/Krapka_Graph.png)

---

## Features

**Graph editing**
- Add nodes by dragging from the palette or pressing `A`
- Connect nodes with the Edge tool (`E`) or via the context menu
- Double-click a node to open its properties panel
- Double-click an edge to edit its label
- Select multiple nodes with `Shift+Click` or rubber-band selection
- Duplicate nodes with `Ctrl+D`, undo/redo with `Ctrl+Z` / `Ctrl+Y`

**Node types — 29 total**

| Category | Types |
|---|---|
| People & Docs | Person, Passport / Document |
| Organizations | Company, Organization (NGO, gov) |
| Infrastructure | Domain, IP / Network, Server, Database |
| Finance | Money, Bank Card, Crypto Wallet |
| Transport | Vehicle (plate, VIN) |
| Location | Address |
| Files & Notes | File, Note |
| Contacts | Phone, Email |
| Social | Instagram, Telegram, VK, Discord, YouTube, GitHub, Twitter/X, LinkedIn, Facebook, TikTok, WhatsApp, Skype |

**Layout & navigation**
- Auto circular layout and Force simulation
- Fit to screen (`F`), zoom with scroll, pan with `H` or `Space`
- Snap to grid (`Alt+G`)
- Minimap in the bottom-right corner

**Data management**
- Multiple projects — each saved separately in localStorage
- Autosave every 30 seconds
- Save on window close
- Save / Open `.kg` files (`Ctrl+S` / `Ctrl+O`)
- Export to PNG and SVG

**Properties panel**
- Name, description, URL, date, status, group, tags, custom icon URL
- One-click copy for name and URL fields
- Color picker with 10 presets + custom color
- Custom icon picker

**Other**
- Tags with filtering
- Node grouping with visual group borders
- Search across all node fields
- Straight and curved edge styles
- Warning when deleting a node with 5+ connections
- Interface languages: Ukrainian, russian, English

---

## Installation

**Requirements:** Node.js 18+, npm

```bash
git clone https://github.com/your-username/krapka-graph.git
cd krapka-graph
npm install
```

**Run in dev mode:**
```bash
npm run dev
```

**Run:**
```bash
npm start
```

**Build portable .exe (Windows):**
```bash
npm run build
```

Output will be in the `dist/` folder.

---

## Project structure

```
krapka-graph/
├── src/
│   ├── main/
│   │   ├── main.js        # Electron main process
│   │   └── preload.js     # Context bridge (IPC)
│   ├── renderer/
│   │   ├── index.html     # App shell
│   │   ├── app.js         # All UI logic
│   │   └── styles.css     # Styles
│   └── assets/
│       └── icon.png
├── package.json
└── README.md
```

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `V` | Select tool |
| `E` | Edge tool |
| `H` / `Space` | Pan tool |
| `A` | Add node |
| `F` | Fit to screen |
| `T` | Toggle edge style |
| `Del` | Delete selected |
| `Ctrl+Z` / `Ctrl+Y` | Undo / Redo |
| `Ctrl+D` | Duplicate |
| `Ctrl+A` | Select all |
| `Ctrl+S` | Save file |
| `Ctrl+O` | Open file |
| `Alt+G` | Toggle snap grid |

---

## File format

Graphs are saved as `.kg` files (JSON):

```json
{
  "version": "1.0",
  "projectName": "My Investigation",
  "nodes": [
    {
      "id": 1,
      "typeId": "person",
      "label": "John Doe",
      "color": "lime",
      "x": 400,
      "y": 300,
      "desc": "...",
      "url": "https://...",
      "tags": ["suspect"]
    }
  ],
  "edges": [
    {
      "id": 2,
      "from": 1,
      "to": 3,
      "label": "Works at"
    }
  ]
}
```

---

## License

MIT
