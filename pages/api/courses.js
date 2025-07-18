import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const courses = await prisma.course.findMany();
  res.status(200).json(courses);
}
