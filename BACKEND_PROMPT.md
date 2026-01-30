# Backend Prompt: Habesha | Substack

Build the backend for a production-grade Substack-like platform with bilingual support (English + Amharic). Use a REST or GraphQL API and a scalable auth system. Include background workers for email delivery, scheduled posts, and analytics aggregation.

## Requirements
- Secure auth (JWT + refresh tokens or session-based).
- Role-based access: writer, editor, admin.
- Publication ownership (one writer can own multiple publications).
- Drafts, autosave, scheduled publishing.
- Free vs paid posts with paywall + teaser.
- Subscriptions: free, paid monthly, paid yearly.
- Email delivery system (subject customization, preview, unsubscribe).
- Comments, likes/reactions, threaded replies with moderation.
- Analytics: views, subscriber growth, open/click rates, revenue.
- Search by author, topic, language.
- Bilingual support per field (en + am) and mixed-language posts.
- Audit logging and rate limiting.

## Suggested Architecture
- API service (Node/Nest or Java/Spring).
- Background workers (queue for email & analytics).
- Storage: Postgres + Redis.
- Payments: Stripe-style abstraction.
- Search: Postgres full-text or OpenSearch/Meilisearch.
- CDN for images and attachments.

## Example API Surface
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `GET /api/publications`
- `POST /api/publications`
- `GET /api/posts?language=en&tag=tech`
- `POST /api/posts` (draft)
- `POST /api/posts/:id/publish`
- `POST /api/posts/:id/schedule`
- `GET /api/analytics/overview`
- `POST /api/subscriptions/checkout`
- `POST /api/emails/preview`
- `POST /api/emails/send`

## Data Models (SQL-style)

### users
- id (pk, uuid)
- email (unique)
- password_hash
- name
- handle (unique)
- avatar_url
- role (writer/editor/admin)
- created_at
- updated_at

### profiles
- user_id (pk, fk -> users)
- bio_en
- bio_am
- location
- website_url
- socials (jsonb)

### publications
- id (pk, uuid)
- owner_id (fk -> users)
- name
- tagline
- cover_image_url
- about_en
- about_am
- tags (text[])
- is_active
- created_at

### publication_members
- publication_id (fk -> publications)
- user_id (fk -> users)
- role (owner/editor/contributor)
- created_at

### posts
- id (pk, uuid)
- publication_id (fk -> publications)
- author_id (fk -> users)
- slug (unique per publication)
- title_en
- title_am
- subtitle_en
- subtitle_am
- body_en (rich text json)
- body_am (rich text json)
- body_mixed (rich text json, optional)
- language (en/am/mixed)
- visibility (free/paid)
- status (draft/scheduled/published)
- scheduled_at
- published_at
- cover_image_url
- tags (text[])
- read_time_minutes
- created_at
- updated_at

### post_assets
- id (pk, uuid)
- post_id (fk -> posts)
- type (image/embed/code)
- url
- caption
- created_at

### comments
- id (pk, uuid)
- post_id (fk -> posts)
- author_id (fk -> users)
- parent_id (nullable, self fk)
- content
- status (published/hidden/pending)
- created_at

### reactions
- id (pk, uuid)
- post_id (fk -> posts)
- user_id (fk -> users)
- emoji
- created_at

### subscriptions
- id (pk, uuid)
- user_id (fk -> users)
- publication_id (fk -> publications)
- status (active/canceled/past_due)
- tier (free/paid)
- started_at
- ended_at

### subscription_plans
- id (pk, uuid)
- publication_id (fk -> publications)
- name
- price_monthly
- price_yearly
- currency
- is_active

### payments
- id (pk, uuid)
- subscription_id (fk -> subscriptions)
- provider (stripe)
- provider_ref
- amount
- currency
- status
- created_at

### emails
- id (pk, uuid)
- post_id (fk -> posts)
- subject
- preview_html
- status (draft/sent)
- sent_at

### email_events
- id (pk, uuid)
- email_id (fk -> emails)
- user_id (fk -> users)
- event_type (delivered/open/click/unsubscribe)
- created_at

### analytics_daily
- id (pk, uuid)
- post_id (fk -> posts)
- date
- views
- unique_views
- opens
- clicks
- new_subscribers
- revenue

## Indexing Guidance
- `posts (publication_id, status, published_at)`
- `posts (tags gin)`
- `comments (post_id, parent_id)`
- `subscriptions (publication_id, status)`
- `email_events (email_id, event_type)`

## Testing Expectations
- Unit tests for auth, posts, subscriptions.
- Integration tests for publish workflow & email delivery.
- Load tests for analytics reads.
