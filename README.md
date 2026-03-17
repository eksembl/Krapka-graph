# Krapka Graph

A desktop graph editor for link analysis, OSINT, and network visualization. Built with Electron.

![Krapka Graph](https://github.com/eksembl/Krapka-graph/releases/tag/v1.3.0)

---

## Features

**Canvas**
- Infinite pan/zoom canvas (10%–300%)
- Drag-and-drop node placement from sidebar palette
- Rubber-band multi-select, Shift/Ctrl/Cmd+click
- Smart alignment guides while dragging
- Grid snap (20px)
- Minimap with click-and-drag navigation
- Search with live result highlighting — matching text is highlighted directly on the node

**Nodes**
- 90 built-in types across 6 categories: Identity, Infrastructure, Social, Finance, Cyber/IOC, Documents
- Per-node properties: label, description, URL, date, status, group, custom icon (URL), tags
- 10 accent colors + custom hex color picker
- Status badges: Active, Inactive, Suspect, Confirmed
- Group labels rendered as visual bounding boxes
- Node pinning — lock position during force simulation
- Collapse/expand groups
- Hover tooltip showing label, type, status, description, URL, tags
- Change history per node (last 50 edits, with timestamp and field name)

**Edges**
- 3 global styles: Curved (Bézier), Straight, Orthogonal — switchable with `T`
- Per-edge line style: Solid / Dashed / Dotted
- Per-edge direction: directional (default) or **bidirectional** (arrow on both ends)
- Per-edge color (10 presets)
- Per-edge label and weight
- Click-to-select, double-click-to-edit

**Layout**
- Manual drag with pixel-level positioning
- Circular auto-layout
- Force-directed simulation with convergence detection, live progress indicator, and pinned-node support
- Fit-to-screen, fit-to-selection (`Ctrl+Shift+F`)
- Shortest-path finder between any two nodes (BFS)
- Duplicate detection by label and URL

**Projects**
- Multiple projects in one session via sidebar project list
- Auto-save every 10 seconds
- localStorage persistence with filesystem backup on close
- Auto-restore from backup if localStorage is empty on startup
- Storage quota warning if localStorage is full
- Unsaved-changes guard on window close

**Import / Export**
- Native `.kg` format (JSON)
- PNG export (2× resolution)
- SVG export with correct edge colors and stroke styles
- CSV export (nodes + edges, BOM-encoded for Excel compatibility)
- CSV import: simple edge list (`from,to,label`) or sectioned format (`# NODES` / `# EDGES`)
- GraphML export/import
- GEXF export (Gephi-compatible)
- JSON export (full data including timestamps and history)

**UI**
- Frameless window with custom titlebar (minimum 1024×680)
- 3 interface languages: Russian, Ukrainian, English — fully translated including toasts, tooltips, and dynamic labels
- Category filter bar in node palette
- Presentation mode — hides sidebar, toolbar, and statusbar
- Tag filtering bar
- Node search with result counter, next/prev navigation, and inline match highlight
- Bulk rename with regex support
- Templates: Telegram Channel, Crypto Cluster, Company Structure, Fraud Ring

---

## Node Types

90 types across 6 categories:

| Category | Types |
|----------|-------|
| **Identity** | Person, Passport/Doc, Organization, Alias/Nickname, Unknown |
| **Infrastructure** | Domain, IP/Network, Server, Database, ASN/BGP, Port/Service, Registry, API/Endpoint, GitLab, Bitbucket, NPM Package, Docker, AWS/Cloud, Printer/MFP, Router, IoT/Smart, Satellite/GPS |
| **Social** | Instagram, Telegram, VK, Discord, YouTube, GitHub, Twitter/X, LinkedIn, Facebook, TikTok, WhatsApp, Skype, Signal, Viber, Snapchat, Twitch, Reddit, OnlyFans, Patreon, Medium, Forum, Group/Channel |
| **Finance** | Finance/Money, Bank Card, Crypto, Wallet, Ethereum, Bitcoin, Tron/USDT, NFT, Crypto Exchange, Invoice, Data Leak |
| **Cyber / IOC** | Malware, Virus, Hash/IOC, CVE/Vuln, URL, Tor/.onion, VPN/Proxy, APK/App, SSL Cert, Darkweb Resource |
| **Documents** | File, Note, Phone, Email, Address, Vehicle/Car, Event, Location, Screenshot, SIM Card, IMEI/Device, Camera/CCTV, Drone, Weapon, Vehicle/Plate, Real Estate, Corporate Registry, Court Record, Contract, Chat/Messages, Audio/Recording, Video, Shop/Market, Ad/Listing |

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
| `Ctrl+Shift+F` | Fit to selection |
| `T` | Cycle edge style (Curved → Straight → Orthogonal) |
| `+` / `-` | Zoom in / out |
| `0` | Reset zoom to 100% |
| `↑ ↓ ← →` | Pan canvas |
| Scroll wheel | Zoom at cursor |
| `Alt+G` | Toggle grid snap |
| `P` | Toggle presentation mode |

### Nodes
| Key | Action |
|-----|--------|
| `Del` / `Backspace` | Delete selected nodes or selected edge |
| `Ctrl+A` | Select all |
| `Ctrl+C` | Copy selected |
| `Ctrl+V` | Paste (fits pasted nodes into view automatically) |
| `Ctrl+D` | Duplicate |
| `Double-click` | Open properties, focus Name field |
| `Shift+Click` / `Ctrl+Click` | Add to selection |
| `Right-click` | Context menu |

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
| `F1` | Keyboard shortcuts help |
| `Escape` | Cancel current action / close modal / exit presentation mode |

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

Supported node types: `person`, `company`, `domain`, `ip`, `server`, `database`, `file`, `note`, `phone`, `email`, `money`, `instagram`, `telegram`, `vk`, `discord`, `youtube`, `github`, `address`, `car`, `bankcard`, `passport`, `org`, `crypto`, `twitter`, `linkedin`, `facebook`, `tiktok`, `whatsapp`, `skype`, `signal`, `viber`, `snapchat`, `twitch`, `reddit`, `gitlab`, `bitbucket`, `npmpackage`, `docker`, `aws`, `ethereum`, `bitcoin`, `tron`, `nft`, `exchange`, `sim`, `imei`, `camera`, `drone`, `weapon`, `vehicle`, `property`, `company_reg`, `court`, `contract`, `invoice`, `chat`, `audio`, `video`, `malware`, `virus`, `hash`, `cve`, `url`, `tor`, `vpn`, `apk`, `cert`, `darkweb`, `asn`, `port`, `registry`, `api`, `wallet`, `leak`, `event`, `location`, `screenshot`, `printer`, `router`, `iot`, `satellite`, `forum`, `shop`, `ad`, `person_alias`, `group`, `unknown`

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
│   │   ├── app.js         — All renderer logic (~5700 lines)
│   │   └── styles.css     — UI styles
│   └── assets/
│       └── icon.png
├── package.json
└── README.md
```

---

## Data Storage

**Runtime:** All graph state is held in memory (`nodes[]`, `edges[]`).

**Auto-save:** Every 10 seconds if dirty, written to `localStorage` under `krapka_g_<projectId>` keys. If the quota is exceeded, a warning toast is shown.

**Backup:** On window close, all `krapka_*` localStorage entries are serialized to `<userData>/backups/krapka_backup.json`. On next launch, if localStorage is empty, the backup is restored automatically via IPC.

**File save:** `.kg` files are JSON with the following schema:
```json
{
  "version": "1.3",
  "projectName": "string",
  "nodes": [{ "id": 1, "typeId": "person", "label": "string", "x": 0, "y": 0, "color": "lime" }],
  "edges": [{ "id": 2, "from": 1, "to": 3, "label": "string", "color": "blue", "bidir": true, "strokeStyle": "dashed" }]
}
```

---

## Installation

### Prebuilt Releases (recommended)

Download the latest release from the [Releases](../../releases) page.

| Platform | File | Notes |
|----------|------|-------|
| Windows | `Krapka-Graph-1.3.0.Portable.exe` | No installation required, run directly |
| Windows | `Krapka-Graph-1.3.0-win.zip` | Manual extract and run |
| macOS (Apple Silicon) | `Krapka-Graph-1.3.0-arm64.dmg` | Installer for M1/M2/M3 |
| macOS (Apple Silicon) | `Krapka-Graph-1.3.0-arm64-mac.zip` | ZIP for M1/M2/M3 |
| macOS (Intel) | `Krapka-Graph-1.3.0.dmg` | Installer for Intel Macs |
| macOS (Intel) | `Krapka-Graph-1.3.0-mac.zip` | ZIP for Intel Macs |
| Linux | `Krapka-Graph-1.3.0.AppImage` | Universal, no install required — `chmod +x` and run |
| Linux | `krapka-graph-1.3.0.x86_64.rpm` | Fedora / RHEL / openSUSE — `sudo rpm -i` |

---

### Build from Source

**Requirements:** Node.js 18+, npm

```bash
git clone https://github.com/eksembl/Krapka-graph.git
cd krapka-graph
npm install
```

**Run in development:**
```bash
npm run dev
```

**Build for your platform:**
```bash
npm run build:win    # Windows — portable + zip
npm run build:mac    # macOS — dmg + zip (arm64 + x64)
npm run build:linux  # Linux — AppImage + rpm
npm run build:all    # All platforms at once
```

Output is placed in the `dist/` directory.
