import { defineConfig } from "cypress";
import { loadEnvConfig } from "@next/env";
import path from "path";
import dotenv from "dotenv";

// Charge explicitement les variables d'environnement de test
dotenv.config({
  path: path.resolve(process.cwd(), ".env.test"),
});

const { combinedEnv } = loadEnvConfig(process.cwd(), true);
console.log("Combined ENV:", combinedEnv);

export default defineConfig({
  e2e: {
    baseUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    env: {
      ...combinedEnv,
    },
    setupNodeEvents(on, config) {
      // Ici, nous pouvons ajouter des tâches personnalisées pour gérer la base de données
      on("task", {
        async resetDatabase() {
          // Cette tâche sera utilisée pour réinitialiser la base de données avant chaque test
          const { execSync } = require("child_process");
          try {
            console.log("Starting database reset...");
            execSync(
              "npx dotenv-cli -e .env.test -- npx prisma migrate reset --force",
              {
                stdio: "inherit",
              }
            );
            console.log("Database reset completed successfully");
            return null;
          } catch (error) {
            console.error("Error during database reset:", error);
            return (error as Error).message;
          }
        },
      });

      // Important: retourner la config mise à jour
      return config;
    },
  },
});
