

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" ;

CREATE TABLE "workspaces" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "name" varchar,
  "logo" varchar,
  "feedback_type" int,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "user_workspace_access" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "workspace_id" uuid,
  "date_of_joining" date,
  "department" uuid,
  "designation" uuid,
  "reporting_to" uuid,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "user_profiles" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "workspace_id" uuid,
  "user_id" varchar,
  "profile_pic" varchar,
  "name" varchar,
  "status" int,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "workspace_grading" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "workspace_id" uuid,
  "label" varchar,
  "description" varchar,
  "grade_value" float4,
  "is_active" boolean,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "master_user_statuses" (
  "id" int PRIMARY KEY,
  "label" varchar,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "master_feedback_types" (
  "id" int PRIMARY KEY,
  "label" varchar,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "user_role_mapping" (
  "id" int PRIMARY KEY,
  "workspace_id" uuid,
  "user_profile_id" uuid,
  "role_id" int,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "master_roles" (
  "id" int PRIMARY KEY,
  "label" varchar,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "workspace_signals" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "label" varchar,
  "is_active" boolean,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "feedbacks" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "workspace_id" uuid,
  "signal" uuid,
  "grading" uuid,
  "from" uuid,
  "to" uuid,
  "is_responded" boolean,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "feedback_responses" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "feedback_id" uuid,
  "reason" varchar,
  "description" varchar,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "workspace_department" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "workspace_id" uuid,
  "label" varchar,
  "description" varchar,
  "is_active" boolean,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "workspace_designation" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "workspace_id" uuid,
  "label" varchar,
  "description" varchar,
  "is_active" boolean,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "feedback_reminder" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "from" uuid,
  "to" uuid,
  "remind_by" timestamp,
  "status" varchar,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "notification" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "reminder_id" uuid,
  "type" uuid,
  "created_by" uuid,
  "updated_by" uuid,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "master_notification_type" (
  "id" int PRIMARY KEY,
  "label" varchar,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);

ALTER TABLE "workspaces" ADD FOREIGN KEY ("feedback_type") REFERENCES "master_feedback_types" ("id");

ALTER TABLE "workspaces" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspaces" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "user_workspace_access" ADD FOREIGN KEY ("workspace_id") REFERENCES "workspaces" ("id");

ALTER TABLE "user_workspace_access" ADD FOREIGN KEY ("department") REFERENCES "workspace_department" ("id");

ALTER TABLE "user_workspace_access" ADD FOREIGN KEY ("designation") REFERENCES "workspace_designation" ("id");

ALTER TABLE "user_workspace_access" ADD FOREIGN KEY ("reporting_to") REFERENCES "user_profiles" ("id");

ALTER TABLE "user_workspace_access" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "user_workspace_access" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "user_profiles" ADD FOREIGN KEY ("workspace_id") REFERENCES "workspaces" ("id");

ALTER TABLE "user_profiles" ADD FOREIGN KEY ("status") REFERENCES "master_user_statuses" ("id");

ALTER TABLE "user_profiles" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "user_profiles" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspace_grading" ADD FOREIGN KEY ("workspace_id") REFERENCES "workspaces" ("id");

ALTER TABLE "workspace_grading" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspace_grading" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "user_role_mapping" ADD FOREIGN KEY ("workspace_id") REFERENCES "workspaces" ("id");

ALTER TABLE "user_role_mapping" ADD FOREIGN KEY ("user_profile_id") REFERENCES "user_profiles" ("id");

ALTER TABLE "user_role_mapping" ADD FOREIGN KEY ("role_id") REFERENCES "master_roles" ("id");

ALTER TABLE "user_role_mapping" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "user_role_mapping" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspace_signals" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspace_signals" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("workspace_id") REFERENCES "workspaces" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("signal") REFERENCES "workspace_signals" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("grading") REFERENCES "workspace_grading" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("from") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("to") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedback_responses" ADD FOREIGN KEY ("feedback_id") REFERENCES "feedbacks" ("id");

ALTER TABLE "feedback_responses" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedback_responses" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspace_department" ADD FOREIGN KEY ("workspace_id") REFERENCES "workspaces" ("id");

ALTER TABLE "workspace_department" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspace_department" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspace_designation" ADD FOREIGN KEY ("workspace_id") REFERENCES "workspaces" ("id");

ALTER TABLE "workspace_designation" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "workspace_designation" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedback_reminder" ADD FOREIGN KEY ("from") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedback_reminder" ADD FOREIGN KEY ("to") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedback_reminder" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "feedback_reminder" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "notification" ADD FOREIGN KEY ("reminder_id") REFERENCES "feedback_reminder" ("id");

ALTER TABLE "notification" ADD FOREIGN KEY ("created_by") REFERENCES "user_profiles" ("id");

ALTER TABLE "notification" ADD FOREIGN KEY ("updated_by") REFERENCES "user_profiles" ("id");
