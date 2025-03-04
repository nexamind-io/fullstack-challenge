import { prisma } from "@/prisma";
import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

const sanitize = <U extends User>(u: U) => {
  const { password, ...rest } = u;

  return rest;
};

const comparePasswords = (plainPassword: string, hashedPassword: string) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

export const authorize = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  if (
    user &&
    user.password &&
    (await comparePasswords(password, user.password))
  ) {
    return sanitize(user);
  }

  return null;
};
