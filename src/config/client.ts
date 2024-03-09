
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const getPrismaClient = () => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};

prisma = new PrismaClient();

process.on("beforeExit", () => {
  if (prisma) {
    prisma.$disconnect();
  }
});
