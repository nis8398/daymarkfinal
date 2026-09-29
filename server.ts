import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SyncStoreEntry {
  data: any;
  updatedAt: number;
  lastActorRole: 'CEO' | 'EXECUTIVE_ASSISTANT';
  assistantBriefing?: string;
  ceoFeedbackNote?: string;
}

const syncStore = new Map<string, SyncStoreEntry>();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: '10mb' }));

  // Executive Pairing & Cross-Device Sync Endpoints
  app.get('/api/sync/:code', (req, res) => {
    const code = req.params.code.trim().toUpperCase();
    const entry = syncStore.get(code);
    if (!entry) {
      return res.status(404).json({ exists: false, error: 'Pairing code not found' });
    }
    return res.json({
      exists: true,
      data: entry.data,
      updatedAt: entry.updatedAt,
      lastActorRole: entry.lastActorRole,
      assistantBriefing: entry.assistantBriefing,
      ceoFeedbackNote: entry.ceoFeedbackNote,
    });
  });

  app.post('/api/sync/:code', (req, res) => {
    const code = req.params.code.trim().toUpperCase();
    const { data, actorRole, assistantBriefing, ceoFeedbackNote } = req.body;

    const existing = syncStore.get(code);
    const updatedEntry: SyncStoreEntry = {
      data: data || existing?.data,
      updatedAt: Date.now(),
      lastActorRole: actorRole || existing?.lastActorRole || 'EXECUTIVE_ASSISTANT',
      assistantBriefing:
        assistantBriefing !== undefined ? assistantBriefing : existing?.assistantBriefing,
      ceoFeedbackNote:
        ceoFeedbackNote !== undefined ? ceoFeedbackNote : existing?.ceoFeedbackNote,
    };

    syncStore.set(code, updatedEntry);
    return res.json({
      success: true,
      updatedAt: updatedEntry.updatedAt,
      code,
    });
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
  });

  // Direct downloadable index.html endpoints
  app.get('/download/index.html', (_req, res) => {
    res.download(path.join(__dirname, 'public', 'daymark-standalone.html'), 'index.html');
  });

  app.get('/download-index.html', (_req, res) => {
    res.download(path.join(__dirname, 'public', 'daymark-standalone.html'), 'index.html');
  });

  app.get('/daymark-github-final.zip', (_req, res) => {
    res.download(path.join(__dirname, 'public', 'daymark-github-final.zip'), 'daymark-github-final.zip');
  });

  app.get('/download/github', (_req, res) => {
    res.download(path.join(__dirname, 'public', 'daymark-github-final.zip'), 'daymark-github-final.zip');
  });

  // Mount Vite middleware in development, or serve static dist in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Daymark Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
