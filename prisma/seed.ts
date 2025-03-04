import { hashPassword } from "@/lib/auth";
import { prisma } from "@/prisma";

const users = [
  {
    email: "candidate@nexamind.io",
    password: "Nexamind123!",
  },
];

const seed = async () => {
  for (const user of users) {
    const hashedPassword = await hashPassword(user.password);

    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: { ...user, password: hashedPassword },
    });

    console.log(`User ${user.email} created with password ${user.password}`);
  }
};

seed();
