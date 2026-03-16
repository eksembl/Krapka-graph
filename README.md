# Krapka Graph

A desktop graph editor for link analysis, OSINT, and network visualization. Built with Electron.

![Krapka Graph](https://github.com/eksembl/Krapka-graph/blob/main/1.2.png)]

---

## Features

**Canvas**
- Infinite pan/zoom canvas (10%–300%)
- Drag-and-drop node placement from sidebar palette
- Rubber-band multi-select, Shift/Ctrl/Cmd+click
- Smart alignment guides while dragging
- Grid snap (20px)
- Minimap with click-and-drag navigation

**Nodes**
- 29 built-in types: Person, Company, Domain, IP/Network, Server, Database, File, Note, Phone, Email, Finance, Address, Vehicle, Bank Card, Document, Organization, Crypto, and social platforms (Instagram, Telegram, VK, Discord, YouTube, GitHub, Twitter/X, LinkedIn, Facebook, TikTok, WhatsApp, Skype)
- Per-node properties: label, description, URL, date, status, group, custom icon (URL), tags
- 10 accent colors + custom hex color picker
- Status badges: Active, Inactive, Suspect, Confirmed
- Group labels rendered as visual bounding boxes
- Hover tooltip showing label, type, status, description, URL, tags

**Edges**
- 3 styles: Curved (Bézier), Straight, Orthogonal
- Per-edge color (10 presets)
- Per-edge label with click-to-select and double-click-to-edit
- Directional arrowheads

**Layout**
- Manual drag with pixel-level positioning
- Circular auto-layout
- Force-directed simulation with convergence detection and live progress indicator
- Fit-to-screen

**Projects**
- Multiple projects in one session via sidebar project list
- Auto-save every 10 seconds
- localStorage persistence with filesystem backup on close
- Auto-restore from backup if localStorage is empty on startup
- Unsaved-changes guard on window close

**Import / Export**
- Native `.kg` format (JSON)
- PNG export (2× resolution)
- SVG export with correct edge colors
- CSV export (nodes + edges, BOM-encoded for Excel compatibility)
- CSV import: simple edge list (`from,to,label`) or sectioned format (`# NODES` / `# EDGES`)

**UI**
- Frameless window with custom titlebar
- 3 interface languages: Russian, Ukrainian, English — fully translated including toasts, tooltips, and dynamic labels
- Presentation mode — hides sidebar, toolbar, and statusbar
- Tag filtering bar
- Node search with result counter, next/prev navigation

---

## Keyboard Shortcuts

### Tools
| Key | Action |
|-----|--------|
| `V` | Select tool |
| `E` | Edge tool |
| `H` | Pan tool |
| `Space` (hold) | Temporary pan |

### Canvas
| Key | Action |
|-----|--------|
| `F` | Fit to screen |
| `T` | Cycle edge style (Curved → Straight → Orthogonal) |
| `+` / `-` | Zoom in / out |
| `0` | Reset zoom to 100% |
| `↑ ↓ ← →` | Pan canvas |
| Scroll wheel | Zoom at cursor |

### Nodes
| Key | Action |
|-----|--------|
| `A` | Add node modal |
| `Del` / `Backspace` | Delete selected |
| `Ctrl+A` | Select all |
| `Ctrl+C` | Copy selected |
| `Ctrl+V` | Paste |
| `Ctrl+D` | Duplicate |
| `Double-click` | Open properties, focus Name field |
| `Shift+Click` / `Ctrl+Click` | Add to selection |

### History & File
| Key | Action |
|-----|--------|
| `Ctrl+Z` | Undo |
| `Ctrl+Y` / `Ctrl+Shift+Z` | Redo |
| `Ctrl+S` | Save `.kg` file |
| `Ctrl+O` | Open `.kg` file |

### Search
| Key | Action |
|-----|--------|
| `Ctrl+F` | Focus search |
| `Enter` | Next result |
| `Shift+Enter` | Previous result |
| `Escape` | Clear search |

### Other
| Key | Action |
|-----|--------|
| `P` | Toggle presentation mode |
| `Alt+G` | Toggle grid snap |
| `Escape` | Cancel current action / close modal |

---

## CSV Format

**Simple edge list** — each row is a connection:
```
Alice,Bob,Works with
Bob,Acme Corp,Employee
```

**Full format** — explicit node and edge sections:
```
# NODES
id,label,type,color,group,status,url,desc,tags
1,Alice Johnson,person,lime,,active,https://example.com,Lead analyst,work;vip

# EDGES
id,from,to,label,color
1,Alice Johnson,Acme Corp,Works at,blue
```

Supported node types: `person`, `company`, `domain`, `ip`, `server`, `database`, `file`, `note`, `phone`, `email`, `money`, `instagram`, `telegram`, `vk`, `discord`, `youtube`, `github`, `address`, `car`, `bankcard`, `passport`, `org`, `crypto`, `twitter`, `linkedin`, `facebook`, `tiktok`, `whatsapp`, `skype`

Supported colors: `lime`, `blue`, `purple`, `red`, `orange`, `teal`, `pink`, `yellow`, `cyan`, `gray`

---

## Project Structure

```
krapka-graph/
├── src/
│   ├── main/
│   │   ├── main.js        — Electron main process, IPC handlers, file dialogs
│   │   └── preload.js     — Context bridge 
│   ├── renderer/
│   │   ├── index.html     — App shell
│   │   ├── app.js         — All renderer logic 
│   │   └── styles.css     — UI styles
│   └── assets/
│       └── icon.png
├── package.json
└── README.md
```

---

## Data Storage

**Runtime:** All graph state is held in memory (`nodes[]`, `edges[]`).

**Auto-save:** Every 10 seconds if dirty, written to `localStorage` under `krapka_g_<projectId>` keys.

**Backup:** On window close, all `krapka_*` localStorage entries are serialized to `<userData>/backups/krapka_backup.json`. On next launch, if localStorage is empty, the backup is restored automatically via IPC.

**File save:** `.kg` files are JSON with the following schema:
```json
{
  "version": "1.2",
  "projectName": "string",
  "nodes": [{ "id": 1, "typeId": "person", "label": "string", "x": 0, "y": 0, "color": "lime" }],
  "edges": [{ "id": 2, "from": 1, "to": 3, "label": "string", "color": "blue" }]
}
```

---

## Installation

### Prebuilt Releases (recommended)

Download the latest release from the [Releases](../../releases) page.

| Platform | File | Notes |
|----------|------|-------|
| Windows | `Krapka-Graph-Setup-1.2.0.exe` | NSIS installer, adds Start Menu and Desktop shortcuts |
| Windows | `Krapka-Graph-1.2.0-portable.exe` | No installation required, run directly |
| Windows | `Krapka-Graph-1.2.0-win.zip` | Manual extract and run |
| Linux | `Krapka-Graph-1.2.0.AppImage` | Universal, no install required — `chmod +x` and run |
| Linux | `krapka-graph_1.2.0_amd64.deb` | Debian / Ubuntu — `sudo dpkg -i` |
| Linux | `krapka-graph-1.2.0.x86_64.rpm` | Fedora / RHEL / openSUSE — `sudo rpm -i` |

---

### Build from Source

**Requirements:** Node.js 18+, npm

```bash
git clone https://github.com/your-org/krapka-graph.git
cd krapka-graph
npm install
```

**Run in development:**
```bash
npm run dev
```

**Build for your platform:**
```bash
npm run build:win    # Windows — NSIS installer + portable + zip
npm run build:linux  # Linux — AppImage + deb + rpm
npm run build:all    # All platforms at once
```

Output is placed in the `dist/` directory.
