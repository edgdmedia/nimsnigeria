ALTER TABLE registrations ADD COLUMN invite_sent INTEGER NOT NULL DEFAULT 0;
ALTER TABLE registrations ADD COLUMN invited_at TEXT;
