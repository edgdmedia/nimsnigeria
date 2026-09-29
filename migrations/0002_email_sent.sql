ALTER TABLE registrations ADD COLUMN email_sent INTEGER NOT NULL DEFAULT 0;

CREATE INDEX idx_registrations_email_sent ON registrations (email_sent);
