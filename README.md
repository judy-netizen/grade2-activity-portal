# Grade 2 Activity Portal

A web portal for Grade 2 activities covering English, Math, Filipino, and Spelling.
Built for a parent + student to use together — no backend, no server, just plain HTML files.

## Files
- `index.html` — Login / home screen (Student or Parent)
- `student.html` — Activity hub for your daughter
- `parent.html` — Progress dashboard for parents
- `style.css` — Shared styles
- `app.js` — Shared score-saving logic

## How to deploy on GitHub Pages

### Step 1 — Create a new repository
1. Go to https://github.com/new
2. Name it: `grade2-activity-portal`
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload the files
1. On your new repo page, click **Add file → Upload files**
2. Drag all 5 files into the upload area:
   - index.html
   - student.html
   - parent.html
   - style.css
   - app.js
3. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to your repo **Settings** tab
2. Click **Pages** in the left sidebar
3. Under "Source", select **Deploy from a branch**
4. Set branch to **main**, folder to **/ (root)**
5. Click **Save**

### Step 4 — Get your live URL
After 1–2 minutes, your portal will be live at:
```
https://YOUR-USERNAME.github.io/grade2-activity-portal
```

## Login
- **Student**: Click "I'm a Student" → enter your daughter's name (first time only)
- **Parent**: Click "I'm a Parent" → enter PIN: **1234**

## Change the parent PIN
Open `index.html` and find this line:
```javascript
var PARENT_PIN = '1234';
```
Change `1234` to any 4-digit number you prefer.

## How scores work
Scores are saved in the browser's localStorage — no account or internet needed after loading.
The parent dashboard shows scores, progress bars, and full activity history.

## Resetting scores
On the parent dashboard, click **Reset scores** to clear all progress.
