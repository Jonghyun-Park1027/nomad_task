import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/features/**/schema.ts", //database schema 정의
  out: "./drizzle", //migration 파일 저장 위치
  dialect: "postgresql", //database dialect
  dbCredentials: {
    url: process.env.DATABASE_URL!, //database url
  },
});
